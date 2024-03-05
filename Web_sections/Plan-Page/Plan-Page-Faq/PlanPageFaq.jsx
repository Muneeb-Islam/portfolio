const PlanPageFaq = ({ faq, page_data }) => {
  const salePage = page_data.page_detail;
  const faqLength = faq?.length;

  return (
    <>
      {faq && faq.length > 0 && (
        <section className="plan-page-faq" id="faq">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-11">
                <h2>{salePage.frequently_asked_questions_text}</h2>
                <ul className="faq-list list-unstyled mt-4">
                  {faq?.slice(0, faqLength).map((items, index) => {
                    return (
                      <div key={index}>
                        <li>
                          <a
                            data-bs-toggle="collapse"
                            className="collapsed collap p-3"
                            data-bs-target={`#faq${index + 1}`}
                          >
                            <div className="d-flex">
                              <h6>{items.question_statment}</h6>
                              <i className="fas fa-chevron-down icon-show "></i>
                              <i className="fas fa-chevron-up icon-close "></i>
                            </div>
                          </a>
                          <div
                            id={`faq${index + 1}`}
                            className="collapse"
                            data-bs-parent=".faq-list"
                          >
                            <p>{items.answer_statment}</p>
                          </div>
                        </li>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default PlanPageFaq;
