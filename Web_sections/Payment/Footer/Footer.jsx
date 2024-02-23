import { s3baseUrl } from "@/config/config";
import { useEffect, useState } from "react";

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
        <div className="row justify-content-between align-items-center px-lg-4">
          <div className="col-lg-3  text-center text-lg-start">
            <a href={salePage.brand_logo_link}>
              <img src={s3baseUrl + footer_logo} alt="" className="img-fluid" />
            </a>
          </div>

          <div className="col-lg-3 pt-4 pt-lg-0 news-letter text-center text-lg-start">
            <ul className="mb-0 list-unstyled d-flex justify-content-center justify-content-lg-end social-list">
              <li>
                <a href={salePage.facebook_link} className="me-4">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href={salePage.twitter_link} className="me-4">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href={salePage.mail_link} className="me-4">
                  <i className="fa-brands fa-google-plus-g"></i>
                </a>
              </li>
              <li>
                <a href={salePage.instagram_link}>
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row justify-content-center align-items-center bottom-footer px-lg-4">
          <div
            className="col-lg-5 text-center"
            dangerouslySetInnerHTML={{
              __html: salePage.copyright_text,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
