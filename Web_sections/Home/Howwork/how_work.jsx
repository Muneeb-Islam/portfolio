const HowSection = () => {
  return (
    <section
      className="workflow_wrapper mt-80 pt-60 pb-60 bg-light-blue"
      id="iqqtzvazmn"
    >
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-7 pt-4 pe-lg-5 col-12">
            <div className="wb-box saasify-tab-box" style={{ boxShadow: "0px 0px 0px 0px" }}>
              <div className="nav nav-tabs justify-content-center">
                <a className="nav-link active" data-bs-toggle="tab" href="#step1_id_iqqtzvazmn">Plan</a>
                <a className="nav-link" data-bs-toggle="tab" href="#step2_id_iqqtzvazmn">Setup</a>
                <a className="nav-link" data-bs-toggle="tab" href="#step4_id_iqqtzvazmn">Grow</a>
              </div>

              <div className="tab-content">
                {/* Step 1 - Plan */}
                <div className="tab-pane fade active show" id="step1_id_iqqtzvazmn">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-md-5 pt-4 tab-img-col">
                      <img
                        src="/assets/tab-image-01.png"
                        alt="Strategic Planning"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-md-7 pt-4 ps-md-5">
                      <h3>Strategic Planning</h3>
                      <p>We assess your business needs and craft a tailored roadmap to align with your goals.</p>
                      <ul className="list-unstyled mb-0 mt-3 saasify-tab-list">
                        <li><i className="fas fa-circle me-2"></i> Needs analysis</li>
                        <li><i className="fas fa-circle me-2"></i> Goal setting</li>
                        <li><i className="fas fa-circle me-2"></i> Strategy blueprint</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 2 - Setup */}
                <div className="tab-pane fade" id="step2_id_iqqtzvazmn">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-md-5 pt-4 tab-img-col">
                      <img
                        src="/assets/tab-image-02.png"
                        alt="Seamless Setup"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-md-7 pt-4 ps-md-5">
                      <h3>Seamless Setup</h3>
                      <p>We handle implementation, integrations, and configurations tailored to your workflow.</p>
                      <ul className="list-unstyled mb-0 mt-3 saasify-tab-list">
                        <li><i className="fas fa-circle me-2"></i> System integration</li>
                        <li><i className="fas fa-circle me-2"></i> Data migration</li>
                        <li><i className="fas fa-circle me-2"></i> Configuration</li>
                      </ul>
                    </div>
                  </div>
                </div>


                {/* Step 4 - Grow */}
                <div className="tab-pane fade" id="step4_id_iqqtzvazmn">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-md-5 pt-4 tab-img-col">
                      <img
                        src="/assets/tab-image-03.png"
                        alt="Scale & Optimize"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-md-7 pt-4 ps-md-5">
                      <h3>Scale & Optimize</h3>
                      <p>We help you monitor performance, gather insights, and scale operations for growth.</p>
                      <ul className="list-unstyled mb-0 mt-3 saasify-tab-list">
                        <li><i className="fas fa-circle me-2"></i> Analytics & reports</li>
                        <li><i className="fas fa-circle me-2"></i> Ongoing enhancements</li>
                        <li><i className="fas fa-circle me-2"></i> Business scaling</li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="col-lg-5 text-center text-lg-start mt-4 mt-lg-0s ">
           <h2 className="mb-3">Our Workflow for<span className="font-style"> Success</span></h2>
            <p>We follow a structured approach to ensure seamless implementation, smooth configuration, and optimal performance—helping you get the most out of our platform.</p>
            <div className="mt-4">
              <a href="#contact" className="contained-button">
                <span>Get Started</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowSection;
