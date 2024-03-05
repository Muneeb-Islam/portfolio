const PlanPageSlider = () => {
  return (
    <>
      <section className="bg-plan-color">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h2>Host Backlog on your private server</h2>
              <p>
                Get full control over your data, users, security settings, and
                more with Enterprise plan.
              </p>
              <div className="mt-5 d-md-flex d-block justify-content-center">
                <img
                  src="/assets/icon_google-play.png"
                  className="img-fluid"
                  alt=""
                />
                <img
                  src="/assets/icon_apple-store.png"
                  className="img-fluid ps-md-4 mt-md-0 mt-3"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-plan-slider">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11 text-center">
              <h3>TRUSTED BY OVER 18,000 COMPANIES WORLDWIDE</h3>
              <div className="row justify-content-center">
                <div className="col-lg-2 col-md-4 mt-5">
                  <img
                    src="/assets/nameomron-smallfalse.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-lg-2 col-md-4 mt-5">
                  <img
                    src="/assets/namesoft-bank-smallfalse.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-lg-2 col-md-4 mt-5">
                  <img
                    src="/assets/namejpx-smallfalse.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-lg-2 col-md-4 mt-5">
                  <img
                    src="/assets/namebuzzfeed-smallfalse.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-lg-2 col-md-4 mt-5">
                  <img
                    src="/assets/namedmm-smallfalse.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlanPageSlider;
