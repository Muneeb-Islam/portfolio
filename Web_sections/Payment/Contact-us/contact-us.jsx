import { s3baseUrl } from "@/config/config";
import {
  _payment_for_one_time,
  _payment_free,
  _send_contact_support_email,
  confirm_one_time_payment_for_web,
  pay_now_for_subscription_web,
} from "../../../DAL/Form";

import {
  _get_token_from_localStorage,
  _get_user_from_localStorage,
  _set_user_in_localStorage,
} from "@/DAL/loacalStorage";

import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import React from "react";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import { CardElement } from "@stripe/react-stripe-js";
import { useRouter } from "next/router";
import { LinearProgress } from "@mui/material";
import convertCurrencyToSign from "@/utils/constants";

const ContactSection = ({ page_data, PaymentPlan }) => {
  const paymentPage = page_data.payment_page.sale_page_detail;
  const router = useRouter();
  const [isLoadingCard, setIsLoadingCard] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const [paymentPlan, setPaymentPlan] = useState([]);
  console.log(paymentPlan, "---paymentPlan");
  const [pageData, setPageData] = useState({});
  const { enqueueSnackbar } = useSnackbar();
  const [clientSecret, setClientSecret] = useState("");
  const [resPostData, setResPostData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const params = router.query ? router.query : page_data.query;
  const navigate = router.push;

  const [inputState, setInputsState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    passwordType: "password",
    brand_name: "",
  });

  const handleChangeInputsState = (e) => {
    const { name, value } = e.target;
    setInputsState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (elements == null) {
      return;
    }
    setIsLoadingCard(true);
    const cardElement = elements.getElement(CardElement);
    stripe.createToken(cardElement).then(function (result) {
      // Handle result.error or result.token
      if (result.error) {
        setIsLoadingCard(false);
        enqueueSnackbar(result.error.message, { variant: "error" });
        return;
      }
      handleCardAction(result.token.id, cardElement);
    });
  };

  const handleSubmitFree = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("first_name", inputState.firstName);
    formData.append("last_name", inputState.lastName);
    formData.append("email", inputState.email);
    formData.append("password", inputState.password);
    formData.append("contact_number", inputState.phone);
    formData.append("page_slug", params.page_slug);
    formData.append("plan_id", paymentPlan._id);

    setIsLoadingCard(true);
    const result = await _payment_free(formData);
    if (result.code === 200) {
      setIsLoadingCard(false);
      enqueueSnackbar(result.message, {
        variant: "success",
      });
      setIsLoading(true);
      localStorage.setItem("token", result?.token);
      _set_user_in_localStorage(result?.user_info);
      handleNavigateToThankyou();
    } else {
      enqueueSnackbar(result.message, { variant: "error" });
      setIsLoadingCard(false);
    }
  };

  const payNowForSubscription = async (token, cardElement) => {
    const formData = new FormData();

    formData.append("first_name", inputState.firstName);
    formData.append("last_name", inputState.lastName);
    formData.append("email", inputState.email);
    formData.append("password", inputState.password);
    formData.append("contact_number", inputState.phone);
    formData.append("brand_name", inputState.brand_name);
    formData.append("source_token", token);
    formData.append("page_slug", params.page_slug);
    formData.append("plan_id", paymentPlan._id);

    // if client secret is already generated
    if (clientSecret && resPostData) {
      handleSecureCard(clientSecret, cardElement, resPostData);
      return;
    }
    const result = await pay_now_for_subscription_web(formData);
    if (result.code === 200) {
      setIsLoadingCard(false);
      enqueueSnackbar("Payment succeeded successfully.", {
        variant: "success",
      });
      localStorage.setItem("token", result?.token);
      _set_user_in_localStorage(result?.user_info);
      handleNavigateToThankyou();
    } else if (result.code === 201) {
      const postData = {
        susbcription_object: result.susbcription_object,
      };

      setClientSecret(result.client_secret);
      setResPostData(postData);
      handleSecureCard(result.client_secret, cardElement, postData);
    } else {
      enqueueSnackbar(result.message, { variant: "error" });
      setIsLoadingCard(false);
    }
  };

  const getIntentClientSecretForOneTime = async (token, cardElement) => {
    const formData = new FormData();
    formData.append("first_name", inputState.firstName);
    formData.append("last_name", inputState.lastName);
    formData.append("email", inputState.email);
    formData.append("password", inputState.password);
    formData.append("contact_number", inputState.phone);
    formData.append("brand_name", inputState.brand_name);
    formData.append("plan_id", paymentPlan._id);
    formData.append("page_slug", params.page_slug);
    formData.append("source_token", token);

    // if client secret is already generated
    if (clientSecret && resPostData) {
      handleSecureCard(clientSecret, cardElement, resPostData);
      return;
    }

    const result = await _payment_for_one_time(formData);

    if (result.code === 200) {
      const postData = {
        email: inputState.email
          ? inputState.email
          : _get_user_from_localStorage()?.email,
        plan_id: paymentPlan._id,
        page_slug: params.page_slug,
        shipping_object: result.shipping_object,
      };

      confirmCardPayment(postData);
    } else if (result.code === 201) {
      const postData = {
        email: inputState.email
          ? inputState.email
          : _get_user_from_localStorage()?.email,
        plan_id: paymentPlan._id,
        page_slug: params.page_slug,
        shipping_object: result.shipping_object,
      };

      handleSecureCard(result.client_secret, cardElement, postData);
      setResPostData(postData);
      setClientSecret(result.client_secret);
    } else {
      enqueueSnackbar(result.message, { variant: "error" });
      setIsLoadingCard(false);
    }
  };

  const confirmCardPayment = async (postData) => {
    if (paymentPlan.payment_access === "one_time") {
      const result = await confirm_one_time_payment_for_web(postData);

      if (result.code === 200) {
        setIsLoadingCard(false);
        enqueueSnackbar("Payment succeeded successfully.", {
          variant: "success",
        });

        setIsLoading(true);
        localStorage.setItem("token", result?.token);
        _set_user_in_localStorage(result?.user_info);
        handleNavigateToThankyou();
      } else {
        enqueueSnackbar(result.message, { variant: "error" });
        setIsLoadingCard(false);
      }
    } else {
      enqueueSnackbar("Payment succeeded successfully.", {
        variant: "success",
      });

      handleNavigateToThankyou();
    }
  };

  const handleSecureCard = (client_secret, cardElement, postData) => {
    enqueueSnackbar("Processing card...", {
      variant: "info",
    });

    stripe
      .confirmCardPayment(client_secret, {
        payment_method: {
          card: cardElement,
        },
      })
      .then(function (result) {
        // Handle result.error or result.paymentIntent
        if (result.error) {
          setIsLoadingCard(false);
          enqueueSnackbar(result.error.message, { variant: "error" });
          return;
        }

        if (
          result.payment_intent &&
          result.payment_intent.status === "succeeded"
        ) {
          handleCardAction();
          return;
        }

        confirmCardPayment(postData);
      })
      .catch((err) => {
        enqueueSnackbar(err.message, { variant: "error" });
      });
  };

  const handleCardAction = (card_token, cardElement) => {
    if (
      paymentPlan.payment_access === "recurring_basic" ||
      paymentPlan.payment_access === "recurring_fixed" ||
      paymentPlan.payment_access === "installment"
    ) {
      payNowForSubscription(card_token, cardElement);
    } else {
      getIntentClientSecretForOneTime(card_token, cardElement);
    }
  };

  const changePasswordType = () => {
    if (inputState.passwordType === "password") {
      setInputsState((prevState) => ({
        ...prevState,
        ["passwordType"]: "text",
      }));
    } else {
      setInputsState((prevState) => ({
        ...prevState,
        ["passwordType"]: "password",
      }));
    }
  };

  const handleNavigateToThankyou = () => {
    navigate({
      pathname: `/${params.page_slug}/thank-you/${params.plan_slug}`,
    });
  };

  useEffect(() => {
    setPageData(page_data);
    let find_plan = PaymentPlan.find(
      (country) => country.plan_slug == params.plan_slug
    );
    setPaymentPlan(find_plan);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <LinearProgress />;
  }

  return (
    <section className="contact_form" id="contact_form_wrapper">
      <div className="container-fluid px-lg-5">
        <div className="row justify-content-center align-items-center mx-3 mt-5 contact-card">
          <div className="col-lg-6 ps-lg-0">
            <div
              dangerouslySetInnerHTML={{
                __html: paymentPage.ready_to_see_text,
              }}
            ></div>
            <img
              src={s3baseUrl + paymentPage.payment_form_image}
              alt=""
              className="img-fluid"
            />
          </div>

          <div className="col-lg-6 ps-lg-5 mt-4 mt-md-0">
            <form
              onSubmit={
                paymentPlan.is_plan_free === false
                  ? handleSubmit
                  : handleSubmitFree
              }
            >
              <div className="row">
                <div className="col-lg-6">
                  <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    placeholder="First Name *"
                    required
                    autoComplete="off"
                    value={inputState.firstName}
                    onChange={handleChangeInputsState}
                  />
                </div>
                <div className="col-lg-6 mt-4 mt-md-0">
                  <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    placeholder="Last Name *"
                    required
                    autoComplete="off"
                    value={inputState.lastName}
                    onChange={handleChangeInputsState}
                  />
                </div>
                <div className="col-lg-6 mt-4">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Phone Number *"
                    required
                    name="phone"
                    value={inputState.phone}
                    onChange={handleChangeInputsState}
                  />
                </div>
                <div className="col-lg-6 mt-4">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email *"
                    required
                    name="email"
                    value={inputState.email}
                    onChange={handleChangeInputsState}
                  />
                </div>
                <div className=" col-lg-6 mt-4 payment-form-password">
                  <input
                    type={inputState.passwordType}
                    className="form-control"
                    name="password"
                    value={inputState.password}
                    required
                    onChange={handleChangeInputsState}
                    placeholder="Password *"
                    autoComplete="new-password"
                  />
                  <span
                    className="payment-form-password-icon"
                    onClick={() => {
                      changePasswordType();
                    }}
                  >
                    <i className="fa-solid fa-eye"></i>
                  </span>
                </div>
                <div className="col-lg-6 mt-4">
                  <input
                    type="text"
                    className="form-control"
                    name="brand_name"
                    value={inputState.brand_name}
                    required
                    onChange={handleChangeInputsState}
                    placeholder="Brand name *"
                  />
                </div>
                {paymentPlan.is_plan_free === false ? (
                  <>
                    <div className="pt-3">
                      <h3>Payment Detail:</h3>
                    </div>
                    <div className="col-12 mt-2">
                      <CardElement
                        options={{
                          hidePostalCode: true,
                          style: {
                            base: {
                              iconColor: "#000",
                              padding: "10px",
                              color: "#000",
                              borderRadius: "12px",
                              borderColor: "#000",
                              "::placeholder": {
                                color: "#7e8080",

                                textTransform: "capitalize",
                              },
                            },
                          },
                        }}
                        className="form-control"
                      />
                    </div>
                  </>
                ) : (
                  ""
                )}

                <div className="col-12 mt-4">
                  <div className="d-flex justify-content-between select-plan-price">
                    <div>
                      <h4>Your Plan</h4>
                    </div>
                    <div>
                      <h4>Price</h4>
                    </div>
                  </div>
                  <div className="border-line-div"></div>
                  <div className="d-flex justify-content-between select-plan-price">
                    <div>
                      <h5>{paymentPlan?.plan_title}</h5>
                    </div>
                    <div>
                      <h5>
                        {paymentPlan.is_plan_free
                          ? "Free"
                          : paymentPlan.payment_access === "installment"
                          ? convertCurrencyToSign(paymentPlan.plan_currency) +
                            paymentPlan.initial_amount
                          : paymentPlan.payment_access === "one_time" ||
                            paymentPlan.payment_access === "recurring_fixed" ||
                            paymentPlan.payment_access === "recurring_basic"
                          ? convertCurrencyToSign(paymentPlan.plan_currency) +
                            paymentPlan.plan_price
                          : ""}
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-12 mt-4">
                  {isLoadingCard ? (
                    <button
                      type="button"
                      disabled={true}
                      className="btn-vision w-100 mt-0"
                    >
                      {"Processing..."}
                    </button>
                  ) : (
                    <button type="submit" className="btn-vision w-100 mt-0">
                      {paymentPage.get_started_button}
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
