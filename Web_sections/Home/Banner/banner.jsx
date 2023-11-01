import { s3baseUrl } from "@/config/config";

const BannerSection = ({page_data, slider}) => {
  const salePage = page_data.sale_page_detail;

  return ( 
    <section className="banner_wrapper" id="home"
    style={{
      background: `url(${
        s3baseUrl + salePage.banner_background_image
      }) no-repeat center`,
     
    }}>
    <div className="container">
      <div
        id="banner-carousel"
        className="carousel slide text-center text-lg-start"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {slider.map((items, index) =>{
            return(
              <>
               <div className={`carousel-item ${index===0? "active":""}` } data-bs-interval="2000">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-5  banner-content">
               <div className="wow slideInDown">
               <span>
                  {items.title}
                </span>
               </div>
                <h1 className="wow slideInLeft">
                  {items.short_descriptio}
                </h1>
                <div
                dangerouslySetInnerHTML={{
                  __html:items.detail_description
                }}
                >

                </div>

                <a
                  href="#"
                  className="get-started wow slideInUp"
                >
                  GET STARTED <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
              <div className="col-lg-5 pt-5 pt-lg-0 position-relative wow slideInRight1 ">
                <img
                  src={s3baseUrl+  items.images.thumbnail_1}
                  className="img-fluid"
                  alt="..."
                />
                {/* <div className="pos-shape">
                  <img
                    src="assets/bottom-triangle.png"
                    alt=""
                    className="img-fluid"
                  />
                </div> */}
              </div>
            </div>
          </div>
              </>
            );
          })}
         
          {/* <div className="carousel-item" data-bs-interval="4000">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-5  banner-content">
                <span>
                  CREATE PERFECT WEBSITE
                </span>
                <h1>
                  Make Your Dream Website With Vision
                </h1>
                <p>
                  With a custom web page and built-in web page, get the
                  results that you have dreamed about.
                </p>

                <a
                  href="#"
                  className="get-started "
                >
                  GET STARTED <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
              <div className="col-lg-5 pt-5 pt-lg-0 ">
                <img
                  src="assets/banner-2.png"
                  className="img-fluid"
                  alt="..."
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </section>
   );
}
 
export default BannerSection;

