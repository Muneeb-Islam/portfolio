
const ExperianceSection = () => {
  return (
    <section
      className="about_277 main_section wp-pt-40 wp-pb-80 m-40"
      data-_id="67a99b2fb9616f8ef8b9d360"
      data-section_id="mibchlsony"
      data-section_title="About info with multiple images, solid and border button with icon list"
      data-section_name="67a99b2fb9616f8ef8b9d360"
      id="mibchlsony"
      style={{
        backgroundColor: "rgb(238, 237, 222)",
        paddingTop: "0rem",
        paddingBottom: "0rem",
        marginTop: "0rem",
      }}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 text-center wp-pt-32 pe-lg-5">
            <img src="https://builder-templates-bucket.s3.amazonaws.com/67d111d85570996769fd3f35/assets/Saasify-hero-image.svg" alt="" class="img-width-fluid" data-width="20" data-height="40" imgheight="1960" imgwidth="1104" data-image_name="Saasify-hero-image.svg"
            />
          </div>

          <div className="col-lg-6 text-center text-lg-start wp-pt-32">
            <div className="wb-editor-block wp-pb-10">
              <h2>
                Join the journey of innovation and excellence.
              </h2>
            </div>

            <div className="glorious-about-btns">
              <a
                href="/contact"
                className="wp-mt-16 solid-butn font-size-md img-custom-round-size wb-fw-500 wp-pt-20 wp-pb-20 lh-base wp-border-0 wp-mr-24"
                style={{
                  borderRadius: "50px",
                  paddingLeft: "1.875rem",
                  paddingRight: "1.875rem",
                }}
              >
                {/* <span>Sign Up</span> */}
                <span>Request A Quote</span>
              </a>
              {/* <a
                href="#"
                className="wp-mt-16 border-butn font-size-md lh-base wb-fw-500 wb-btn-text wp-border-0 text-decoration-underline wp-pt-20 wp-pb-20 wp-pr-0 wp-pl-0"
              >
                <span>Learn More</span>
              </a> */}
            </div>

            <ul className="list-unstyled wp-mt-24 text-start glorious-about-list wp-mb-0">
              <li block-name="Item-1">
                <i
                  className="far fa-check-circle wp-mr-10"
                  
                ></i>
                <p>No credit card required</p>
              </li>

              <li block-name="Item-2">
                <i
                  className="far fa-check-circle wp-mr-10"
                  
                ></i>
                <p>Free 30-day trial for all features</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperianceSection;
