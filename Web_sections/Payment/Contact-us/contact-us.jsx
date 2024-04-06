import {
  _payment_for_one_time,
  _payment_free,
  confirm_one_time_payment_for_web,
  pay_now_for_subscription_web,
} from "../../../DAL/Form";

import {
  _get_user_from_localStorage,
  _set_user_in_localStorage,
} from "@/DAL/loacalStorage";

import convertCurrencyToSign from "@/utils/constants";
import { LinearProgress } from "@mui/material";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";

const ContactSection = ({ page_data, PaymentPlans }) => {
  const paymentPage = page_data.payment_page.page_detail;
  const router = useRouter();
  const [pop, setpop] = useState(false);
  const [isLoadingCard, setIsLoadingCard] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const [paymentPlan, setPaymentPlan] = useState([]);
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

  const [inputPopState, setInputsPopState] = useState({
    email: "",
    password: "",
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

  const showPopUp = () => {
    setpop(true);
  };
  const closePopUp = () => {
    setpop(false);
  };

  // pop up login
  const handleSubmitPoPup = async (e) => {
    e.preventDefault();
    setIsLoadingCard(true);
    const postData = {
      email: inputPopState.email,
      password: inputPopState.password,
    };
    setIsLoadingCard(true);
    const result = await login_member_by_payment_popup(postData);
    if (result.code === 200) {
      setIsLoadingCard(false);
      localStorage.setItem("token", result?.token);
      _set_user_in_localStorage(result?.user_info);
      set_user_info(result?.user_info);
      enqueueSnackbar(result.message, {
        variant: "success",
      });
      setpop(false);
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

  const handleClickPlan = (plan) => {
    router.replace(`/${params.page_slug}/payment-page/${plan.plan_slug}`);
    setPaymentPlan(plan);
  };

  const handleChangeInputsPopState = (e) => {
    const { name, value } = e.target;
    setInputsPopState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    setPageData(page_data);
    let find_plan = PaymentPlans.find(
      (plan) => plan.plan_slug == params.plan_slug
    );
    setPaymentPlan(find_plan);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <LinearProgress />;
  }

  return (
    <>
      {/* {pop && (
        <div className="popup">
          <div className="crossPoPUp" onClick={closePopUp}>
            x
          </div>
          <div className="container">
            <div className="row mt-5 margin-bottom-form">
              <div style={{ textAlign: "center" }}>
                <span className="log-heading">Vision login</span>
              </div>
              <form
                style={{ colorScheme: "dark" }}
                onSubmit={handleSubmitPoPup}
                autoComplete="off"
              >
                <div className="col-md-12 form-group mt-4">
                  <input
                    type="email"
                    className="form-control field-color"
                    name="email"
                    required
                    autoComplete="new-password"
                    value={inputPopState.email}
                    onChange={handleChangeInputsPopState}
                    placeholder="Email:*"
                  />
                </div>
                <div className="col-md-12 form-group mt-3 payment-form-password">
                  <input
                    type={inputState.passwordType}
                    className="form-control"
                    name="password"
                    required
                    onChange={handleChangeInputsPopState}
                    value={inputPopState.password}
                    placeholder="Password:*"
                    autoComplete="off"
                  />
                  <span
                    className="payment-form-password-icon-2"
                    onClick={() => {
                      changePasswordType();
                    }}
                  >
                    <i className="fa-solid fa-eye"></i>
                  </span>
                </div>
                <div className="text-center mt-3">
                  <button type="submit" className="btn-vision">
                    Log In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )} */}
      <section className="contact_form" id="contact_form_wrapper">
        <div className="container px-lg-5">
          <div className="row justify-content-center">
            <div className="col-lg-10 pt-5 col-11 px-lg-5">
              {PaymentPlans.map((plan) => (
                <div className="mb-1">
                  <div
                    onClick={() => handleClickPlan(plan)}
                    className={
                      plan.plan_slug === paymentPlan.plan_slug
                        ? "art-banner-form d-flex justify-content-between"
                        : "art-banner-form d-flex justify-content-between"
                    }
                  >
                    <div className="d-flex align-items-center">
                      <input
                        type="radio"
                        id={`path-label-${plan.plan_slug}`}
                        name="fav_language"
                        value="HTML"
                        checked={plan.plan_slug === paymentPlan.plan_slug}
                        className="path-label"
                      />
                      <label
                        htmlFor={`path-label-${plan.plan_slug}`}
                        className="path-page-new-label ps-2"
                      >
                        {plan.plan_title}
                        <span style={{ fontSize: "9px" }}>
                          {" "}
                          ({plan.plan_type})
                        </span>
                      </label>
                    </div>
                    <div>
                      <h5>
                        {plan.is_plan_free
                          ? "Free"
                          : plan.payment_access === "recursion"
                          ? convertCurrencyToSign(plan.plan_currency) +
                            plan.initial_amount
                          : plan.payment_access === "onetime" &&
                            plan.is_dont_show_full_amount == true
                          ? convertCurrencyToSign(plan.plan_currency) +
                            plan.initial_amount
                          : convertCurrencyToSign(plan.plan_currency) +
                            plan.plan_price}
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="row justify-content-center align-items-center mx-3 mt-4 contact-card-2">
            <div className="col-lg-10 mt-4 mt-md-0">
              <form
                onSubmit={
                  paymentPlan.is_plan_free === false
                    ? handleSubmit
                    : handleSubmitFree
                }
              >
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h3>{paymentPage?.your_details_text}</h3>
                  </div>
                  {/* <div className="col-md-6 ps-lg-4">
                    <div className="d-flex align-items-center justify-content-between">
                      <p className=" ">
                        {paymentPage.have_already_account_text}
                      </p>
                      {paymentPage.login_button_text && (
                        <span
                          className="btn-vision ms-2 mt-0"
                          onClick={showPopUp}
                        >
                          {paymentPage.login_button_text}
                        </span>
                      )}
                    </div>
                  </div> */}
                </div>
                <div className="row pt-3">
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
                      type="email"
                      className="form-control"
                      placeholder="Email *"
                      required
                      name="email"
                      value={inputState.email}
                      onChange={handleChangeInputsState}
                    />
                  </div>
                  <div className="col-lg-6 mt-4">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Phone Number"
                      // required
                      name="phone"
                      value={inputState.phone}
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
                        <h3>{paymentPage.complete_and_register_text}</h3>
                      </div>
                      <div className="col-12 mt-2">
                        <CardElement
                          options={{
                            hidePostalCode: true,
                            style: {
                              base: {
                                iconColor: "#000",
                                color: "#000",
                                borderColor: "#000",
                                "::placeholder": {
                                  color: "#7e8080",
                                  textTransform: "capitalize",
                                },
                              },
                            },
                          }}
                          className="form-control form-data"
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
                              paymentPlan.payment_access ===
                                "recurring_fixed" ||
                              paymentPlan.payment_access === "recurring_basic"
                            ? convertCurrencyToSign(paymentPlan.plan_currency) +
                              paymentPlan.plan_price
                            : ""}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className=" mt-4 text-center">
                    {isLoadingCard ? (
                      <button
                        type="button"
                        disabled={true}
                        className="btn-vision mt-0 border-0"
                      >
                        {"Processing..."}
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="btn-vision mt-0 border-0"
                      >
                        {paymentPage.your_purchases_text}
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
