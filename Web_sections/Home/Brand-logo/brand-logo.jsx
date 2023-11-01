import { s3baseUrl } from "@/config/config";

const Brans_LogoSection = ({page_data}) => {
    const salePage = page_data.sale_page_detail;
  return (
    <section className="brand_logos_wrapper"
    style={{
      background: `url(${
        s3baseUrl + salePage.banner_background_image
      }) no-repeat center`,
     
    }}>
    <div className="container">
        <div className="row justify-content-center align-items-center brand-logos px-lg-5">
                    <div className="col-4 col-md-2">
                        <img src={s3baseUrl+ salePage.brand_image_1} className="img-fluid" alt="..." />
                    </div>
                    <div className="col-4 col-md-2">
                    <img src={s3baseUrl+ salePage.brand_image_2} className="img-fluid" alt="..." />
                    </div>
                    <div className="col-4 col-md-2">
                    <img src={s3baseUrl+ salePage.brand_image_3} className="img-fluid" alt="..." />
                    </div>
                    <div className="col-4 col-md-2 pt-4 pt-md-0">
                    <img src={s3baseUrl+ salePage.brand_image_4} className="img-fluid" alt="..." />
                    </div>
                    <div className="col-4 col-md-2 pt-4 pt-md-0">
                    <img src={s3baseUrl+ salePage.brand_image_5} className="img-fluid" alt="..." />
                    </div>
                    <div className="col-4 col-md-2 pt-4 pt-md-0">
                    <img src={s3baseUrl+ salePage.brand_image_6} className="img-fluid" alt="..." />
                    </div>
        </div>
    </div>
    </section>
  );
  }
  
  export default Brans_LogoSection;