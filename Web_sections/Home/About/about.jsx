const AboutSection = () => {
  return (
    <section
      className="about_276 wp-pt-40 wp-pb-80 m-40"
      data-_id="67a99aeeb9616f8ef8b9d353"
      data-section_id="xnvvxpvlbu"
      data-section_title="About info with stats, center image and benefits list"
      data-section_name="67a99aeeb9616f8ef8b9d353"
      id="xnvvxpvlbu"
      imgheight="755"
      imgwidth="1828"
      style={{
        paddingTop: "0rem",
        paddingBottom: "0rem",
        marginTop: "0rem",
        backgroundColor: "rgb(238, 237, 222)",
      }}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {/* Left Column */}
          <div className="col-lg-4 text-center text-lg-start wp-pt-32">
            <h2>
              Empowering Ventures to Succeed
            </h2>
            <p>
              We recognize the vital role of adaptability and flexibility in
              driving growth and success.
            </p>
            <div className="saasify-learn-btn">
              <a href="#" className="wp-mt-32">
                <span>Learn More</span>
              </a>
            </div>

            <div className="row justify-content-center wp-pt-32">
              <div className="col-6 col-md-3 col-lg-6 wp-pt-16">
                <div className="wb-editor-block saasify-stat-text">
                  <h2>5K</h2>
                  <p>Data transaction</p>
                </div>
              </div>

              <div className="col-6 col-md-3 col-lg-6 wp-pt-16">
                <div className="wb-editor-block saasify-stat-text">
                  <h2>10K</h2>
                  <p>Active Users</p>
                </div>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="col-lg-5 text-center wp-pt-32 px-lg-5">
            <img
              src="https://builder-templates-bucket.s3.amazonaws.com/67a99aeeb9616f8ef8b9d353/assets/About-image.svg"
              alt=""
              className="img-fluid"
              data-width="20"
              data-height="40"
            />
          </div>

          {/* Right Column */}
          <div className="col-lg-3 wp-pt-32">
            <div className="wb-editor-block saasify-about-main text-center text-lg-start">
              <h2>Why Choose Saasify?</h2>
            </div>

            <ul className="list-unstyled mb-0 wp-mt-32 why-saasify-list">
              <li>
                <i className="fas fa-circle-chevron-right wp-mr-10 text-yellow"></i>
                <div className="wb-editor-block why-saasify-text">
                  <h3>Flexible &amp; Adaptive</h3>
                  <p>
                    Our agile solutions evolve with your business needs,
                    ensuring seamless adaptability.
                  </p>
                </div>
              </li>

              <li>
                <i className="fas fa-circle-chevron-right wp-mr-10 text-yellow"></i>
                <div className="wb-editor-block why-saasify-text">
                  <h3>Scalable Growth</h3>
                  <p>
                    Designed to grow with you, our solutions expand effortlessly
                    to match your success.
                  </p>
                </div>
              </li>

              <li>
                <i className="fas fa-circle-chevron-right wp-mr-10 text-yellow"></i>
                <div className="wb-editor-block why-saasify-text">
                  <h3>Innovation-Driven</h3>
                  <p>
                    Stay ahead with cutting-edge technology that keeps your
                    business at the forefront.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
