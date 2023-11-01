import { s3baseUrl } from "@/config/config";

const ExperianceSection = ({page_data}) => {
    const salePage = page_data.sale_page_detail;
  return (
    <section className="experience_wrapper" id="why_us">
      <div className="container">
        <div className="row justify-content-center align-items-center px-lg-4">
          <div className="col-lg-6 text-center text-lg-start  wow slideInLeft">
           <div
            dangerouslySetInnerHTML={{
                __html:salePage.choose_us_upper_text,
              }}>

           </div>

            <div className="experience-list pt-4 d-block d-md-flex justify-content-center">
                <div
                dangerouslySetInnerHTML={{
                    __html:salePage.choose_us_list_text
                }}
                >

                </div>
              
            </div>
            <div className="border-line mt-4"></div>

            <div className="d-lg-flex align-items-center pt-5 bottom-icon">
              <i className="fa-solid fa-file-invoice me-4"></i>
              <div className="bottom-text pt-4 pt-lg-0"
              dangerouslySetInnerHTML={{
                __html:salePage.choose_us_bottom_text,
              }}>
        
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow slideInRight">
            <img src={s3baseUrl+ salePage.choose_us_image} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperianceSection;
