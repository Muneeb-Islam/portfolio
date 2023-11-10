import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Brans_LogoSection = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerPadding:'50px',
    
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
return(
  <section className="brand_logos_wrapper">
    <div className="container">
        <Slider {...settings}>
                    <div className="px-lg-5 d-flex align-items-center">
                   <img src="/assets/home-page/logo-1.png" className="img-fluid" alt="" />
                    </div>
                    <div className="px-lg-5 d-flex align-items-center">
                    <img src="/assets/home-page/logo-2.png" className="img-fluid" alt="" />
                    </div>
                    <div className="px-lg-5 d-flex align-items-center">
                    <img src="/assets/home-page/logo-3.png" className="img-fluid" alt="" />
                    </div>
                    <div className="px-lg-5 d-flex align-items-center">
                    <img src="/assets/home-page/logo-4.png" className="img-fluid" alt="" />
                    </div>
                    <div className="px-lg-5 d-flex align-items-center">
                    <img src="/assets/home-page/logo-5.png" className="img-fluid" alt="" />
                    </div>
                   
                    </Slider>
    </div>
    </section>
  );
  }
  
  export default Brans_LogoSection;