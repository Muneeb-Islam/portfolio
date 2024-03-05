import { s3baseUrl } from "@/config/config";

const BannerSection = ({ page_data }) => {
  const sale_page_detail = page_data;

  return (
    <section className="thanks_wrapper main_section">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-11 card-outer-area">
            <div className="lawyer-thankyou position-relative">
              <div className="card-inner">
                <h2>{sale_page_detail.thankyou_page_contact_us_content}</h2>
                <div className="lawyer-home-btn mt-4">
                  <a href={page_data.thankyou_page_button_link}>
                    {page_data.thankyou_page_button_text}
                  </a>
                </div>
              </div>
              <div className="position-div mt-5">
                <ul className="d-flex justify-content-center list-unstyled lawyer-socials">
                  <li>
                    <a href={sale_page_detail.twitter_link}>
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={sale_page_detail.facebook_link}>
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={sale_page_detail.instagram_link}>
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href={sale_page_detail.gmail_link}>
                      <i className="fa-brands fa-google-plus-g"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="d-flex justify-content-center align-items-baseline copyright-icon mt-5 pb-5 mb-5">
                <div className="lawyer-thankyou-copyright ps-1">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: sale_page_detail.thankyou_page_bottom_content,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
