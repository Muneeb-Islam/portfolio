import { s3baseUrl } from "@/config/config";

const Footer = ({ page_data }) => {
  const salePage = page_data.page_detail;
  const footer_menu = page_data?.footer_menu?.menu_items;
  const { footer_logo } = page_data;
  return (
    <section
      className="footer_wrapper"
      style={{
        background: `url(${
          s3baseUrl + salePage.footer_background_image
        }) no-repeat center`,
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center px-lg-4">
          <div className="col-lg-3  text-center text-lg-start">
            <a href={salePage.brand_logo_link}>
              <img src={s3baseUrl + footer_logo} alt="" className="img-fluid" />
            </a>
            {/* <div
              dangerouslySetInnerHTML={{
                __html: salePage.footer_text,
              }}
            ></div> */}
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 links-list text-center text-lg-start">
            <ul className="list-unstyled mb-0 footer-links ">
              {footer_menu?.map((items, index) => {
                return (
                  <>
                    <li>
                      <a href={items.item_url}>{items.title}</a>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
          <div className="col-10 col-lg-3 pt-4 pt-lg-0 news-letter text-center text-lg-start">
            <ul className="mb-0 list-unstyled d-flex justify-content-center justify-content-lg-end social-list">
              <li>
              {salePage.facebook_link ? 
                <a href={salePage.facebook_link} className="me-4">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>: ""}            
              </li>
              <li>
              {salePage.twitter_link ? <a href={salePage.twitter_link} className="me-4">
                  <i className="fa-brands fa-twitter"></i>
                </a>: ""}
                
              </li>
              <li>
              {salePage.gmail_link ?  <a href={salePage.gmail_link} className="me-4">
                  <i className="fa-brands fa-google-plus-g"></i>
                </a>: ""}
               
              </li>
              <li>
              {salePage.instagram_link ?  <a href={salePage.instagram_link}>
                  <i className="fa-brands fa-instagram"></i>
                </a>: ""}
               
              </li>
            </ul>
          </div>
        </div>

        <div className="row justify-content-center align-items-center bottom-footer px-lg-4">
          <div
            className="col-12 text-center"
            dangerouslySetInnerHTML={{
              __html: salePage.copyright_text,
            }}
          ></div>
          {/* <div className="col-lg-4 pt-4 pt-lg-0">
            <ul className="list-unstyled d-flex justify-content-center justify-content-lg-end">
              <li>
                <a href={salePage.about_us_link}>{salePage.about_us_heading}</a>
              </li>
              <li className="ms-4">
                <a href={salePage.contact_us_link}>
                  {salePage.contact_us_nav_heading}
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Footer;
