import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { s3baseUrl } from "@/config/config";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", borderRadius: "10px" }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", borderRadius: "10px" }}
      onClick={onClick}
    />
  );
}



const ServiceSection = ({ page_data, comprehensive_services }) => {
  const salePage = page_data.sale_page_detail;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="services_wrapper overflow-hidden" id="services">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-lg-8 text-center wow fadeInUp"
            dangerouslySetInnerHTML={{
              __html: salePage.services_text,
            }}
          ></div>
        </div>

        <div id="service-slider" className=" pt-5 overflow-hidden">
          <Slider {...settings}>
            {comprehensive_services.map((items, index) => {
              return (
              
                  <div className=" px-2 position-relative img-div">
                    <img
                      src={s3baseUrl + items.program_images.thumbnail_1}
                      className="img-fluid w-100"
                      alt="..."
                    />

                    <div className="pos-content">
                      <img
                        src={s3baseUrl + items.icon_images.thumbnail_1}
                        alt=""
                        className="img-fluid"
                      />
                      <h3>{items.title}</h3>
                    </div>
                    <div className="overlay">
                      <img
                        src={s3baseUrl + items.icon_hover_images.thumbnail_1}
                        alt=""
                        className="img-fluid mb-3"
                      />
                      <h3>{items.title}</h3>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: items.short_description,
                        }}
                      ></div>
                    </div>
                  </div>
               
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;