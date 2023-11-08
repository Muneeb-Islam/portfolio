import { s3baseUrl } from "@/config/config";

const ContactSection = ({ page_data }) => {
  const salePage = page_data.sale_page_detail;
  return (
    <section
      className="contact_form_wrapper"
      id="contact_form_wrapper"
      style={{
        background: `url(${
          s3baseUrl + salePage.contact_us_outer_background_image
        }) no-repeat center`,
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            {/* <span>{salePage.contact_us_heading}</span> */}
            <div
              dangerouslySetInnerHTML={{
                __html: salePage.contact_us_text,
              }}
            ></div>
          </div>
        </div>

        <div
          className="row justify-content-center align-items-center mx-3 mt-5 contact-card"
          style={{
            background: `url(${
              s3baseUrl + salePage.contact_us_background_image
            }) no-repeat`,
            backgroundSize: "100% 100%",
          
          }}
        >
          <div className="col-lg-5 ps-lg-0">
            <img
              src={s3baseUrl + salePage.contact_us_image}
              alt=""
              className="img-fluid"
            />
          </div>

          <div className="col-lg-7 ps-lg-5">
            <form>
              <div className="row">
                <div className="col-lg-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Name *"
                    required
                  />
                </div>
                <div className="col-lg-6">
                  <input
                    type="phone"
                    className="form-control"
                    placeholder="Phone Number *"
                    required
                  />
                </div>
                <div className="col-12">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address *"
                    required
                  />
                </div>
                {/* <div className="col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div> */}

                <div className="col-12">
                  <textarea
                    type="message"
                    className="form-control"
                    cols="30"
                    rows="4"
                    placeholder="Message *"
                    required
                  ></textarea>
                </div>

                <div className="col-lg-6 pt-4">
                  <button className="send-message w-100">
                    {salePage.contact_us_button_text}{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
