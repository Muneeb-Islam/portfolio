import React from "react";
const Header = () => {

  return ( 
   <header>
     <div className="top_navbar d-none d-lg-flex">
    <div className="container-fluid">
        <div className="row justify-content-between">
            <div className="col-lg-5">
                <ul
                    className="mb-0 list-unstyled d-lg-flex justify-content-center justify-content-lg-start align-items-center">
                    <li className="border-line me-4"><a href="#"
                            className="me-lg-4 d-flex justify-content-center  align-items-baseline"><i
                                className="fa-solid fa-location-dot me-2"></i> Saeed center, office # 1, Meta logix</a></li>
                    <li><a href="mailto:vissioon@support.com"
                            className="d-flex justify-content-center align-items-baseline"><i
                                className="fa-regular fa-envelope me-2"></i>vissioon@support.com</a></li>
                </ul>
            </div>

            <div
                className="col-lg-5 pt-2 pt-lg-0 d-lg-flex justify-content-center justify-content-lg-end align-items-center">
                <ul className="mb-0 list-unstyled">
                    <li className="border-line me-4"><a href="#"
                            className="me-lg-4 d-flex justify-content-center align-items-baseline"><i
                                className="fa-regular fa-clock me-2"></i> Office Hour : 09:00am - 6:00pm</a></li>

                </ul>
                <ul
                    className="mb-0 list-unstyled d-flex justify-content-center justify-content-lg-end align-items-center">
                    <li><a href="https://www.facebook.com/" className="me-4"><i className="fa-brands fa-facebook-f"></i></a>
                    </li>
                    <li><a href="https://twitter.com/" className="me-4"><i className="fa-brands fa-twitter"></i></a></li>
                    <li><a href="https://support.google.com/answer/2451065?hl=en" className="me-4"><i
                                className="fa-brands fa-google-plus-g"></i></a></li>
                    <li><a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</div> 
    <div className="navbar_wrapper">
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg px-lg-2">
                <a className="navbar-brand" href="#home"><img src="/assets/vission.png" alt="" className="img-fluid" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-lg-center">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#home">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about_wrapper">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">SERVICES</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#why_us">WHY US</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#price">PLANS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact_form_wrapper">CONTACT</a>
                        </li>
                        <div className="now-order-btn mt-2 mt-lg-0"><a href="#">GET A QUOTE <i className="fa-solid fa-arrow-right ms-2"></i></a></div>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
   </header>

  );
}
 
export default Header;