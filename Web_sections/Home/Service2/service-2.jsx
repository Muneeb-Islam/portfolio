import { s3baseUrl } from "@/config/config";

const Services = ({page_data, website_program}) => {
  const salePage = page_data.sale_page_detail;
return (

<section className="services pt-90 text-center" id="why_us">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-9 wow slideInUp"
      dangerouslySetInnerHTML={{
        __html:salePage.why_choose_us_text,
      }}>
      </div>
    </div>
    <div className="row justify-content-center">
      {website_program.map((itmes, index) =>{
        return(
          <div className="col-6 col-md-3 col-lg-2 pt-5 wow slideInLeft">
          <div className="service-card">
            <img src={s3baseUrl+ itmes.program_images.thumbnail_1} className="img-fluid" alt="" />
            <h3>{itmes.title}</h3>
          </div>
        </div>
        )
      })}
     
    </div>
  </div>
</section>
);
}

export default Services;