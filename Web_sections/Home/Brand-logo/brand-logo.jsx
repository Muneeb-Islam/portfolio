import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Brans_LogoSection = () => {
  var settings = {
    dots: false,
      arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: '50px',

    responsive: [{
      breakpoint: 1023,
      settings: {
        arrows: false
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false
      }
    },
    {
      breakpoint: 799,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
        arrows: false
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        arrows: false
      }
    }
    ]
  };
  return (

    <section className="brand_logo_wrapper bg-light-blue pt-60 pb-60 mt-80" id="rgukwtzywr">
      <div className="container">
        <div className="row justify-content-center">
          <div className="text-center col-12 col-lg-12">
              <h3>
                  Partnered with 500+ respected companies
              </h3>
          </div>
        </div>

        <Slider {...settings} className="pt-5">
          <div className="px-lg-5 d-flex align-items-center justify-content-center">
            <img src="https://builder-templates-bucket.s3.amazonaws.com/67d111d85570996769fd3f35/assets/shape-logo-1.svg" alt="compnany logo 1" className="img-fluid" />
          </div>
          <div className="px-lg-5 d-flex align-items-center justify-content-center">
            <img src="https://builder-templates-bucket.s3.amazonaws.com/67d111d85570996769fd3f35/assets/iconic-logo.svg" alt="compnany logo 2" className="img-fluid" />
          </div>
          <div className="px-lg-5 d-flex align-items-center justify-content-center">
            <img src="https://builder-templates-bucket.s3.amazonaws.com/67d111d85570996769fd3f35/assets/shape-logo-2.svg" alt="compnany logo 3" className="img-fluid" />
          </div>
          <div className="px-lg-5 d-flex align-items-center justify-content-center">
            <img src="https://builder-templates-bucket.s3.amazonaws.com/67d111d85570996769fd3f35/assets/Visually-logo.svg" alt="compnany logo 4" className="img-fluid"/>
          </div>
          <div className="px-lg-5 d-flex align-items-center justify-content-center">
            <img src="https://builder-templates-bucket.s3.amazonaws.com/67d111d85570996769fd3f35/assets/Vectra-logo.svg" alt="compnany logo 5" className="img-fluid" />
          </div>

        </Slider>
      </div>
    </section>
  );
}

export default Brans_LogoSection;