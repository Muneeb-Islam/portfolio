import { s3baseUrl } from "@/config/config";

const HowSection = ({ page_data, comprehensive_services }) => {
  const salePage = page_data.sale_page_detail;

  return (
    <section className="how-work pt-90" id="features">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-lg-7 text-center"
            dangerouslySetInnerHTML={{
              __html: salePage.services_text,
            }}
          ></div>
        </div>
        {comprehensive_services.map((items, index) => {
          if (index % 2 === 0) {
            return (
              <div className="row  align-items-center position-relative">
                <div className="col-lg-6 pe-lg-5 pt-80">
                  <img
                    src={s3baseUrl + items.program_images.thumbnail_1}
                    className="img-fluid"
                    alt=""
                  />
                  {/* <img
                    src={s3baseUrl + items.icon_images.thumbnail_1}
                    className="img-fluid position-img"
                    alt=""
                  /> */}
                </div>
                <div className="col-lg-6 hows-text  ps-lg-5 pt-80  wow slideInRight">
                  <h2>{items.title}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: items.short_description,
                    }}
                  ></div>
                </div>
              </div>
            );
          } else {
            return (
              <div className="row  align-items-center  position-relative last-child">
                <div className="col-lg-6 hows-text pe-lg-5 pt-90 order-2 order-lg-1 wow slideInLeft">
                  <h2>{items.title}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: items.short_description,
                    }}
                  ></div>
                </div>
                <div className="col-lg-6 ps-lg-5 ps-lg-5 pt-90  order-1 order-lg-2">
                  <img
                    src={s3baseUrl + items.program_images.thumbnail_1}
                    className="img-fluid"
                    alt=""
                  />
                  {/* <img
                    src="/assets/home-page/line-1.png"
                    className="img-fluid position-img-2"
                    alt=""
                  /> */}
                </div>
              </div>
            );
          }
        })}

        {/* <div className="row  align-items-center  position-relative">
      <div className="col-lg-6 hows-text pe-lg-5 pt-90 order-2 order-lg-1 wow slideInLeft">
        <h2>Select Website Editor</h2>
        <p>Simplify your website with our easy Website Editor. Pick professional themes, customize with content blocks, add your info, and style without any computer skills required. Also, you can access a library of images and graphics easily.</p>
        <h3>Top Feature</h3>
        <ul className="list-unstyled">
          <li>Edit & Customize Everything </li>
          <li>Drag & Drop</li>
          <li>Secure Hosting</li>
          <li>Friendly & Responsive Design</li>
        </ul>
      </div>
      <div className="col-lg-6 ps-lg-5 ps-lg-5 pt-90  order-1 order-lg-2">
        <img src="/assets/home-page/select-website.png" className="img-fluid" alt="" />
        <img src="/assets/home-page/line-1.png" className="img-fluid position-img-2" alt="" />
      </div>
    </div>
    <div className="row  align-items-center position-relative">
      <div className="col-lg-6 pe-lg-5 pt-90">
        <img src="/assets/home-page/Make-Payment-Gateway-Integration.png" className="img-fluid" alt="" />
        <img src="/assets/home-page/line-2.png" className="img-fluid position-img" alt="" />
      </div>
      <div className="col-lg-6 hows-text ps-lg-5 pt-90 wow slideInRight">
        <h2>Make Payment Gateway Integration</h2>
        <p>Set up your payment system with ease. We determine the program's cost, create a subscription for access control, and choose whether it's a one-time, recurring, or trial payment.</p>
        <ul className="list-unstyled">
          <li>Support Multiple Currencies</li>
          <li>Handled various subscriptions</li>
          <li>Automatic Access Control</li>
          <li>Stripe Implementation</li>
        </ul>
      </div>
    </div>
    <div className="row  align-items-center position-relative">
      <div className="col-lg-6 hows-text pe-lg-5 pt-90  order-2 order-lg-1 wow slideInLeft">
        <h2>Choose Domain & Publish</h2>
        <p>Simplify the process of managing domains using Vissioon. Easily connect domains for a smooth experience, allowing you to publish your website anytime, and hassle-free. </p>
        <h3>Top Features</h3>
        <ul className="list-unstyled">
          <li>Secure Hosting</li>
          <li>Custom Domain</li>
          <li>Speedy</li>
          <li>Support 24/7</li>
        </ul>
      </div>
      <div className="col-lg-6  ps-lg-5 ps-lg-5 pt-90  order-1 order-lg-2">
        <img src="/assets/home-page/Choose-Domain-Publish.png" className="img-fluid" alt="" />
        <img src="/assets/home-page/line-1.png" className="img-fluid position-img-2" alt="" />
      </div>
    </div>
    <div className="row align-items-center position-relative">
      <div className="col-lg-6 pe-lg-5 pt-90">
        <img src="/assets/home-page/Get-the-Number-of-Clients-on-the-Page.png" className="img-fluid" alt="" />
        <img src="/assets/home-page/line-2.png" className="img-fluid position-img" alt="" />
      </div>
      <div className="col-lg-6 hows-text ps-lg-5 pt-90 wow slideInRight">
        <h2>Get the Number of Clients on the Page</h2>
        <p>Get permanent clients on your website. By using our user-friendly tools you can engage and increase the
          number of clients of your choice.</p>
        <h3>Top Features</h3>
        <ul className="list-unstyled">
          <li>User-Friendly Tool</li>
          <li>Live Event  Hosting</li>
          <li>Email Automation</li>
          <li>Support Team Management</li>
        </ul>
      </div>
    </div>
    <div className="row  align-items-center ">
      <div className="col-lg-6 hows-text pe-lg-5 pt-90  order-2 order-lg-1 wow slideInLeft">
        <h2>More Revenue & Success</h2>
        <p>Maximize your revenue and secure your financial future with Vissioon's Solutions. This platform is your
          pathway to financial growth and reaching your goals.</p>
        <h3>Top Features</h3>
        <ul className="list-unstyled">
          <li>Financial Growth </li>
          <li>Lead Generation Analytics</li>
          <li>Income Opportunities</li>
          <li>Goal Achievement</li>
        </ul>
      </div>
      <div className="col-lg-6  ps-lg-5 ps-lg-5 pt-90  order-1 order-lg-2">
        <img src="/assets/home-page/more-revenew.png" className="img-fluid" alt="" />
      </div>
    </div> */}
      </div>
    </section>
  );
};

export default HowSection;
