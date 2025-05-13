import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const sectionIds = ["xnvvxpvlbu", "services", "xlymldmuep"]; // IDs of sections like Why Us, Services, Testimonial

const Header = () => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let found = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            found = id;
            break;
          }
        }
      }
      setActiveSection(found);
    };

    if (router.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // initial check
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [router.pathname]);

  const handleNavClick = (hash) => {
    if (router.pathname === "/") {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${hash}`);
    }
  };

  return (
    <header>
      <section
        className="banner_154 pt-4"
        data-_id="67ab1283b9616f8ef8b9e29a"
        data-section_id="qbjenxbtom"
        data-section_title="Banner with menu box, content box with video modal and image"
        data-section_name="67ab1283b9616f8ef8b9e29a"
        id="qbjenxbtom"
        imgheight="1323"
        imgwidth="1828"
        style={{ color: "rgb(20, 30, 39)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="wb-box banner-menu-box"
                imgheight="109"
                imgwidth="1296"
                style={{ boxShadow: "0px 0px 0px 0px", backgroundColor: "rgb(238, 237, 222)" }}
              >
                <nav className="navbar navbar-expand-lg">
                  <a className="navbar-brand" href="/">
                    <img
                      src="/assets/logoo.png"
                      className="img-fluid brand-logo"
                      alt=""
                    />
                  </a>
                  <button
                    className="navbar-toggler"
                    type="submit"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent_id_qbjenxbtom"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon">
                      <i className="fas fa-bars"></i>
                    </span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent_id_qbjenxbtom">
                    <ul className="navbar-nav mx-auto">
                      <li className="nav-item">
                        <a
                          className={`nav-link ${router.pathname === "/" && !activeSection ? "active" : ""
                            }`}
                          aria-current="page"
                          href="/"
                        >
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link ${activeSection === "xnvvxpvlbu" ? "active" : ""}`}
                          onClick={() => handleNavClick("xnvvxpvlbu")}
                          style={{ cursor: "pointer" }}
                        >
                          Why Us
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link ${activeSection === "services" ? "active" : ""}`}
                          onClick={() => handleNavClick("services")}
                          style={{ cursor: "pointer" }}
                        >
                          Services
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className={`nav-link ${router.pathname === "/portfolio" ? "active" : ""}`} href="/portfolio">
                          Portfolio
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className={`nav-link ${router.pathname === "/career" ? "active" : ""}`} href="/career">
                          Careers
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link ${activeSection === "xlymldmuep" ? "active" : ""}`}
                          onClick={() => handleNavClick("xlymldmuep")}
                          style={{ cursor: "pointer" }}
                        >
                          Testimonial
                        </a>
                      </li>
                    </ul>
                    <div className="saasnode-banner-btns">
                      {/* <a href="#" className="mt-3 mt-lg-0 banner-login-btn wp-pb-14 wp-pt-14">
                        <span>Login</span>
                      </a> */}
                      <a href="/contact" className="mt-3 mt-lg-0 ms-0 ms-lg-2 banner-solid-btn wp-pb-14 wp-pt-14 wp-pl-18 wp-pr-18">
                        <span>Request A Quote</span>
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
