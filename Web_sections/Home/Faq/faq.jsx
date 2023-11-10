const FaqSection = () => {

return (

<section className="faq_23" id="faq">
  <div className="container">
    <div className="row justify-content-between align-items-center">   
      <div className="col-md-6 wow slideInLeft">
        <ul className="accordion accordion-flush list-unstyled" id="it-accordion_G_U_ID">
          <li className="accordion-item ">
            <div className="accordion-header it-faq-style" id="itone_G_U_ID">
              <a className="accordion-button" type="button" data-bs-toggle="collapse"
                data-bs-target="#itcollapseone_G_U_ID" aria-expanded="true">
                <div className="d-flex">
                  <div className="it-head pe-3">
                  How do I get started with Vissioon and make the most of its features?
                  </div>
                  <img src="/assets/home-page/plus.png" className="img-fluid  faq-icon-show" alt="" />
                  <img src="/assets/home-page/minus.png" className="img-fluid  faq-icon-close" alt="" />
                
                </div>
              </a>
            </div>

            <div id="itcollapseone_G_U_ID" className="accordion-collapse collapse show"
              data-bs-parent="#it-accordion_G_U_ID">
              <div className="accordion-body wb-editor-block">
                <p>
                Getting started with Vissioon is easy. Simply sign up for an account, and our platform provides step-by-step guidance to help you make the most of our features and services.
                </p>
              </div>
            </div>
          </li>
          <li className="accordion-item  ">
            <div className="accordion-header it-faq-style" id="ittwo_G_U_ID">
              <a className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#itcollapsetwo_G_U_ID" aria-expanded="false">
                <div className="d-flex">
                  <div className="it-head pe-3">
                  Is Vissioon suitable for any type of business?
                  </div>
                  <img src="/assets/home-page/plus.png" className="img-fluid  faq-icon-show" alt="" />
                  <img src="/assets/home-page/minus.png" className="img-fluid  faq-icon-close" alt="" />
                </div>
              </a>
            </div>
            <div id="itcollapsetwo_G_U_ID" className="accordion-collapse collapse"
              data-bs-parent="#it-accordion_G_U_ID">
              <div className="accordion-body wb-editor-block">
                <p>
                Yes, Vissioon caters to all business types, making it a versatile solution for various industries.
                </p>
              </div>
            </div>
          </li>
          <li className="accordion-item ">
            <div className="accordion-header it-faq-style" id="itthree_G_U_ID">
              <a className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#itcollapsethree_G_U_ID" aria-expanded="false">
                <div className="d-flex">
                  <div className="it-head pe-3">
                  How does Vissioon ensure data security and privacy for users?
                  </div>
                  <img src="/assets/home-page/plus.png" className="img-fluid  faq-icon-show" alt="" />
                  <img src="/assets/home-page/minus.png" className="img-fluid  faq-icon-close" alt="" />
                </div>
              </a>
            </div>
            <div id="itcollapsethree_G_U_ID" className="accordion-collapse collapse"
              data-bs-parent="#it-accordion_G_U_ID">
              <div className="accordion-body wb-editor-block">
                <p>
                Data security and privacy are top priorities for Vissioon. We implement advanced encryption, and access controls, and follow industry best practices to safeguard your data
                </p>
              </div>
            </div>
          </li>

          <li className="accordion-item  ">
            <div className="accordion-header it-faq-style" id="itfour_G_U_ID">
              <a className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#itcollapsefour_G_U_ID" aria-expanded="false">
                <div className="d-flex">
                  <div className="it-head pe-3">
                  What kind of system requirements are necessary to run Vissioon’s platform effectively?
                  </div>
                  <img src="/assets/home-page/plus.png" className="img-fluid  faq-icon-show" alt="" />
                  <img src="/assets/home-page/minus.png" className="img-fluid  faq-icon-close" alt="" />
                </div>
              </a>
            </div>
            <div id="itcollapsefour_G_U_ID" className="accordion-collapse collapse"
              data-bs-parent="#it-accordion_G_U_ID">
              <div className="accordion-body wb-editor-block">
                <p>
                Vissioon is designed to run on most modern web browsers and devices, ensuring accessibility and flexibility. We recommend keeping your browser and device software up to date for the best experience.
                </p>
              </div>
            </div>
          </li>

          <li className="accordion-item  ">
            <div className="accordion-header it-faq-style" id="itfour_G_U_ID">
              <a className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#itcollapsefour" aria-expanded="false">
                <div className="d-flex">
                  <div className="it-head pe-3">
                  Do I need technical skills to use Vissioon?
                  </div>
                  <img src="/assets/home-page/plus.png" className="img-fluid  faq-icon-show" alt="" />
                  <img src="/assets/home-page/minus.png" className="img-fluid  faq-icon-close" alt="" />
                </div>
              </a>
            </div>
            <div id="itcollapsefour" className="accordion-collapse collapse"
              data-bs-parent="#it-accordion_G_U_ID">
              <div className="accordion-body wb-editor-block">
                <p>
                No, Vissioon is designed to be user-friendly, and you don't need advanced technical skills to use it.
                </p>
              </div>
            </div>
          </li>

        </ul>
      </div>
      <div className="col-md-6 col-lg-5 wow slideInRight">
        <h2>Frequently <br /> Asked Questions</h2>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.!</p>
        <div className="position-btn mt-4 mt-lg-0 text-center text-md-start">
          <a href="#contact_form_wrapper" className="btn-vision">BOOK A CALL</a>
          <img src="/assets/home-page/faq-1.png" className="img-fluid mt-4 mt-md-0" alt="" />
        </div>
      </div>
    </div>
  </div>
</section>



);
}

export default FaqSection;