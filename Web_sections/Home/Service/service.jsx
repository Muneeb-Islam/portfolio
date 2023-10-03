import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#7A88C2", borderRadius:"10px"}}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#7A88C2", borderRadius:"10px" }}
      onClick={onClick}
    />
  );
}
const ServiceSection = () => {
var settings = {
dots: true,
infinite: true,
speed: 500,
slidesToShow: 3,
slidesToScroll: 1,
      autoplay: true,
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
      dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 2
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]
};
return (
<section className="services_wrapper overflow-hidden">
  <div className="container-fluid">
    <div className="row justify-content-between align-s-center">
      <div className="col-lg-6 ps-lg-4 text-center text-lg-start">
        <span>OUR SERVICES</span>
        <h2>Explore Our Comprehensive Range Of IT Services</h2>
      </div>
      <div className="col-lg-5 text-center text-lg-start">
        <p>At Vision, we take pride in offering a diverse range of IT services designed to meet your unique needs.
          Whether you are a small business or a large enterprise, we have the expertise and solutions to make your
          digital presence stand out and improve your operations.</p>

      </div>
    </div>

    <div id="service-slider" className=" pt-5">
      <Slider {...settings}>
        <div className=" px-2 position-relative img-div">
          <img src="/assets/life-coaching.png" className="img-fluid" alt="..." />

          <div className="pos-content">
            <img src="/assets/coaching.png" alt="" className="img-fluid" />
            <h3>Life Coaching</h3>
          </div>
          <div className="overlay">
            <img src="/assets/coaching (1).png" alt="" className="img-fluid mb-3" />
            <h3>Life Coaching</h3>
            <p>Whether you're seeking guidance in a specific area of your life or looking for a holistic transformation,
              we're here to support you every step of the way.</p>
          </div>
        </div>
        <div className=" px-2 position-relative img-div">
          <img src="/assets/6.png" className="img-fluid" alt="..." />
          <div className="pos-content">
            <img src="/assets/consulting.png" alt="" className="img-fluid" />
            <h3>Business Consulting</h3>
          </div>
          <div className="overlay">
            <img src="/assets/consulting (1).png" alt="" className="img-fluid mb-3" />
            <h3>Business Consulting</h3>
            <p>Explore how our consulting services can drive meaningful change and propel your business to new heights.
            </p>
          </div>
        </div>
        <div className=" px-2 position-relative img-div">
          <img src="/assets/hair-beauty.png" className="img-fluid" alt="..." />
          <div className="pos-content">
            <img src="/assets/women.png" alt="" className="img-fluid" />
            <h3>Hair And Beauty</h3>
          </div>
          <div className="overlay">
            <img src="/assets/women (1).png" alt="" className="img-fluid mb-3" />
            <h3>Hair And Beauty</h3>
            <p>Book an appointment or organize your workflow. Let your business flourish with Vision. </p>
          </div>
        </div>
        <div className=" px-2 position-relative img-div">
          <img src="/assets/fitness.png" className="img-fluid" alt="..." />
          <div className="pos-content">
            <img src="/assets/weights.png" alt="" className="img-fluid" />
            <h3>Fitness</h3>
          </div>
          <div className="overlay">
            <img src="/assets/weights (1).png" alt="" className="img-fluid mb-3" />
            <h3>Fitness</h3>
            <p>Get yourself an easy-to-use and user-friendly template that fits perfectly to your need for a fitness
              page. </p>
          </div>
        </div>
        <div className=" px-2 position-relative img-div">
          <img src="/assets/Health.png" className="img-fluid" alt="..." />
          <div className="pos-content">
            <img src="/assets/healthcare.png" alt="" className="img-fluid" />
            <h3>Health</h3>
          </div>
          <div className="overlay">
            <img src="/assets/healthcare-1.png" alt="" className="img-fluid mb-3" />
            <h3>Health</h3>
            <p>Whether choose the old template or create your own, we support health webpages and therefore deliver
              perfection. </p>
          </div>
        </div>
        <div className=" px-2 position-relative img-div">
          <img src="/assets/education.png" className="img-fluid" alt="..." />
          <div className="pos-content">
            <img src="/assets/school.png" alt="" className="img-fluid" />
            <h3>Education</h3>
          </div>
          <div className="overlay">
            <img src="/assets/school (1).png" alt="" className="img-fluid mb-3" />
            <h3>Education</h3>
            <p>By understanding the needs of an educational webpage, we have web pages that only need for you to drag
              and drop your data. </p>
          </div>
        </div>
      </Slider>
    </div>
  </div>
</section>
);
}

export default ServiceSection;