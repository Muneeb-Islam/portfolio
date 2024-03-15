import Link from "next/link";
import convertCurrencyToSign from "../../../utils/constants";
import { useRouter } from "next/router";
import { useState } from "react";
import ImageLoader from "@/Components/ImageLoader";

const PricingSection = ({ page_data, payment_plan }) => {
  const [isLoadingPlan, setIsLoadingPlan] = useState(false);
  console.log(isLoadingPlan, "=====isLoadingPlan");

  const salePage = page_data.page_detail;
  const page_slug = page_data.page_title_slug;
  const router = useRouter();

  const handleclick = (plan_slug) => {
    setIsLoadingPlan(true);
    router.push(`/${page_slug}/payment-page/${plan_slug}`);
  };

  return (
    <>
      {isLoadingPlan && <ImageLoader />}
      {payment_plan && payment_plan.length > 0 && (
        <section className="pricing pt-90" id="pricing-plan">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <h2>{salePage.plan_heading}</h2>
                {/* <div className=" toggle-btn">
                  <button href="" className="annual">
                    Monthly
                  </button>
                  <button href="" className="monthly">
                    Annual
                  </button>
                </div> */}
              </div>
            </div>
            <div className="row justify-content-center wb-payment-plans">
              {payment_plan?.map((items, index) => {
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
                            : items?.is_dont_show_full_amount == true
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
                      {items.plan_button_text ? (
                        <div className="btn-position">
                          <button
                            onClick={() => handleclick(items.plan_slug)}
                            className="btn-vision"
                            name="wb-payment-plan-button"
                          >
                            {items.plan_button_text}
                          </button>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                );
              })}

              {/* <div className="mt-4 text-center">
                <p>More details and all features</p>
                <Link href="#" className="pricing-btn">
                  View Pricing Page
                </Link>
              </div> */}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default PricingSection;
