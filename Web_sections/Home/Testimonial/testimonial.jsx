const TestimonialSection = () => {
  return (
    <section
      className="slider_163 main_section wp-pt-80"
      data-_id="67ab16a9b9616f8ef8b9e4ef"
      data-section_id="xlymldmuep"
      data-section_title="Testimonial with top content and review cards with center image"
      data-section_name="67ab16a9b9616f8ef8b9e4ef"
      id="xlymldmuep"
      imgheight="803"
      imgwidth="1828"
      style={{ paddingTop: "0rem" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="wb-editor-block saasify-testimonial-main">
              <h1>
                <span style={{ fontSize: "4.5rem" }}>
                  Client Testimonials &amp; Endorsements
                </span>
              </h1>
              <p>
                We are committed to delivering outstanding service and value. Our clients'
                feedback reflects the trust, quality, and excellence we strive for in every project.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center align-items-center">
          {/* Left Reviews */}
          <div className="col-lg-4 wp-pt-40">
            <ul className="list-unstyled mb-0 saasify-reviews-list">
              <li>
                <div
                  className="wb-box saasify-testimonial-card h-100 wp-pl-0 wp-pr-0 wp-border-0"
                  imgheight="141"
                  imgwidth="416"
                  style={{
                    paddingRight: "0rem",
                    paddingLeft: "0rem",
                    backgroundColor: "rgba(0, 0, 0, 0)",
                  }}
                >
                  <div className="saasify-testimonial-flex-div">
                    <img
                      src="https://builder-templates-bucket.s3.amazonaws.com/67ab16a9b9616f8ef8b9e4ef/assets/saasify-avatar-01.svg"
                      alt=""
                      className="img-fluid"
                      data-width="20"
                      data-height="40"
                    />
                    <div className="wb-editor-block saasify-testimonial-text wp-pl-16">
                      <h3>Sophia Lancaster</h3>
                      <p>Saasify streamlined our workflow effortlessly. A game-changer!</p>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div
                  className="wb-box saasify-testimonial-card h-100 wp-border-0"
                  imgheight="141"
                  imgwidth="416"
                  style={{ backgroundColor: "rgb(248, 229, 89)" }}
                >
                  <div className="saasify-testimonial-flex-div">
                    <div className="wb-editor-block saasify-testimonial-text">
                      <h3>Ethan Caldwell</h3>
                      <p style={{ color: "rgb(20, 30, 39)" }}>
                        Seamless setup and excellent support—Saasify delivers!
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Center Image */}
          <div className="col-lg-4 text-center wp-pt-40 px-lg-4">
            <img
              src="https://builder-templates-bucket.s3.amazonaws.com/67ab16a9b9616f8ef8b9e4ef/assets/saasify-testimonial-img.png"
              alt=""
              className="img-fluid"
              data-width="20"
              data-height="40"
            />
          </div>

          {/* Right Reviews */}
          <div className="col-lg-4 wp-pt-40">
            <ul className="list-unstyled mb-0 saasify-reviews-list">
              <li>
                <div
                  className="wb-box saasify-testimonial-card h-100 wp-border-0"
                  imgheight="141"
                  imgwidth="416"
                  style={{ backgroundColor: "rgb(224, 221, 170)" }}
                >
                  <div className="saasify-testimonial-flex-div">
                    <img
                      src="https://builder-templates-bucket.s3.amazonaws.com/67ab16a9b9616f8ef8b9e4ef/assets/saasify-avatar-02.svg"
                      alt=""
                      className="img-fluid"
                      data-width="20"
                      data-height="40"
                    />
                    <div className="wb-editor-block saasify-testimonial-text wp-pl-16">
                      <h3>Jonathan Meyers</h3>
                      <p style={{ color: "rgb(20, 30, 39)" }}>
                        Powerful, intuitive, and efficient. Highly recommend Saasify!
                      </p>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div
                  className="wb-box saasify-testimonial-card h-100 wp-pl-0 wp-pr-0 wp-border-0"
                  imgheight="166"
                  imgwidth="416"
                  style={{
                    paddingLeft: "0rem",
                    paddingRight: "0rem",
                    backgroundColor: "rgba(0, 0, 0, 0)",
                  }}
                >
                  <div className="saasify-testimonial-flex-div">
                    <img
                      src="https://builder-templates-bucket.s3.amazonaws.com/67ab16a9b9616f8ef8b9e4ef/assets/saasify-avatar-04.svg"
                      alt=""
                      className="img-fluid"
                      data-width="20"
                      data-height="40"
                    />
                    <div className="wb-editor-block saasify-testimonial-text wp-pl-16">
                      <h3>Rachel Whitmore</h3>
                      <p>Smooth transition and top-notch performance. Saasify exceeded expectations!</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
