import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const TestimonialSection = () => {
  var settings = {
      dots: true,
      // infinite: true,
      autoplay: false,
      autoplaySpeed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
  
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
    <section className="slider_wrapper overflow-hidden" id="services">
      <div className="container">
        <div className="text-center wow slideInUp">
        <h2>People Say About Us</h2>
        </div>
        <Slider {...settings}>
          <div className="client-slider-card wow slideInLeft">
              <i className="fa-solid fa-quote-left"></i>
              <div className="para-content position-relative">
                <p>
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cumque sunt, molestias et provident quidem hic assumenda neque ut atque similique quia, labore vero magnam accusamus rem ab, veritatis ratione delectus pariatur quos. Aspernatur possimus in reprehenderit esse sapiente sunt?
                </p>
                <div className="icon-pos">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
              </div>
              <div className="d-flex align-items-center info-position">
                <img
                  src="/assets/home-page/img-1.png"
                  alt=""
                  className="img-fluid"
                />
                <div className="clients-naame wp-pl-10">
                  <h3>Will Smith</h3>
                  <ul className="list-unstyled mb-0 star-rating d-flex justify-content-center justify-content-lg-start">
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="client-slider-card wow slideInUp">
              <i className="fa-solid fa-quote-left"></i>
              <div className="para-content position-relative">
                <p>
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cumque sunt, molestias et provident quidem hic assumenda neque ut atque similique quia, labore vero magnam accusamus rem ab, veritatis ratione delectus pariatur quos. Aspernatur possimus in reprehenderit esse sapiente sunt?
                </p>
                <div className="icon-pos">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
              </div>
              <div className="d-flex align-items-center info-position">
                <img
                  src="/assets/home-page/img-2.png"
                  alt=""
                  className="img-fluid"
                />
                <div className="clients-naame wp-pl-10">
                  <h3>Will Smith</h3>
                  <ul className="list-unstyled mb-0 star-rating d-flex justify-content-center justify-content-lg-start">
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="client-slider-card wow slideInRight">
              <i className="fa-solid fa-quote-left"></i>
              <div className="para-content position-relative">
                <p>
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cumque sunt, molestias et provident quidem hic assumenda neque ut atque similique quia, labore vero magnam accusamus rem ab, veritatis ratione delectus pariatur quos. Aspernatur possimus in reprehenderit esse sapiente sunt?
                </p>
                <div className="icon-pos">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
              </div>
              <div className="d-flex align-items-center info-position">
                <img
                  src="/assets/home-page/img-3.png"
                  alt=""
                  className="img-fluid"
                />
                <div className="clients-naame wp-pl-10">
                  <h3>Will Smith</h3>
                  <ul className="list-unstyled mb-0 star-rating d-flex justify-content-center justify-content-lg-start">
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="client-slider-card wow slideInUp">
              <i className="fa-solid fa-quote-left"></i>
              <div className="para-content position-relative">
                <p>
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cumque sunt, molestias et provident quidem hic assumenda neque ut atque similique quia, labore vero magnam accusamus rem ab, veritatis ratione delectus pariatur quos. Aspernatur possimus in reprehenderit esse sapiente sunt?
                </p>
                <div className="icon-pos">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
              </div>
              <div className="d-flex align-items-center info-position">
                <img
                  src="/assets/home-page/img-1.png"
                  alt=""
                  className="img-fluid"
                />
                <div className="clients-naame wp-pl-10">
                  <h3>Will Smith</h3>
                  <ul className="list-unstyled mb-0 star-rating d-flex justify-content-center justify-content-lg-start">
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
         
        
          </Slider>
      </div>
    </section>
  );
};

export default TestimonialSection;
