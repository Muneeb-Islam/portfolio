import { s3baseUrl } from "@/config/config";
import {
  _send_contact_support_email,
  add_free_member_by_web,
  confirm_one_time_payment_for_web,
  confirm_subscription_incomplete_for_web,
  get_web_intent_client_secret_for_one_time,
  pay_now_for_subscription_web,
} from "../../../DAL/Form";

import {
  _get_token_from_localStorage,
  _get_user_from_localStorage,
  _set_user_in_localStorage,
} from "../../../DAL/loacalStorage";

import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import React from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

// import { CardElement } from "@stripe/react-stripe-js";
import { useRouter } from "next/router";
import Loader from "@/Components/Loader/Loader";

const ContactSection = ({ page_data, PaymentPlan }) => {
  const paymentPage = page_data.payment_page.sale_page_detail;
  const salePage = page_data.sale_page_detail;
  const router = useRouter();
  const [isLoadingCard, setIsLoadingCard] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const [paymentPlan, setPaymentPlan] = useState([]);
  const [pageData, setPageData] = useState({});
  const { enqueueSnackbar } = useSnackbar();
  const [clientSecret, setClientSecret] = useState("");
  const [resPostData, setResPostData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isStoredToken, setIsStoredToken] = useState(false);
  const params = router.query ? router.query : page_data.query;
  const navigate = router.push;

  const [inputState, setInputsState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    passwordType: "password",
  });

  const handleChangeInputsState = (e) => {
    const { name, value } = e.target;
    setInputsState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const payNowForSubscription = async (token, CardNumberElement) => {
    const formData = new FormData();
    // if (_get_token_from_localStorage()) {
    //   formData.append("x_sh_auth", _get_token_from_localStorage());
    //   formData.append("plan_id", paymentPlan._id);
    //   formData.append("page_slug", params.page_slug);
    //   formData.append("source_token", token);
    // } else {
    formData.append("first_name", inputState.firstName);
    formData.append("last_name", inputState.lastName);
    formData.append("email", inputState.email);
    formData.append("password", inputState.password);
    formData.append("contact_number", inputState.phone);
    formData.append("source_token", token);
    formData.append("page_slug", params.page_slug);
    formData.append("plan_id", paymentPlan._id);
    // }

    // if client secret is already generated
    if (clientSecret && resPostData) {
      handleSecureCard(clientSecret, CardNumberElement, resPostData);
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
    } else if (result.code === 210) {
      const postData = {
        email: inputState.email
          ? inputState.email
          : _get_user_from_localStorage()?.email,
        plan_id: paymentPlan._id,
        page_slug: params.page_slug,
        subscription_id: page_data?.strip_subscription_id,
      };

      // save data for failure use
      setClientSecret(result.client_secret);
      setResPostData(postData);
      // handle secure card action
      handleSecureCard(result.client_secret, CardNumberElement, postData);
    } else {
      enqueueSnackbar(result.message, { variant: "error" });
      setIsLoadingCard(false);
    }
  };

  const getIntentClientSecretForOneTime = async (token, CardNumberElement) => {
    const formData = new FormData();
    formData.append("first_name", inputState.firstName);
    formData.append("last_name", inputState.lastName);
    formData.append("email", inputState.email);
    formData.append("password", inputState.password);
    formData.append("contact_number", inputState.phone);
    formData.append("plan_id", paymentPlan._id);
    formData.append("page_slug", params.page_slug);

    // if client secret is already generated
    if (clientSecret && resPostData) {
      handleSecureCard(clientSecret, CardNumberElement, resPostData);
      return;
    }
    const result = await get_web_intent_client_secret_for_one_time(formData);
    if (result.code === 200) {
      const postData = {
        plan_id: paymentPlan._id,
        page_slug: params.page_slug,
      };
      postData.email = inputState.email;

      // save data for failure use
      setClientSecret(result.client_secret);
      setResPostData(postData);
      // handle secure card action
      handleSecureCard(result.client_secret, CardNumberElement, postData);
    } else {
      enqueueSnackbar(result.message, { variant: "error" });
      setIsLoadingCard(false);
    }
  };

  const confirmCardPayment = async (postData) => {
    if (paymentPlan.payment_access === "recursion") {
      const result = await confirm_subscription_incomplete_for_web(postData);

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
    }
  };

  const handleSecureCard = (client_secret, CardNumberElement, postData) => {
    enqueueSnackbar("Processing card...", {
      variant: "info",
    });

    stripe
      .confirmCardPayment(client_secret, {
        payment_method: {
          card: CardNumberElement,
        },
      })
      .then(function (result) {
        // Handle result.error or result.paymentIntent
        if (result.error) {
          setIsLoadingCard(false);
          enqueueSnackbar(result.error.message, { variant: "error" });
          return;
        }

        confirmCardPayment(postData);
      })
      .catch((err) => {
        enqueueSnackbar(err.message, { variant: "error" });
      });
  };

  const handleCardAction = (card_token, CardNumberElement) => {
    if (paymentPlan.payment_access === "recursion") {
      payNowForSubscription(card_token, CardNumberElement);
    } else {
      getIntentClientSecretForOneTime(card_token, CardNumberElement);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (elements == null) {
      return;
    }
    setIsLoadingCard(true);
    const cardElement = elements.getElement(CardNumberElement);
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

    // const formData = new FormData();
    //   formData.append("first_name", inputState.firstName);
    //   formData.append("last_name", inputState.lastName);
    //   formData.append("email", inputState.email);
    //   formData.append("password", inputState.password);
    //   formData.append("contact_number", inputState.phone);
    //   formData.append("page_slug", params.page_slug);
    //   formData.append("plan_id", paymentPlan._id);

    const postData= {
      first_name: inputState.firstName,
      last_name: inputState.lastName,
      email: inputState.email,
      password: inputState.password,
      contact_number: inputState.phone,
      page_slug: params.page_slug,
      plan_id: paymentPlan._id,
    }
    setIsLoadingCard(true);
    const result = await add_free_member_by_web(postData);
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
    return <Loader />;
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
                    readOnly={isStoredToken ? true : false}
                  />
                </div>
                <div className="col-lg-6 mt-4 mt-md-0">
                  <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    placeholder="Last Name "
                    // required
                    autoComplete="off"
                    value={inputState.lastName}
                    onChange={handleChangeInputsState}
                    readOnly={isStoredToken ? true : false}
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
                    readOnly={isStoredToken ? true : false}
                  />
                </div>
                <div className="col-lg-6 mt-4">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address *"
                    required
                    name="email"
                    value={inputState.email}
                    onChange={handleChangeInputsState}
                    readOnly={isStoredToken ? true : false}
                  />
                </div>
                {!isStoredToken && (
                  <div className=" col-12 mt-3 payment-form-password">
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
                )}

                {paymentPlan.is_plan_free === false ? (
                  <>
                    <h3>Payment Detail:</h3>
                    <div className="col-12 mt-2">
                      <label>Card Number </label>
                      <CardNumberElement className="form-control" />
                    </div>

                    <div className="col-lg-6 mt-4">
                      <label>Expiration Date</label>
                      <CardExpiryElement className="form-control" />
                    </div>
                    <div className="col-lg-6 mt-4">
                      <label>CVC</label>
                      <CardCvcElement className="form-control" />
                    </div>
                  </>
                ) : (
                  ""
                )}
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
