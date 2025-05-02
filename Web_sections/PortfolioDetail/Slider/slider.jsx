import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const images = [
    { src: '/assets/app-img2.png', alt: 'Mobile App 1' },
    { src: '/assets/app-img3.png', alt: 'Mobile App 2' },
    { src: '/assets/app-img5.png', alt: 'Mobile App 3' }
];

// Custom arrows
// const NextArrow = (props) => (
//     <div className="custom-arrow next" onClick={props.onClick}>
//         ❯
//     </div>
// );

// const PrevArrow = (props) => (
//     <div className="custom-arrow prev" onClick={props.onClick}>
//         ❮
//     </div>
// );

const SliderSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '50px',
        // nextArrow: <NextArrow />,
        // prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false
                }
            },
            {
                breakpoint: 799,
                settings: {
                    slidesToShow: 1,
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
        <section className="portfolio_slider m-40">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Slider {...settings}>
                            {images.map((img, index) => (
                                <div
                                    key={index}
                                    className="px-lg-5 d-flex align-items-center justify-content-center"
                                >
                                    <img src={img.src} alt={img.alt} className="img-fluid" />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SliderSection;
