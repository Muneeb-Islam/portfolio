
const BannerSection = () => {


  return (
    <section
      className="banner_154 m-40"
      data-_id="67ab1283b9616f8ef8b9e29a"
      data-section_id="qbjenxbtom"
      data-section_title="Banner with menu box, content box with video modal and image"
      data-section_name="67ab1283b9616f8ef8b9e29a"
      id="qbjenxbtom"
      imgheight="1323"
      imgwidth="1828"
      style={{ color: "rgb(20, 30, 39)" }}
    >
      <div className="container">

        <div className="row justify-content-center">
          <div className="col-12">
            <div
              className="wb-box banner-main-card wp-border-0"
              imgheight="1161"
              imgwidth="1296"
              style={{ backgroundColor: "rgb(32, 50, 57)" }}
            >
              <div className="row justify-content-center">
                <div className="col-lg-10 text-center">
                  <div className="wb-editor-block saasnode-banner-main wp-pb-20">
                    <h1>
                      Elevate your business with advanced solutions
                    </h1>
                    <p>
                      <span style={{ color: "rgb(238, 237, 222)" }}>
                        Our advanced solutions are engineered to propel your business forward by optimizing processes,
                        enhancing efficiency, and driving innovation across every aspect.
                      </span>
                    </p>
                  </div>
                  <div className="saasnode-banner-btns">
                    <a href="#contact" className="wp-mt-16 banner-solid-btn">
                      <span>Get Started</span>
                    </a>
                    <a
                      name="myModal1_id_qbjenxbtom"
                      className="banner-video-btn wp-mt-16 wp-ml-10 wp-mr-10 bg-yellow text-black"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#myModal1_id_qbjenxbtom"
                    >
                      <i className="fas fa-circle-play wp-mr-10"></i>
                      <span>Watch a demo</span>
                    </a>
                  </div>
                </div>

                <div className="col-12 text-center wp-pt-32">
                  <img
                    src="https://builder-templates-bucket.s3.amazonaws.com/67ab1283b9616f8ef8b9e29a/assets/saasnode-banner-img.svg"
                    alt=""
                    className="img-fluid"
                    data-width="20"
                    data-height="40"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade wp-mt-50"
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
