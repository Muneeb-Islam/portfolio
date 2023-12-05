import { s3baseUrl } from "@/config/config";
import { _send_contact_support_email } from "../../../DAL/Form";
import { useState } from "react";
import { useSnackbar } from "notistack";
import React from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
const ContactSection = ({ page_data }) => {
  const { enqueueSnackbar } = useSnackbar();
  const salePage = page_data.sale_page_detail;
  const [inputs, setInputs] = useState({
    name: "",
    phone_number: "",
    email: "",
    subject: "",
    message: "",
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
      enqueueSnackbar(resp.message, { variant: "success" });
      setInputs("");
    } else {
      // alert("something wrong");
      enqueueSnackbar(resp.message, { variant: "error" });
    }
  };
  return (
    <section className="contact_form" id="contact_form_wrapper">
      <div className="container-fluid px-lg-5">
        <div className="row justify-content-center align-items-center mx-3 mt-5 contact-card">
          <div className="col-lg-6 ps-lg-0">
            <h2>Ready to see Wrike for yourself?</h2>
            <p>
              We’d love to show you how Wrike can help your team do more of
              their best work. Fill out the form and we’ll be in touch within 24
              hours.
            </p>
            <ul className="list-unstyled">
              <li>Discuss pricing options</li>
              <li>Assess your team’s needs</li>
              <li>Learn more about Wrike features</li>
            </ul>
            <img src="/assets/form-img.webp" alt="" className="img-fluid" />
          </div>

          <div className="col-lg-6 ps-lg-5 mt-4 mt-md-0">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="First Name *"
                    required
                    id="name"
                    value={inputs.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-lg-6 mt-4 mt-md-0">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Last Name *"
                    required
                    id="name"
                    value={inputs.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-lg-6 mt-4">
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
                <div className="col-lg-6 mt-4">
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
                <h3>Payment Detail:</h3>
              
               <div className="col-12 mt-2">
               <label>Card Number </label>
                  <CardNumberElement   className="form-control"/>
               </div>
               
                <div className="col-lg-6 mt-4">
                <label>Expiration Date</label>
                  <CardExpiryElement   className="form-control" />
                </div>
                 <div className="col-lg-6 mt-4">
                 <label>CVC</label>
                  <CardCvcElement   className="form-control"/>
                 </div>
                  <div className="col-12 mt-4">
                  <button className="btn-vision w-100 mt-0">
                    {/* {salePage.contact_us_button_text}{" "} */}
                    Get in touch
           
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
