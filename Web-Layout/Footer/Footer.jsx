const Footer = () => {
  return (
    <section
      className="footer_147 main_section wp-pt-40 m-40"
      data-_id="67879e70b9616f8ef8b7e504"
      data-section_id="wfuwaaovth"
      data-section_title="Footer with newsletter, navigation, socials move up on hover"
      data-section_name="67879e70b9616f8ef8b7e504"
      id="wfuwaaovth"
      style={{ paddingTop: "0rem" }}
    >
      <div className="container">
        <div className="row justify-content-center justify-content-lg-between">
          <div className="col-md-5 col-lg-4 pe-lg-5 text-center text-lg-start pt-3">
            <a href="/">
              <img
                src="/assets/logoo.png"
                alt="Saasify Footer Logo"
                className="img-fluid brand-logo mb-3"
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

          <div className="col-6 col-md-3 col-lg-3 pt-3">
            <h3 className="profitpod-links-heading font-size-xlg mb-4">Company</h3>
            <ul>
              <li><a href="#qbjenxbtom" >Home</a></li>
              <li><a href="#xnvvxpvlbu" >Why Us</a></li>
              <li><a href="#iqqtzvazmn" >Workflow</a></li>
              <li><a href="#services" >Services</a></li>
              <li><a href="/portfolio" >Portfolio</a></li>
              <li><a href="/career" >Career</a></li>
            </ul>
          </div>

          <div className="col-6  col-md-4 col-lg-5 pt-3 footer-contact-list">
            <h3 className="profitpod-links-heading font-size-xlg mb-4">Contact Us</h3>
            <ul>
              <li>
                <span><i className="fas fa-envelope pe-2"></i></span>
                <div><p>Email</p><a href="mailto:hr@bytepulse.com">hr@bytepulse.com</a></div>
              </li>
              <li>
                <span><i className="fas fa-phone-alt pe-2"></i></span>
                <div><p>Phone </p><a href="tel:+923000800613">(+92)300 0800 613</a></div>
              </li>
              <li>
                <span><i className="fas fa-map-marker-alt pe-2"></i></span>
                <div><p>Address </p>Office #1, ground floor, saeed center, farid town road sahiwal</div>
              </li>
            </ul>
          </div>

        </div>

        {/* Socials and Copyright */}
        <div className="row justify-content-center align-items-center wp-pt-14">

          <div className="col-lg-6 text-center text-lg-end wp-pt-16">
            <p style={{ fontSize: "1.125rem", fontWeight: 400 }}>
              Copyright © <span className="wb-copyright-year">2024</span> <span style={{ color: "rgb(27, 142, 61)" }}>Byte Pulse</span> - All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
