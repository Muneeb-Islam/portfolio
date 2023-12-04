import { s3baseUrl } from "@/config/config";

const HowSection = ({ page_data, comprehensive_services }) => {
  const salePage = page_data.sale_page_detail;

  return (
    <section className="how-work pt-90" id="features">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-lg-7 text-center"
            dangerouslySetInnerHTML={{
              __html: salePage.services_text,
            }}
          ></div>
        </div>
        {comprehensive_services.map((items, index) => {
          if (index % 2 === 0) {
            return (
              <div className="row  align-items-center position-relative">
                <div className="col-lg-6 pe-lg-5 pt-80">
                  <img
                    src={s3baseUrl + items.program_images.thumbnail_1}
                    className="img-fluid"
                    alt=""
                  />
                  {/* <img
                    src={s3baseUrl + items.icon_images.thumbnail_1}
                    className="img-fluid position-img"
                    alt=""
                  /> */}
                </div>
                <div className="col-lg-6 hows-text  ps-lg-5 pt-80  wow slideInRight">
                  <h2>{items.title}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: items.short_description,
                    }}
                  ></div>
                </div>
              </div>
            );
          } else {
            return (
              <div className="row  align-items-center  position-relative last-child">
                <div className="col-lg-6 hows-text pe-lg-5 pt-90 order-2 order-lg-1 wow slideInLeft">
                  <h2>{items.title}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: items.short_description,
                    }}
                  ></div>
                </div>
                <div className="col-lg-6 ps-lg-5 ps-lg-5 pt-90  order-1 order-lg-2">
                  <img
                    src={s3baseUrl + items.program_images.thumbnail_1}
                    className="img-fluid"
                    alt=""
                  />
                  {/* <img
                    src="/assets/home-page/line-1.png"
                    className="img-fluid position-img-2"
                    alt=""
                  /> */}
                </div>
              </div>
            );
          }
        })}

     
      </div>
    </section>
  );
};

export default HowSection;
