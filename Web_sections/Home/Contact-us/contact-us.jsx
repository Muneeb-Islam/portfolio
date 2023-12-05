import { s3baseUrl } from "@/config/config";
import {_send_contact_support_email} from "../../../DAL/Form";
import { useState } from "react";
import { useSnackbar } from "notistack";
const ContactSection = ({ page_data }) => {
  const { enqueueSnackbar } = useSnackbar();
  const salePage = page_data.sale_page_detail;
  const [inputs, setInputs] = useState({
    name: "",
    phone_number: "",
    email: "",
    subject: "",
    message:"",
  });
  const handleInputChange = (e) => {
    const { target } = e;
    setInputs((prev) => {
      return { ...prev, [target.name]: target.value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();

    // make postData body
    const postData = inputs;
    // call DAL function
    const resp = await _send_contact_support_email(postData);

    // handle response
    console.log(resp, "--resp");
    if (resp.code === 200) {
      enqueueSnackbar(resp.message,{variant:"success"})
        setInputs("")
    } else {
      // alert("something wrong");
      enqueueSnackbar(resp.message,{variant:"error"})

    }
  };
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
            <form  onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6 pt-2">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name *"
                    required
                    id="name"
                    value={inputs.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-lg-6 pt-2">
                  <input
                    type="phone"
                    className="form-control"
                    placeholder="Phone Number *"
                    required
                    name="phone_number"
                    id="phone_number"
                    value={inputs.phone_number}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-lg-6 pt-2">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address *"
                    required
                    name="email"
                    id="email"
                    value={inputs.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-lg-6 pt-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                     name="subject"
                    id="subject"
                    value={inputs.subject}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="col-12 pt-2">
                  <textarea
                    type="message"
                    className="form-control"
                    cols="30"
                    rows="4"
                    placeholder="Message *"
                    name="message"
                    id="message"
                    value={inputs.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div className="col-lg-6 pt-2">
                  <button className="btn-vision w-100 mt-0">
                    {salePage.contact_us_button_text}{" "}
                    <i className="fa-solid fa-arrow-right ms-2"></i>
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
