import { s3baseUrl } from "@/config/config";
import { useEffect, useState } from "react";

const Footer = ({ page_data}) => {
  const salePage = page_data.sale_page_detail;
  const footer_menu = page_data.footer_menu.menu_items;
  const { footer_logo } = page_data;
 
  return (
    <section className="footer_wrapper" style={{
      background: `url(${
        s3baseUrl + salePage.footer_background_image
      }) no-repeat center`,
      backgroundSize:"cover",
     
    }}>
      <div className="container">
        <div className="row justify-content-center px-lg-4">
          <div className="col-lg-3  main-para text-center text-lg-start">
            <a href="#home">
              <img src={s3baseUrl+footer_logo} alt="" className="img-fluid" />
            </a>
            <div
              dangerouslySetInnerHTML={{
                __html: salePage.footer_text,
              }}
            ></div>
          </div>
          <div className="col-lg-5 pt-4 pt-lg-0 links-list text-center text-lg-start">
            <h3>{salePage.quick_link_heading}</h3>
            <div className="d-flex justify-content-center justify-content-lg-start pt-3">
              <ul className="list-unstyled mb-0 footer-links">
                {footer_menu.map ((items, index) =>{
                    return(
                        <>
                         <li>
                  <a href={items.item_url_for}>{items.title}</a>
                </li>
                        </>
                    )
                })}
               
              </ul>
              {/* <ul className="list-unstyled justify-content-center justify-content-lg-start mb-0 footer-links">
                <li>
                  <a href="#why_us">Why Choose Us</a>
                </li>
                <li>
                  <a href="#contact_form_wrapper">Contact</a>
                </li>
              </ul> */}
            </div>
          </div>
          <div className="col-10 col-lg-4 pt-4 pt-lg-0 news-letter text-center text-lg-start">
            <div
              dangerouslySetInnerHTML={{
                __html: salePage.newsletter_text,
              }}
            ></div>
            <div className="d-flex position-relative mt-4">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Your Email*"
                required=""
              />
              <button type="submit" className="btn_subscribe">
                <i className="fa-regular fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="row justify-content-between align-items-center bottom-footer px-lg-4">
          <div className="col-lg-5 text-center text-lg-start"
          dangerouslySetInnerHTML={{
            __html:salePage.copyright_text,
          }}>
            
          </div>
          <div className="col-lg-4 pt-4 pt-lg-0">
            <ul className="list-unstyled d-flex justify-content-center justify-content-lg-end">
              <li>
                <a href={salePage.about_us_link}>{salePage.about_us_heading}</a>
              </li>
              <li className="ms-4">
                <a href={salePage.contact_us_link}>{salePage.contact_us_nav_heading}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
