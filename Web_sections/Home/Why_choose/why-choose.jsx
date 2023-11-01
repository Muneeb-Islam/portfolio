import { s3baseUrl } from "@/config/config";
import { useEffect, useState } from "react";

const Why_chooseSection = ({ page_data, website_program }) => {
  const salePage = page_data.sale_page_detail;
  const [program, setProgram] = useState([]);
  useEffect(() => {
    let programState = website_program.map((val, i) => {
      if (i == 0) {
        return {
          ...val,
          active: "active",
        };
      } else {
        return {
          ...val,
          active: "",
        };
      }
    });
    setProgram(programState);
  }, []);
  return (
    <section
      className="choose-us "
      style={{
        background: `url(${
          s3baseUrl + salePage.choose_us_background_image
        }) no-repeat center`,
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-7 wow fadeInDown">
            <span> {salePage.choose_us_heading} </span>
            <div
              dangerouslySetInnerHTML={{
                __html: salePage.why_choose_us_text,
              }}
            ></div>
          </div>
        </div>
        <div className="row mt-50 text-center">
          {program.map((items, index) => {
            return (
              <>
                <div className="col-md-6 col-lg-3 position-relative mb-50 wow slideInLeft">
                  <div className="choose-card ">
                    <div className="elementor-icon-box-icon">
                      {" "}
                      <span className="elementor-icon">
                        {" "}
                        <img
                          src={s3baseUrl + items.program_images.thumbnail_1}
                          className="img-fluid"
                          alt=""
                        />{" "}
                      </span>
                    </div>
                    <h3>{items.title}</h3>
                    <br />
                    <div
                      dangerouslySetInnerHTML={{
                        __html: items.short_description,
                      }}
                    ></div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div
          className="row align-items-center justify-content-center back-img"
          style={{
            background: `url(${
              s3baseUrl + salePage.agency_background_image
            }) no-repeat center`,
            backgroundSize: "cover",
          }}
        >
          <div className="col-11 col-lg-10">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-4 col-lg-4">
                <a href="" data-bs-toggle="modal" data-bs-target="#myModal">
                  <div className="video-icon">
                    {" "}
                    <img
                      src="/assets/play.png"
                      className="img-fluid"
                      alt=""
                    />{" "}
                  </div>
                </a>
              </div>
              <div className="col-md-8 col-lg-6 text-center text-md-start">
                <h2>{salePage.agency_title}</h2>
                <div className="row justify-content-center justify-content-lg-start">
                  <div className="col-11 col-md-8 position-relative">
                    <a href="" className="read-btn">
                      {salePage.agency_button_text}{" "}
                      <i className="fa-solid fa-arrow-right ms-1"></i>
                    </a>
                    <span className="chhose-btn"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade mt-5 pt-5"
        id="myModal"
        data-bs-backdrop="static"
        aria-labelledby="exampleModalLabel"
        data-bs-focus="false"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button
                name="myModal"
                type="button"
                className="btn-close video-player-stop-event"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div className="ratio ratio-16x9 wb-iframe">
                <iframe
                  width="560"
                  height="315"
                  src={salePage.agency_url}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why_chooseSection;
