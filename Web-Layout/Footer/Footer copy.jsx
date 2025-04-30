const Footer = () => {
  return (
    <section
      className="footer_147 main_section wp-pt-40"
      data-_id="67879e70b9616f8ef8b7e504"
      data-section_id="wfuwaaovth"
      data-section_title="Footer with newsletter, navigation, socials move up on hover"
      data-section_name="67879e70b9616f8ef8b7e504"
      id="wfuwaaovth"
      style={{ paddingTop: "0rem" }}
    >
      <div className="container">
        <div className="row justify-content-center justify-content-lg-between align-items-baseline">
          <div className="col-md-10 col-lg-5 pe-lg-5 text-center text-lg-start wp-pt-32">
            <a href="https://accelerator-builder-bucket.s3.amazonaws.com/67ab16fccf78a37220cfa878/index.html">
              <img
                src="/assets/logoo.png"
                alt="Saasify Footer Logo"
                className="img-fluid brand-logo"
              />
            </a>
            <div className="wb-editor-block profitpod-subscribe-heading wp-pt-24">
              <h2 style={{ fontSize: "1.375rem", fontWeight: 600 }}>
                Subscribe to our newsletter and get news
              </h2>
            </div>

            <form style={{ position: "relative" }}>
              <div className="row">
                <div className="col-12 wp-mt-20">
                  <input
                    type="email"
                    className="form-control wp-pb-18 wp-pt-18"
                    name="email"
                    placeholder="Email Address"
                    required
                    style={{ borderColor: "rgb(238, 237, 223)" }}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 wp-mt-20">
                  <button
                    type="submit"
                    className="submit-butn w-100 font-size-lg wb-fw-500 wp-pt-20 wp-pb-20 lh-1"
                    style={{
                      paddingLeft: "1.875rem",
                      paddingRight: "1.875rem",
                      color: "rgb(20, 30, 39)",
                      backgroundColor: "rgb(248, 229, 89)"
                    }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Quick Links */}
          <div className="col-4 col-md-3 col-lg-2 wp-pt-32">
            <h3 className="profitpod-links-heading font-size-xlg wb-fw-600">Quick Links</h3>
            <ul className="mb-0 list-unstyled wp-mt-20 profitpod-footer-links">
              <li className="wp-mb-14"><a href="#qbjenxbtom" className="font-size-md wb-fw-400">Home</a></li>
              <li className="wp-mb-14"><a href="#xnvvxpvlbu" className="font-size-md wb-fw-400">Why Us</a></li>
              <li className="wp-mb-14"><a href="#iqqtzvazmn" className="font-size-md wb-fw-400">Workflow</a></li>
              <li className="wp-mb-14"><a href="#fnnqpkglvc" className="font-size-md wb-fw-400">Pricing</a></li>
            </ul>
          </div>

          {/* Utilities */}
          <div className="col-4 col-md-3 col-lg-2 wp-pt-32">
            <h3 className="profitpod-links-heading font-size-xlg wb-fw-600">Utilities</h3>
            <ul className="mb-0 list-unstyled wp-mt-20 profitpod-footer-links">
              <li className="wp-mb-14"><a href="#" className="font-size-md wb-fw-400">Style Guide</a></li>
              <li className="wp-mb-14"><a href="#" className="font-size-md wb-fw-400">Licenses</a></li>
              <li className="wp-mb-14"><a href="#" className="font-size-md wb-fw-400">Changelog</a></li>
              <li className="wp-mb-14"><a href="#" className="font-size-md wb-fw-400">Instructions</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-4 col-md-3 col-lg-2 wp-pt-32">
            <h3 className="profitpod-links-heading font-size-xlg wb-fw-600">Legal</h3>
            <ul className="mb-0 list-unstyled wp-mt-20 profitpod-footer-links">
              <li className="wp-mb-14"><a href="#" className="font-size-md wb-fw-400">Privacy</a></li>
              <li className="wp-mb-14"><a href="#" className="font-size-md wb-fw-400">Terms</a></li>
              <li className="wp-mb-14"><a href="#" className="font-size-md wb-fw-400">Help</a></li>
              <li className="wp-mb-14"><a href="#" className="font-size-md wb-fw-400">Community</a></li>
            </ul>
          </div>
        </div>

        <div className="row wp-pt-60">
          <div className="col-12">
            <div className="border-line"></div>
          </div>
        </div>

        {/* Socials and Copyright */}
        <div className="row justify-content-center align-items-center wp-pt-14">
          <div className="col-lg-4 wp-pt-16">
            <ul className="mb-0 list-unstyled profitpod-footer-socials">
              <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f font-size-lg" style={{ color: "var(--wb-website-theme-secondary-color)" }}></i></a></li>
              <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram font-size-lg" style={{ color: "var(--wb-website-theme-secondary-color)" }}></i></a></li>
              <li><a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter font-size-lg" style={{ color: "var(--wb-website-theme-secondary-color)" }}></i></a></li>
              <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in font-size-lg" style={{ color: "var(--wb-website-theme-secondary-color)" }}></i></a></li>
            </ul>
          </div>

          <div className="col-lg-8 text-center text-lg-end wp-pt-16">
            <p style={{ fontSize: "1.125rem", fontWeight: 400 }}>
              Copyright © <span className="wb-copyright-year">2024</span> <span style={{ color: "rgb(27, 142, 61)" }}>Saasify</span> - All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
