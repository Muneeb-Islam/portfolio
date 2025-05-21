

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechCorp',
    image: '/assets/saasify-avatar-01.svg',
    quote: 'Byte Pulse transformed our digital presence with their innovative solutions.',
  },
  {
    name: 'Michael Lee',
    role: 'CTO at InnovateX',
    image: '/assets/saasify-avatar-02.svg',
    quote: 'Their team delivered exceptional results, exceeding our expectations.',
  },
  {
    name: 'Emily Davis',
    role: 'Product Manager at Creatify',
    image: '/assets/saasify-avatar-04.svg',
    quote: 'Working with Byte Pulse was a seamless and rewarding experience.',
  },
];

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 800,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: true,
  customPaging: (i) => (
    <div className="customDots">
      <Image
        src={testimonials[i].image}
        alt={testimonials[i].name}
        width={50}
        height={50}
        className="dotImage"
      />
    </div>
  ),
  dotsClass: 'slick-dots customDots'
};

const TestimonialSlider = () => (
<section className="testimonialSection mb-80" id='testimonial'>
  <div className="container">
    <h2>
      What Our <span className="font-style">Clients Say</span>
    </h2>
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial-slide pt-4 pb-1">
          <div className="testimonial-card">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              width={80}
              height={80}
              className="avatar"
            />
            <p>{testimonial.quote}</p>
            <h3>{testimonial.name}</h3>
            <p className='mt-0'>{testimonial.role}</p>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</section>

);

export default TestimonialSlider;
