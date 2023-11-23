import convertCurrencyToSign from "../../../utils/constants"
const PricingSection = ({page_data, payment_plan}) => {
const salePage = page_data.sale_page_detail;

return (
<section className="pricing pt-90" id="price">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-7">
                <h2>Flexible Pricing Plan</h2>
            </div>
        </div>
        <div class="row justify-content-center wb-payment-plans">
            {payment_plan.map((items, index) => {
            return(
            <div class="col-md-6 col-lg-4 pt-5 wow slideInLeft">
                <div class=" nexora-price-card wb-plan-card h-100">
                    <div class="outer-card-div">
                        <div class="box-div">{items.plan_title}</div>
                    </div>
                    <div class="d-flex justify-content-center align-items-baseline ">
                        <h2 class="ms-3">
                            {convertCurrencyToSign (
                            items.plan_currency
                            ) + items.plan_price}
                        </h2>
                        {items.plan_type && <span>/{items.plan_type}</span>}
                    </div>
                    <p>{items.short_description}</p>
                    <div class="top-border mt-4"></div>
                    <div dangerouslySetInnerHTML={{
                        __html:items.detailed_description,
                       }}></div>
                    <div class="btn-position">
                        <a href="#contact_form_wrapper" class="btn-vision" name="wb-payment-plan-button">CHOOSE PLAN</a>
                    </div>

                </div>
            </div>
            )
            })}

        </div>
    </div>
</section>
);
}

export default PricingSection;