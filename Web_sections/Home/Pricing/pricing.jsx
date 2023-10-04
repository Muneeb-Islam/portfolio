const PricingSection = () => {

return (
<section className="pricing main_section" id="price">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-5 text-center">
                <h2>Your Pricing Plan</h2>
                <p>We give you three pricing plans so you do not have to pay for something you do not want.
                </p>
            </div>
        </div>
        <div className="row justify-content-center pt-4">
            <div className="col-md-6 col-lg-4 pt-4">
                <div className=" redlight-pricing-card h-100">
                    <span className="elementor-icon"> <img src="/assets/pricing-plan-icon1.png" alt=""
                            className="img-fluid" /></span>

                    <h3>Beginner</h3>
                    <div
                        className="d-flex align-items-baseline plan-per-text mt-3">
                        <h2>$5000</h2>
                        <h4>/Month</h4>
                    </div>
                    <ul className="p-0 mt-3 mb-5">
                        <li>Built-in Web Pages </li>
                        <li> Community Building</li>
                        <li>Content Management System (CMS)</li>
                        <li> Program Drip system</li>
                        <li><del>Business Growth</del></li>
                        <li><del>Business Consulting</del></li>
                        <li><del>Email Campaigns</del></li>
                        <li><del>Built-in Web Pages</del></li>
                    </ul>

                    <div className="now-order-btn">
                        <a href="#">Register Now</a>
                    </div>
                </div>
            </div>

            <div className="col-md-6 col-lg-4 pt-4">
                <div className=" redlight-pricing-card h-100">
                    <span className="elementor-icon"> <img src="/assets/price-2.png" alt=""
                            className="img-fluid" /></span>

                    <h3>Business</h3>
                    <div
                        className="d-flex align-items-baseline plan-per-text mt-3">
                        <h2>$7000</h2>
                        <h4>/Month</h4>
                    </div>
                    <ul className="p-0 mt-3 mb-5">
                        <li>Built-in Web Pages </li>
                        <li> Community Building</li>
                        <li>Content Management System (CMS)</li>
                        <li> Program Drip system</li>
                        <li>Business Growth</li>
                        <li>Business Consulting</li>
                        <li><del>Email Campaigns</del></li>
                        <li><del>Built-in Web Pages</del></li>
                    </ul>
                    <div className="now-order-btn">
                        <a href="#">Register Now</a>
                    </div>
                </div>
            </div>

            <div className="col-md-6 col-lg-4 pt-4">
                <div className=" redlight-pricing-card h-100">
                    <span className="elementor-icon"> <img src="/assets/price-3.png" alt=""
                            className="img-fluid" /></span>

                    <h3>Exclusive</h3>
                    <div
                        className="d-flex  align-items-baseline plan-per-text mt-3">
                        <h2>$10000</h2>
                        <h4>/Month</h4>
                    </div>
                    <ul className="p-0 mt-3 mb-5">
                        <li>Built-in Web Pages </li>
                        <li> Community Building</li>
                        <li>Content Management System (CMS)</li>
                        <li> Program Drip system</li>
                        <li>Business Growth</li>
                        <li>Business Consulting</li>
                        <li>Email Campaigns</li>
                        <li>Built-in Web Pages</li>
                    </ul>
                    <div className="now-order-btn">
                        <a href="#">Register Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
);
}

export default PricingSection;