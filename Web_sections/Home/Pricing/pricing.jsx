import convertCurrencyToSign from "../../../utils/constants";
import { useRouter } from "next/router";
const PricingSection = ({ page_data, payment_plan }) => {
  const salePage = page_data.sale_page_detail;
  const page_slug = page_data.sale_page_title_slug;
  const router = useRouter();

  const handleclick = (plan_slug) => {
    router.push(`/${page_slug}/payment-page/${plan_slug}`);
  };

  return (
    <section className="pricing pt-90" id="pricing">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7">
            <h2>{salePage.plan_heading}</h2>
          </div>
        </div>
        <div class="row justify-content-center wb-payment-plans">
          {payment_plan.map((items, index) => {
            return (
              <div class="col-md-6 col-lg-4 pt-5 wow slideInLeft">
                <div class=" nexora-price-card wb-plan-card h-100">
                  <div class="outer-card-div">
                    <div class="box-div">{items.plan_title}</div>
                  </div>
                  <div class="d-flex justify-content-center align-items-baseline">
                    <h2 class="ms-3">
                      {items.is_plan_free
                        ? "Free"
                        : items?.is_dont_show_full_amount == true
                        ? convertCurrencyToSign(items.plan_currency) +
                          items.initial_amount
                        : convertCurrencyToSign(items.plan_currency) +
                          items.plan_price}
                    </h2>
                    {/* {items.plan_type && <span>/{items.plan_type}</span>} */}
                  </div>
                  <p>{items.short_description}</p>
                  <div class="top-border mt-4"></div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: items.detailed_description,
                    }}
                  ></div>
                  {items.plan_button_text ? (
                    <div class="btn-position">
                      <button
                        onClick={() => handleclick(items.plan_slug)}
                        class="btn-vision"
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
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
