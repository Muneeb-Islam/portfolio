import ImageLoader from "@/Components/ImageLoader";
import { useRouter } from "next/router";
import { useState } from "react";
import convertCurrencyToSign from "../../../utils/constants";

const PricingSection = ({ page_data, payment_plan }) => {
  const [isLoadingPlan, setIsLoadingPlan] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const router = useRouter();

  const handleclick = (plan_slug) => {
    setIsLoadingPlan(true);
    router.push(`/${page_data.page_title_slug}/payment-page/${plan_slug}`);
  };

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      {isLoadingPlan && <ImageLoader />}
      {payment_plan && payment_plan.length > 0 && (
        <section className="pricing pt-90" id="pricing-plan">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <h2>{page_data.page_detail.plan_heading}</h2>
                <div className="justify-content-center d-flex align-items-center mt-3">
                  <h6 className="pe-md-4 pe-3">Monthly</h6>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={isDarkMode}
                      onChange={toggleMode}
                    />
                    <span className="slider round"></span>
                  </label>
                  <h6 className="ps-md-4 ps-3">Yearly</h6>
                </div>
              </div>
            </div>
            <div className="row justify-content-center wb-payment-plans">
              {payment_plan.map((items, index) => {
                // Determine whether to show monthly or yearly plan based on plan_type
                const isMonthlyPlan = items.plan_type === "month";
                const isYearlyPlan = items.plan_type === "year";

                // Render plan only if it matches the selected mode
                if (
                  (isMonthlyPlan && !isDarkMode) ||
                  (isYearlyPlan && isDarkMode)
                ) {
                  return (
                    <div
                      key={index}
                      className="col-12 col-md-4 pt-5 wow slideInLeft"
                    >
                      <div className="nexora-price-card wb-plan-card h-100">
                        <div className="outer-card-div">
                          <div className="box-div">{items.plan_title}</div>
                        </div>
                        <div className="d-flex justify-content-center align-items-baseline">
                          <h2 className="ms-3">
                            {items.is_plan_free
                              ? "Free"
                              : items.is_dont_show_full_amount
                              ? convertCurrencyToSign(items.plan_currency) +
                                items.initial_amount
                              : convertCurrencyToSign(items.plan_currency) +
                                items.plan_price}
                          </h2>
                        </div>
                        <p>{items.short_description}</p>
                        <div className="top-border mt-4"></div>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: items.detailed_description,
                          }}
                        ></div>
                        {items.plan_button_text && (
                          <div className="btn-position">
                            <button
                              onClick={() => handleclick(items.plan_slug)}
                              className="btn-vision"
                              name="wb-payment-plan-button"
                            >
                              {items.plan_button_text}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default PricingSection;
