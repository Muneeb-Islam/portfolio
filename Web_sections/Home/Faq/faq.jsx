import { s3baseUrl } from "@/config/config";

const FaqSection = ({ page_data, faq }) => {
  const salePage = page_data.page_detail;
  const faqLength = faq?.length;

  return (
    <section className="faq_23 pt-5" id="faq">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6 wow slideInLeft">
            <ul
              className="accordion accordion-flush list-unstyled"
              id="it-accordion_G_U_ID"
            >
              {faq?.slice(0, faqLength).map((items, index) => {
                return (
                  <div key={index}>
                    <li className="accordion-item ">
                      <div
                        className="accordion-header it-faq-style"
                        id="itone_G_U_ID"
                      >
                        <a
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#faq${index + 1}`}
                        >
                          <div className="d-flex">
                            <div className="it-head pe-3">
                              {items.question_statment}
                            </div>
                            <img
                              src="/assets/home-page/plus.png"
                              className="img-fluid  faq-icon-show"
                              alt=""
                            />
                            <img
                              src="/assets/home-page/minus.png"
                              className="img-fluid  faq-icon-close"
                              alt=""
                            />
                          </div>
                        </a>
                      </div>

                      <div
                        id={`faq${index + 1}`}
                        className="accordion-collapse collapse"
                        data-bs-parent="#it-accordion_G_U_ID"
                      >
                        <p className="accordion-body">
                          {items.answer_statment}
                        </p>
                        {/* <div
                          className="accordion-body"
                          dangerouslySetInnerHTML={{
                            __html: items.description,
                          }}
                        ></div> */}
                      </div>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="col-md-6 col-lg-5 wow slideInRight">
            <div
              dangerouslySetInnerHTML={{
                __html: salePage.faq_text,
              }}
            ></div>
            <div className="position-btn mt-4 mt-lg-0 text-center text-md-start">
              <a
                href={salePage.faq_button_link}
                className="btn-vision"
                target="_blank"
              >
                {salePage.faq_button_text}
              </a>
              <img
                src={s3baseUrl + salePage.faq_image}
                className="img-fluid mt-4 mt-md-0"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
