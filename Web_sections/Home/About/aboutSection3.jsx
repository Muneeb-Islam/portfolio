const AboutSection3 = () => {
  return (
    <section
      className="about_225 main_section m-40"
      data-_id="67470b51f05e5f7adbddaaad"
      data-section_id="jovgaoruja"
      data-section_title="About us with icon list & total client shadow card with image"
      data-section_name="67470b51f05e5f7adbddaaad"
      id="jovgaoruja"
      imgheight="570"
      imgwidth="1828"
      style={{ paddingTop: "0rem" }}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6  text-center text-lg-start col-12" block-name="Block-1">

            <h2 >
              Smart & Intuitive Dashboard
            </h2>
            <p>
              Effortlessly manage your business and make informed decisions with ease.
            </p>


            <ul className="list-unstyled text-start mb-0 mentor-flow-about-list wp-mt-32">
              {[
                "Centralized data",
                "Customizable layout",
                "Interactive visualizations",
              ].map((text, index) => (
                <li key={index} className="d-flex align-items-baseline wp-mb-16" block-name={`Item-${index + 1}`}>
                  <i
                    className="fas fa-chevron-circle-right wp-mr-10 font-size-lg text-yellow"
        
                  ></i>
                  <div className="wb-editor-block mentor-flow-about-list-text">
                    <h3>
                        {text}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>

            <div className="more-about-us-btn">
              <a
                href="#"
                className="wp-mt-32 font-size-md wb-fw-500 text-decoration-underline img-custom-round-size wb-btn-text wp-pt-0 wp-pb-0 wp-pl-0 wp-pr-0"
                style={{ borderRadius: "0px" }}
              >
                <span>Explore Features</span>
              </a>
            </div>
          </div>

          <div className="col-lg-6 text-center pt-3 pt-lg-0 ps-lg-5 col-12" block-name="Block-2">
            <img
              src="https://builder-templates-bucket.s3.amazonaws.com/67d111d85570996769fd3f35/assets/saasify-dashboard-image.svg"
              alt=""
              className="img-width-fluid"
              imgheight="1156"
              imgwidth="1192"
              data-image_name="saasify-dashboard-image.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection3;
