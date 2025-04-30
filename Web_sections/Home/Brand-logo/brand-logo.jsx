import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Brans_LogoSection = () => {
  var settings = {
    dots: false,
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

    <section className="hero_95 main_section wp-pt-65" data-_id="66bf8b86b711672becdea6a2" data-section_id="rgukwtzywr" data-section_title="Partners logo owl carousel with top and bottom border" data-section_name="66bf8b86b711672becdea6a2" id="rgukwtzywr" imgheight="104" imgwidth="1828" style={{ backgroundImage: "none" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="text-center col-12 col-lg-12" data-block-name="Block-1">
            <div className="wb-editor-block online-health-hero-main">
              <h2 style={{ lineHeight: "1.2" }}>
                <span
                  style={{
                    color: "rgb(27, 142, 61)",
                    fontSize: "1.375rem",
                    fontWeight: 600,
                  }}
                >
                  Partnered with 500+ respected companies
                </span>
              </h2>
            </div>
          </div>
        </div>

        <Slider {...settings} className="wp-pt-40">
          <div className="px-lg-5 d-flex align-items-center justify-content-center">
            <img src="https://builder-templates-bucket.s3.amazonaws.com/67d111d85570996769fd3f35/assets/shape-logo-1.svg" alt="" className="img-fluid" data-width="20" data-height="40" imgheight="243" imgwidth="1196" data-image_name="shape-logo-1.svg" />
          </div>
          <div className="px-lg-5 d-flex align-items-center justify-content-center">
            <img src="https://builder-templates-bucket.s3.amazonaws.com/67d111d85570996769fd3f35/assets/iconic-logo.svg" alt="" className="img-fluid" data-width="20" data-height="40" imgheight="243" imgwidth="2220" data-image_name="iconic-logo.svg" />
          </div>
          <div className="px-lg-5 d-flex align-items-center justify-content-center">
            <img src="https://builder-templates-bucket.s3.amazonaws.com/67d111d85570996769fd3f35/assets/shape-logo-2.svg" alt="" className="img-fluid" data-width="20" data-height="40" imgheight="243" imgwidth="1275" data-image_name="shape-logo-2.svg" />
          </div>
          <div className="px-lg-5 d-flex align-items-center justify-content-center">
            <img src="https://builder-templates-bucket.s3.amazonaws.com/67d111d85570996769fd3f35/assets/Visually-logo.svg" alt="" className="img-fluid" data-width="20" data-height="40" imgheight="243" imgwidth="1031" data-image_name="Visually-logo.svg" />
          </div>
          <div className="px-lg-5 d-flex align-items-center justify-content-center">
            <img src="https://builder-templates-bucket.s3.amazonaws.com/67d111d85570996769fd3f35/assets/Vectra-logo.svg" alt="" className="img-fluid" data-width="20" data-height="40" imgheight="243" imgwidth="1031" data-image_name="Vectra-logo.svg" />
          </div>

        </Slider>
      </div>
    </section>
  );
}

export default Brans_LogoSection;