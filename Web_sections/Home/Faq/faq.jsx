const FaqSection = () => {

return (

<section className="faq_23 pt-80">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6 pe-lg-5 wow slideInLeft">
        <h2>Frequently <br /> Asked Questions</h2>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.!</p>
        <div className="position-btn mt-4 mt-lg-0 text-center text-md-start">
          <a href="#" className="btn-vision">BOOK A CALL</a>
          <img src="/assets/home-page/faq-1.png" className="img-fluid mt-4 mt-md-0" alt="" />
        </div>
      </div>
      <div className="col-md-6 wow slideInRight">
        <ul className="accordion accordion-flush list-unstyled" id="it-accordion_G_U_ID">
          <li className="accordion-item ">
            <div className="accordion-header it-faq-style" id="itone_G_U_ID">
              <a className="accordion-button" type="button" data-bs-toggle="collapse"
                data-bs-target="#itcollapseone_G_U_ID" aria-expanded="true">
                <div className="d-flex">
                  <div className="it-head pe-3">
                    How can I request a quote for a project?
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
                  dignissim sit amet, adipiscing nec, ultricies sed, dolor.
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
                    What industries do you serve?
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
                  dignissim sit amet, adipiscing nec, ultricies sed, dolor.
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
                    What is the typical timeline for a project?
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
                  dignissim sit amet, adipiscing nec, ultricies sed, dolor.
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
                    Do you provide ongoing support and maintenance?
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
                  dignissim sit amet, adipiscing nec, ultricies sed, dolor.
                </p>
              </div>
            </div>
          </li>



        </ul>
      </div>
    </div>
  </div>
</section>



);
}

export default FaqSection;