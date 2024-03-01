import { s3baseUrl } from "@/config/config";
import { useRouter } from "next/router";
import { useState } from "react";
import convertCurrencyToSign from "../../../utils/constants";
import PaymentLoader from "@/Components/Loader/PaymentLoader";

const PlanPagePricing = ({ page_data, payment_plan }) => {
  console.log(payment_plan, "----payment_plan");
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
    setIsLoading(true);
    router.push(`/${page_slug}/payment-page/${plan_slug}`);
  };

  if (isLoading) {
    return <PaymentLoader />;
  }

  return (
    <>
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
              {/* <div className="col-xl-3 col-lg-4 col-md-6 mt-5">
                <div className="payment-plan-card h-100 text-start">
                  <h2>Starter</h2>
                  <p>For small projects</p>
                  <h6>Up to 10 users</h6>

                  <div className="pt-3 text-center mb-5 plan-page-price">
                    <h2>
                      $35
                      <span> / Month</span>
                    </h2>
                    <hr />
                    <ul>
                      <li>30 users</li>
                      <li>5 project</li>
                      <li>1 GB storage</li>
                      <li>Git & Subversion</li>
                      <li>Board</li>
                      <li>Issue Summaries</li>
                      <li>Subtasking</li>
                    </ul>
                  </div>
                  <div className="plan-btn-div ">
                    <a className="plan-btn-btn">Start Free Trail</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 mt-5">
                <div className="payment-plan-card active-card h-100 text-start">
                  <h2>Standard</h2>
                  <p>For mid-sized companies</p>
                  <h6>Unlimited users</h6>
                  <div className="pt-3 text-center mb-5 plan-page-price">
                    <h2>
                      $100
                      <span> / Month</span>
                    </h2>
                    <hr />
                    <ul>
                      <li>Unlimited users</li>
                      <li>100 project</li>
                      <li>30 GB storage</li>
                      <li>Git & Subversion</li>
                      <li>Board</li>
                      <li>Issue Summaries</li>
                      <li>Subtasking</li>
                      <li>Gantt charts</li>
                      <li>Burndown chart</li>
                      <li>Issue templates</li>
                    </ul>
                  </div>
                  <div className="plan-btn-div ">
                    <a className="plan-btn-btn plan-btn-fill">
                      Start Free Trail
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 mt-5">
                <div className="payment-plan-card h-100 text-start">
                  <h2>Premium</h2>
                  <p>For larger companies</p>
                  <h6>Unlimited users and projects</h6>

                  <div className="pt-3 text-center mb-5 plan-page-price">
                    <h2>
                      $175
                      <span> / Month</span>
                    </h2>
                    <hr />
                    <ul>
                      <li>Unlimited users</li>
                      <li>Unlimited project</li>
                      <li>100 GB storage</li>
                      <li>Git & Subversion</li>
                      <li>Board</li>
                      <li>Issue Summaries</li>
                      <li>Subtasking</li>
                      <li>Gantt charts</li>
                      <li>Burndown chart</li>
                      <li>Issue templates</li>
                      <li>Custom fields</li>
                      <li>Dedicated support</li>
                    </ul>
                  </div>
                  <div className="plan-btn-div ">
                    <a className="plan-btn-btn">Start Free Trail</a>
                  </div>
                </div>
              </div> */}
              {/* {!isDarkMode ? (
              <>
              </>
            ) : (
              <>
                <div className="col-xl-3 col-lg-4 col-md-6 mt-5">
                  <div className="payment-plan-card h-100 text-start">
                    <h2>Free</h2>
                    <p>For small projects</p>
                    <h6>Up to 10 users</h6>

                    <div className="pt-3 text-center mb-5 plan-page-price">
                      <h2>
                        $0
                        <span> / Year</span>
                      </h2>
                      <hr />
                      <ul>
                        <li>10 users</li>
                        <li>1 project</li>
                        <li>100 MB storage</li>
                        <li>Git & Subversion</li>
                        <li>Board</li>
                        <li>Issue Summaries</li>
                      </ul>
                    </div>
                    <div className="plan-btn-div ">
                      <a className="plan-btn-btn">Sign Up</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 mt-5">
                  <div className="payment-plan-card h-100 text-start">
                    <h2>Starter</h2>
                    <p>For small projects</p>
                    <h6>Up to 10 users</h6>

                    <div className="pt-3 text-center mb-5 plan-page-price">
                      <h2>
                        $350
                        <span> / Year</span>
                      </h2>
                      <hr />
                      <ul>
                        <li>30 users</li>
                        <li>5 project</li>
                        <li>1 GB storage</li>
                        <li>Git & Subversion</li>
                        <li>Board</li>
                        <li>Issue Summaries</li>
                        <li>Subtasking</li>
                      </ul>
                    </div>
                    <div className="plan-btn-div ">
                      <a className="plan-btn-btn">Start Free Trail</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 mt-5">
                  <div className="payment-plan-card active-card h-100 text-start">
                    <h2>Standard</h2>
                    <p>For mid-sized companies</p>
                    <h6>Unlimited users</h6>
                    <div className="pt-3 text-center mb-5 plan-page-price">
                      <h2>
                        $1,000
                        <span> / Year</span>
                      </h2>
                      <hr />
                      <ul>
                        <li>10 users</li>
                        <li>1 project</li>
                        <li>100 MB storage</li>
                        <li>Git & Subversion</li>
                        <li>Board</li>
                        <li>Issue Summaries</li>
                      </ul>
                    </div>
                    <div className="plan-btn-div ">
                      <a className="plan-btn-btn plan-btn-fill">
                        Start Free Trail
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 mt-5">
                  <div className="payment-plan-card h-100 text-start">
                    <h2>Premium</h2>
                    <p>For larger companies</p>
                    <h6>Unlimited users and projects</h6>

                    <div className="pt-3 text-center mb-5 plan-page-price">
                      <h2>
                        $1,750
                        <span> / Year</span>
                      </h2>
                      <hr />
                      <ul>
                        <li>Unlimited users</li>
                        <li>Unlimited project</li>
                        <li>100 GB storage</li>
                        <li>Git & Subversion</li>
                        <li>Board</li>
                        <li>Issue Summaries</li>
                        <li>Subtasking</li>
                        <li>Gantt charts</li>
                        <li>Burndown chart</li>
                        <li>Issue templates</li>
                        <li>Custom fields</li>
                        <li>Dedicated support</li>
                      </ul>
                    </div>
                    <div className="plan-btn-div ">
                      <a className="plan-btn-btn">Start Free Trail</a>
                    </div>
                  </div>
                </div>
              </>
            )} */}
            </div>
          </div>
        </section>
      )}
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
    </>
  );
};

export default PlanPagePricing;
