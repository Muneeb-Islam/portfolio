import { s3baseUrl } from "@/config/config";

const BannerSection = ({page_data, slider}) => {
const salePage = page_data.sale_page_detail;

console.log(salePage, "--salePage")
return (
<section className="banner">
  <div className="container">
  {slider.map((items, index) =>{
        return(
    <div className="row align-items-center">

          <div className="col-lg-6 order-2 order-lg-1 mt-5 mt-lg-0 wow slideInLeft text-center text-lg-start">
          {/* <img src={s3baseUrl+salePage.banner_title_image} alt="" className="img-fluid" /> */}
          <h1>{items.title}</h1>
          <div
          dangerouslySetInnerHTML={{
            __html:items.detail_description,
          }}></div>

          <a href={salePage.banner_button_link} class="btn-vision">{salePage.banner_button_text}</a>
        </div>
     
   

      <div className="col-lg-6 order-1 order-lg-2 wow slideInRight">
        <img src={s3baseUrl+ items.images.thumbnail_1} alt="" className="img-fluid" />
      </div>
    </div>
    );
  })}
  </div>
</section>



);
}

export default BannerSection;