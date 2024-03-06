import { s3baseUrl } from "@/config/config";
import { useRouter } from "next/router";
import { useState } from "react";
import convertCurrencyToSign from "../../../utils/constants";
import PaymentLoader from "@/Components/Loader/PaymentLoader";
import ImageLoader from "@/Components/ImageLoader";

const PlanPagePricing = ({ page_data, payment_plan }) => {
  const [isLoadingPlan, setIsLoadingPlan] = useState(false);

  const salePage = page_data.page_detail;
  const [paymentAccess, setPaymentAccess] = useState("onetime");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    setPaymentAccess((prevPaymentAccess) =>
      prevPaymentAccess === "onetime" ? "recursion" : "onetime"
    );
  };

  const page_slug = page_data.page_title_slug;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleclick = (plan_slug) => {
    setIsLoadingPlan(true);

    router.push(`/${page_slug}/payment-page/${plan_slug}`);
  };

  return (
    <>
      {isLoadingPlan && <ImageLoader />}
      {payment_plan && payment_plan.length > 0 && (
        <section className="plan-pricing" id="subscribe">
          <div className="container pt-5">
            <div className="row justify-content-center">
              <div className="col-lg-10 ">
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    src={s3baseUrl + salePage.integrated_project_backlog_image}
                    className="img-fluid pe-4"
                    alt=""
                  />
                  <h2>{salePage.integrated_project_backlog_text}</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-4">
              {/* <div className="justify-content-center d-flex toggle-btn">
              <h6 className="pe-md-4 pe-3">Monthly</h6>
              <label className="switch ">
                <input
                  type="checkbox"
                  checked={isDarkMode}
                  onChange={toggleMode}
                />
                <span class="slider round"></span>
              </label>
              <h6 className="ps-md-4 ps-3">Annually</h6>
            </div> */}
              {payment_plan?.map((items, index) => {
                return (
                  <>
                    {payment_plan.length > 3 ? (
                      <div className="col-xl-3 col-lg-5 col-md-6 mt-5">
                        <div className="payment-plan-card h-100 text-start">
                          <h2>{items.plan_title}</h2>
                          <p>{items.short_description}</p>
                          <div className="pt-3 text-center mb-5 plan-page-price">
                            <h2>
                              {items.is_plan_free
                                ? "Free"
                                : items?.is_dont_show_full_amount == true
                                ? convertCurrencyToSign(items.plan_currency) +
                                  items.initial_amount
                                : convertCurrencyToSign(items.plan_currency) +
                                  items.plan_price}
                              <span> / {items.plan_type}</span>
                            </h2>
                            <hr />
                            <div
                              dangerouslySetInnerHTML={{
                                __html: items.detailed_description,
                              }}
                            ></div>
                          </div>
                          {items.plan_button_text && (
                            <div className="plan-btn-div ">
                              <button
                                className="plan-btn-btn"
                                onClick={() => handleclick(items.plan_slug)}
                              >
                                {items.plan_button_text}
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="col-xl-4 col-lg-4 col-md-6 mt-5">
                        <div className="payment-plan-card h-100 text-start">
                          <h2>{items.plan_title}</h2>
                          <p>{items.short_description}</p>
                          <div className="pt-3 text-center mb-5 plan-page-price">
                            <h2>
                              {items.is_plan_free
                                ? "Free"
                                : items?.is_dont_show_full_amount == true
                                ? convertCurrencyToSign(items.plan_currency) +
                                  items.initial_amount
                                : convertCurrencyToSign(items.plan_currency) +
                                  items.plan_price}
                              <span> / {items.plan_type}</span>
                            </h2>
                            <hr />
                            <div
                              dangerouslySetInnerHTML={{
                                __html: items.detailed_description,
                              }}
                            ></div>
                          </div>
                          {items.plan_button_text && (
                            <div className="plan-btn-div ">
                              <button
                                className="plan-btn-btn"
                                onClick={() => handleclick(items.plan_slug)}
                              >
                                {items.plan_button_text}
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </section>
      )}
      {salePage.private_server_host_backlog && (
        <section className="bg-plan-color">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center">
                <div
                  dangerouslySetInnerHTML={{
                    __html: salePage.private_server_host_backlog,
                  }}
                ></div>

                {salePage.learn_about_plan_button_text && (
                  <div className="mt-5">
                    <a
                      href={salePage.learn_about_plan_button_link}
                      className="btn-color-link"
                    >
                      {salePage.learn_about_plan_button_text}
                      <i className="fa-solid fa-angle-right ps-2"></i>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default PlanPagePricing;
