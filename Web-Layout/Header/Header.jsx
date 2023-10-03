import React from "react";
const Header = () => {

  return (  
    <section className="navbar_wrapper">
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg px-lg-2">
                <a className="navbar-brand" href="#home"><img src="/assets/vission.png" alt="" className="img-fluid" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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
                    </ul>
                </div>
            </nav>
        </div>
    </section>

  );
}
 
export default Header;