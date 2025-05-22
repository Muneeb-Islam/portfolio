
const BannerSection = () => {


  return (
    <section
      className="banner_wrapper mt-3 mt-lg-4">
      <div className="container">

        <div className="row justify-content-center">
          <div className="col-12">
              <div className="row justify-content-center">
                <div className="col-lg-10 col-xl-8 text-center">
                    <h1>
                      Elevate your business with <span className="font-style">advanced solutions</span>
                    </h1>
                    <p>                    
                        Our advanced solutions are engineered to propel your business forward by optimizing processes,
                        enhancing efficiency, and driving innovation across every aspect.
                    </p>
                    <a href="#contact" className="mt-3 contained-button">
                    Get Started
                    </a>
                    <a
                      name="myModal1_id_qbjenxbtom"
                      className="bg-orange mt-3 mx-2 mx-lg-3 contained-button"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#myModal1_id_qbjenxbtom"
                    >
                      <i className="fas fa-circle-play me-2"></i>
                      Watch a demo
                    </a>
                </div>

              </div>

          </div>
        </div>

        <div
          className="modal fade mt-80"
          id="myModal1_id_qbjenxbtom"
          tabIndex="-1"
          data-bs-backdrop="static"
          aria-labelledby="exampleModalLabel"
          data-bs-focus="false"
          style={{ display: "none" }}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <button
                  name="vidModal_id_qbjenxbtom"
                  type="button"
                  className="btn-close video-player-stop-event wb-disable"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
                <div className="ratio ratio-16x9 wb-iframe">
                  <iframe
                    src="https://www.youtube.com/embed/gW22hVe5_fI?si=QWWm6S6n0UlmTKJn"
                    width="560"
                    height="315"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BannerSection;
