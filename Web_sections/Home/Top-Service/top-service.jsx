import { s3baseUrl } from "@/config/config";

const Top_ServiceSection = ({page_data, testimonial,buisness_strategy}) => {
    const salePage = page_data.sale_page_detail;

return (
<section className="top_services_wrapper"
 style={{
    background: `url(${
      s3baseUrl + salePage.services_background_image
    }) no-repeat center`,
    backgroundSize: "cover",
   
  }}>
    <div className="container">
        <div className="client-card"
         style={{
            background: `url(${
              s3baseUrl + salePage.testimoniall_background_image
            }) no-repeat center`,
            
           
          }}>
            <div className="row justify-content-between">
                <div className="col-lg-5 text-center text-lg-start wow fadeInDown">
                    <h3>{salePage.testimonial_heading}</h3>
                </div>
                <div className="col-lg-6 text-center text-lg-start">
                    <div id="testimonial-carousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {testimonial.map((items, index) =>{
                                return(
                                    <>
                                       <div className={`carousel-item ${index===0? "active":""}` } data-bs-interval="2000">
                               <p>{items.description}</p>

                                <div
                                    className="d-flex justify-content-center justify-content-lg-start align-items-center pt-4">
                                    <div className="client-img">
                                        <img src={s3baseUrl+ items.images.thumbnail_1} alt="" className="img-fluid" />
                                        <div className="its-pos-img">
                                            <i className="fa-solid fa-quote-left"></i>
                                        </div>
                                    </div>
                                    <div className="testimonial-details ps-3">
                                        <span>{items.name}</span>
                                        <span className="attribute">{items.title} </span>
                                    </div>
                                </div>

                            </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-lg-8 text-center wow fadeInUp">
                <h2>{salePage.services_heading}</h2>
            </div>
        </div>

        <div className="row justify-content-center justify-content-lg-between text-center tech-main">
            {buisness_strategy.map((items,index) =>{
                return(
                    <>
                    <div className="col-md-4 col-lg-2 hover-effect wow slideInRight">
                <span className="elementor-icon"><img src={s3baseUrl+ items.images.thumbnail_1} alt="" className="img-fluid" /></span>
                <h3>{items.title}</h3>
                <div
                dangerouslySetInnerHTML={{
                    __html:items.description,
                }}
                ></div>
            </div>
                    </>
                );
            })}

        </div>
    </div>
</section>
);
}

export default Top_ServiceSection;