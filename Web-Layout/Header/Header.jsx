import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const sectionIds = ["xnvvxpvlbu", "services", "xlymldmuep"]; // IDs of sections like Why Us, Services, Testimonial

const Header = () => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);


useEffect(() => {
  const handleScroll = () => {
    let found = "";

    // Scroll background change logic
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Active section logic
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


    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
  

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
   className={`header_wrapper sticky-navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
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
                    <ul className="navbar-nav align-items-lg-center mx-auto ps-3 ps-lg-0">
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
                       <li><a href="/contact" className="mt-3 mt-lg-0 ms-0 ms-lg-3 contained-button">
                        <span>Request A Quote</span>
                      </a></li>
                    </ul>
         
                  </div>
                </nav>
        </div>
      </section>
    </header>
  );
};

export default Header;
