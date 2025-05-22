import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

 
  const handleNavClick = (hash) => {
    if (router.pathname === "/") {
      const el = document.getElementById(hash);
      if (el) {
        const headerOffset = 80; 
        const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      router.push(`/#${hash}`);
    }
  };
  return (
    <section
      className="footer_wrapper bg-light-blue pb-60 pt-60 mt-80"
      id="wfuwaaovth"
    >
      <div className="container">
        <div className="row justify-content-center justify-content-lg-between">
          <div className="col-md-5 col-lg-4 pe-lg-5 text-center text-lg-start">
            <a href="/">
              <img
                src="/assets/logoo.png"
                alt="Brand Logo"
                className="img-fluid brand-logo mb-2"
              />
            </a>

            <ul>
              <li>- UI/UX Design</li>
              <li>- Website Development</li>
              <li>- Mobile Apps Development</li>
              <li>- Custom CMS & CRM</li>
              <li>- Ecommerce Solutions</li>
              <li>- Digital Marketing</li>
              <li>- Technical Consultancy</li>
            </ul>
          </div>

          <div className="col-6 col-md-3 col-lg-3 pt-3 pt-md-0">
            <h3 className="fw-600">Company</h3>
            <ul>
              <li><a href="/" >Home</a></li>
              <li><a onClick={() => handleNavClick("achievement")} style={{ cursor: "pointer" }} >Why Us</a></li>
              <li><a onClick={() => handleNavClick("services")} style={{ cursor: "pointer" }} >Services</a></li>
              <li><a href="/portfolio" >Portfolio</a></li>
              <li><a href="/career" >Career</a></li>
              <li><a onClick={() => handleNavClick("testimonial")} style={{ cursor: "pointer" }}>
                Testimonial
              </a> </li>
            </ul>
          </div>

          <div className="col-6  col-md-4 col-lg-5 footer-contact-list pt-3 pt-md-0">
            <h3 className="fw-600">Contact Us</h3>
            <ul>
              <li>
                <span><i className="fas fa-envelope pe-2"></i></span>
                <div><p>Email</p><a href="mailto:bytepulse@gmail.com">bytepulse@gmail.com</a></div>
              </li>
              <li>
                <span><i className="fas fa-phone-alt pe-2"></i></span>
                <div><p>Phone </p><a href="tel:+1 424-532-3898">+1 424-532-3898</a></div>
              </li>
              <li>
                <span><i className="fas fa-map-marker-alt pe-2"></i></span>
                <div><p>Address </p>14622 Ventura Blvd  Los Angeles CA 91403
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Socials and Copyright */}
        <div className="row justify-content-center align-items-center pt-3 pt-lg-5">

          <div className="col-lg-6 text-center text-lg-end">
            <p style={{ fontSize: "1.125rem", fontWeight: 400 }} className="mb-0">
              Copyright © <span className="wb-copyright-year">2025</span> <span >Byte Pulse</span> - All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
