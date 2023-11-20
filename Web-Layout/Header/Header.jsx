import { s3baseUrl } from "@/config/config";
import React, { useEffect } from "react";
const Header = ({ page_data }) => {
    const salePage = page_data.sale_page_detail;
  const menu_items = page_data.header_menu.menu_items;
  const { brand_logo } = page_data;

  useEffect(() => {
    document.getElementsByClassName("nav-link")[0].classList.add("active");
  }, [])
  
  return (
    <header>
      {/* <div className="top_navbar d-none d-lg-flex">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <ul className="mb-0 list-unstyled d-lg-flex justify-content-center justify-content-lg-start align-items-center">
                <li className="border-line me-4">
                  <a className="me-lg-4 d-flex justify-content-center  align-items-baseline">
                    <i className="fa-solid fa-location-dot me-2"></i>{salePage.brand_address}
                  </a>
                </li>
                <li>
                  <a
                    href="mailto: salepage.vissioon@support.com"
                    className="d-flex justify-content-center align-items-baseline">
                    <i className="fa-regular fa-envelope me-2"></i>
                   {salePage.brand_support}
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-5 pt-2 pt-lg-0 d-lg-flex justify-content-center justify-content-lg-end align-items-center">
              <ul className="mb-0 list-unstyled d-flex justify-content-center justify-content-lg-end align-items-center">
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
                  <a
                    href={salePage.mail_link}
                    className="me-4"
                  >
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
        </div>
      </div> */}
      <div className="navbar_wrapper">
        <div className="container ">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="#home">
              <img src={s3baseUrl + brand_logo} alt="" className="img-fluid" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex align-items-lg-center">
                {menu_items.map((items, index) => {
                  return (
                    
                      <li className="nav-item" key={index}>
                        <a
                        data-index={index}
                          className={"nav-link"}
                          aria-current="page"
                          href={items.item_url}
                        >
                          {items.title}
                        </a>
                      </li>
                  
                  );
                })}

                {/* <div className="now-order-btn mt-2 mt-lg-0"><a href="#">GET A QUOTE <i
                                    className="fa-solid fa-arrow-right ms-2"></i></a></div> */}
              </ul>
              {/* <div className="contact d-xl-flex d-none align-items-center me-5">
                <i className="fa-solid fa-headset"></i>
                <div className="contact-info">
                  <span>{salePage.have_any_question_text}</span>
                  <div   dangerouslySetInnerHTML={{
                    __html:salePage.contact_info,
                }}></div>
                 
                </div>
              </div> */}
              {/* <div className="border-line"></div>

                    <a><i className="fa-solid fa-magnifying-glass mx-5 d-none d-lg-flex"></i></a> */}

              {/* <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form> <input className="form-control me-2" type="search" placeholder="Search..."
                                            aria-label="Search" /></form>
                                </div>
                            </div>
                        </div>
                    </div> */}

              <a href={salePage.get_a_quote_link} className="btn-vision mt-3 mt-lg-0">
                {salePage.get_a_quote_text} 
                {/* <i className="fa-solid fa-arrow-right ms-2"></i> */}
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
