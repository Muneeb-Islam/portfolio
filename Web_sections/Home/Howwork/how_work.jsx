import { s3baseUrl } from "@/config/config";

const HowSection = ({ page_data, website_workflow }) => {
  const salePage = page_data.page_detail;

  return (
<<<<<<< HEAD
    <>
      {website_workflow && website_workflow.length > 0 && (
        <section className="how-work pt-90" id="about-us">
          <div className="container">
            <div className="row justify-content-center">
              <div
                className="col-lg-7 text-center"
                dangerouslySetInnerHTML={{
                  __html: salePage.services_text,
                }}
              ></div>
            </div>
            {website_workflow?.map((items, index) => {
              if (index % 2 === 0) {
                return (
                  <div className="row  align-items-center position-relative">
                    <div className="col-lg-6 pe-lg-5 pt-80">
                      <img
                        src={
                          s3baseUrl + items.website_workflow_images.thumbnail_1
                        }
                        className="img-fluid"
                        alt=""
                      />
                      {/* <img
=======
    <section className="how-work pt-90" id="about-us">
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
>>>>>>> 59bc58579e9c3dc1ab95528e5e744eebbb5cfe8d
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
                        src={
                          s3baseUrl + items.website_workflow_images.thumbnail_1
                        }
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </section>
      )}
    </>
  );
};

export default HowSection;
