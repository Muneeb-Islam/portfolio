import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { s3baseUrl } from "@/config/config";

const TestimonialSection = ({ page_data, testimonial }) => {
  const salePage = page_data.page_detail;

  var settings = {
    dots: true,
    // infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1023,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 799,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      {testimonial && testimonial.length > 0 && (
        <section className="slider_wrapper overflow-hidden pt-90" id="services">
          <div className="container">
            <div className="text-center wow slideInUp">
              <h2>{salePage.testimonial_heading}</h2>
            </div>
            <Slider {...settings}>
              {testimonial?.map((items, index) => {
                return (
                  <div className="client-slider-card wow slideInLeft">
                    <i className="fa-solid fa-quote-left"></i>
                    <div className="para-content position-relative pb-4">
                      <p>{items.description}</p>
                      <div className="icon-pos">
                        <i className="fa-solid fa-quote-right"></i>
                      </div>
                    </div>
                    <div className="d-flex align-items-center info-position">
                      <img
                        src={s3baseUrl + items.images.thumbnail_1}
                        alt=""
                        className="img-fluid"
                      />
                      <div className="clients-naame wp-pl-10">
                        <h3>{items.title}</h3>
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
                );
              })}
            </Slider>
          </div>
        </section>
      )}
    </>
  );
};

export default TestimonialSection;
