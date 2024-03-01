import { useRouter } from "next/router";
import { useState } from "react";
import PlanFeatures from "./PlanFeatures";

const PlanCompare = ({ page_data, payment_plan, plan_feature }) => {
  const salePage = page_data.page_detail;
  const page_slug = page_data.page_title_slug;
  const router = useRouter();

  const handleclick = (plan_slug) => {
    router.push(`/${page_slug}/payment-page/${plan_slug}`);
  };

  return (
    <>
      {payment_plan && payment_plan.length > 0 && (
        <section className="plan-compare">
          <div className="container">
            <div className="row justify-content-lg-start justify-content-center">
              <div className="col-lg-3 col-xl-2">
                <h2>{salePage.compare_pricing_plans_text}</h2>
              </div>
              {payment_plan?.map((items, index) => {
                return (
                  <>
                    {payment_plan.length > 3 ? (
                      <div className="col-xl-2 col-lg-3 col-md-4 mt-4">
                        <div className="plan-compare-card h-100 text-start">
                          <div className="pb-5">
                            <h2>{items.plan_title}</h2>
                            <p>{items.short_description}</p>
                          </div>

                          {items.plan_button_text && (
                            <div className="plan-btn-div plan-btn-div-2 ">
                              <button
                                className="plan-btn-btn compare-btn-btn"
                                onClick={() => handleclick(items.plan_slug)}
                              >
                                {items.plan_button_text}
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="col-xl-3 col-lg-3 col-md-4 mt-4">
                        <div className="plan-compare-card h-100 text-start">
                          <div className="pb-5">
                            <h2>{items.plan_title}</h2>
                            <p>{items.short_description}</p>
                          </div>

                          {items.plan_button_text && (
                            <div className="plan-btn-div plan-btn-div-2 ">
                              <button
                                className="plan-btn-btn compare-btn-btn"
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

            <div className="d-none d-lg-block" id="features">
              <div className="row mt-5">
                <PlanFeatures
                  plan_feature={plan_feature}
                  // title="Project Management"
                />
              </div>
              {/* <div className="row mt-5">
                <PlanFeatures
                  plan_feature={plan_feature}
                  title="Issue Management"
                />
              </div>
              <div className="row mt-5">
                <PlanFeatures
                  plan_feature={plan_feature}
                  title="Code Review & Collaboration"
                />
              </div>
              <div className="row mt-5">
                <PlanFeatures plan_feature={plan_feature} title="Security" />
              </div>
              <div className="row mt-5">
                <PlanFeatures plan_feature={plan_feature} title="Support" />
              </div>
              <div className="row mt-5">
                <PlanFeatures
                  plan_feature={plan_feature}
                  title="Storage & Attachments"
                />
              </div>
              <div className="row mt-5">
                <PlanFeatures plan_feature={plan_feature} title="Mobile" />
              </div> */}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default PlanCompare;
