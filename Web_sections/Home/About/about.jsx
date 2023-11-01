import { s3baseUrl } from "../../../config/config";
const AboutSection = ({ page_data }) => {
  const salePage = page_data.sale_page_detail;
  console.log(salePage, "--salePage");
  return (
    <section className="about_wrapper" id="about_wrapper">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 pe-lg-5 text-center text-lg-start wow slideInLeft">
            <img
              src={s3baseUrl + salePage.about_image}
              alt=""
              className="img-fluid"
            />
          </div>

          <div className="col-lg-6 text-center text-lg-start pt-5 pt-lg-0 pe-lg-4 wow slideInRight">
            <h2>{salePage.about_heading}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: salePage.about_main_text,
              }}
            ></div>

            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="about-card h-100 d-flex justify-content-center">
                  <i className="fa-solid fa-file-circle-check"></i>
                  <div
                    className="about-content"
                    dangerouslySetInnerHTML={{
                      __html: salePage.about_experience_text,
                    }}
                  ></div>
                </div>
              </div>
              <div className="col-md-6 pt-4 pt-md-0">
                <div className="about-card h-100 d-flex justify-content-center">
                  <i className="fa-solid fa-file-export"></i>
                  <div
                    className="about-content"
                    dangerouslySetInnerHTML={{
                      __html: salePage.about_quick_support_text,
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: salePage.about_vision_text,
              }}
            ></div>
            <a href="#" className="read-more">
              {salePage.agency_button_text}
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
