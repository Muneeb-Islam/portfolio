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
<section className="slider_wrapper overflow-hidden pt-90" id="services">
  <div className="container">
    <div className="text-center wow slideInUp">
      <h2>Winning the Confidence of Our Loyal Clients</h2>
    </div>
    <Slider {...settings}>
      <div className="client-slider-card wow slideInLeft">
        <i className="fa-solid fa-quote-left"></i>
        <div className="para-content position-relative">
          <p>
            Vissioon’s comprehensive platform has truly transformed the way we operate. With its versatile features,
            we've streamlined our business operations, from managing memberships and delivering customer happiness to
            growing our business. The results speak for themselves, and Vissioon is now an integral part of our success
            story.
          </p>
          <div className="icon-pos">
            <i className="fa-solid fa-quote-right"></i>
          </div>
        </div>
        <div className="d-flex align-items-center info-position">
          <img src="/assets/home-page/img-2.png" alt="" className="img-fluid" />
          <div className="clients-naame wp-pl-10">
            <h3> Sarah Mille</h3>
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
            Vissioon simplifies everything, from membership management to boosting our business's growth. We're thrilled
            with the results, and we couldn't be happier with the level of support and customization offered.
          </p>
          <div className="icon-pos">
            <i className="fa-solid fa-quote-right"></i>
          </div>
        </div>
        <div className="d-flex align-items-center info-position">
          <img src="/assets/home-page/img-1.png" alt="" className="img-fluid" />
          <div className="clients-naame wp-pl-10">
            <h3>John David</h3>
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
            I was initially skeptical about using Vissioon, but it has far exceeded my expectations. This user-friendly
            platform has efficiently guided us in getting more visitors to our website and converting them into
            satisfied paying customers. It's like having a trusted partner in our journey to business success.
          </p>
          <div className="icon-pos">
            <i className="fa-solid fa-quote-right"></i>
          </div>
        </div>
        <div className="d-flex align-items-center info-position">
          <img src="/assets/home-page/img-3.png" alt="" className="img-fluid" />
          <div className="clients-naame wp-pl-10">
            <h3>Daniel Bennett</h3>
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
            Vissioon expertise in creating effective sales funnels has transformed our online sales game. With their
            guidance, we've managed to boost our sales and revenue like never before. It's like having a secret weapon
            in our sales arsenal, and we couldn't be more pleased with the results
          </p>
          <div className="icon-pos">
            <i className="fa-solid fa-quote-right"></i>
          </div>
        </div>
        <div className="d-flex align-items-center info-position">
          <img src="/assets/home-page/img-4.png" alt="" className="img-fluid" />
          <div className="clients-naame wp-pl-10">
            <h3>Maria Lewis</h3>
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