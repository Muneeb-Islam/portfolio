const BannerSection = () => {
return (
<section className="banner_wrapper" id="home">
    <div className="container">
        <div id="banner-carousel" className="carousel slide text-center text-lg-start" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="4000">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-5  banner-content">
                            <span
                                className="animate__animated animate__fadeInTopRight animate__bounce animate__delay-1s">
                                GROW YOUR BUSINESS</span>
                            <h1 className="animate__animated animate__fadeInLeft">From Idea to Products</h1>
                            <p className="animate__animated animate__fadeInLeft animate__bounce animate__delay-1s">
                                Vision aids in business growth and takes you from scratch to the heights of success.
                            </p>

                            <a href="#"
                                className="get-started animate__animated animate__fadeInUp animate__bounce animate__delay-1s">GET
                                STARTED <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                        <div
                            className="col-lg-5 pt-5 pt-lg-0 position-relative animate__animated animate__fadeInRight animate__bounce animate__delay-1s">
                            <img src="assets/banner-1.jpg" className="img-fluid" alt="..." />
                            <div className="pos-shape">
                                <img src="assets/bottom-triangle.png" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="carousel-item" data-bs-interval="4000">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-5  banner-content">
                            <span className="animate__animated animate__fadeInTopRight ">CREATE PERFECT WEBSITE</span>
                            <h1 className="animate__animated animate__fadeInLeft">Make Your Dream Website With Vision
                            </h1>
                            <p className="animate__animated animate__fadeInLeft animate__bounce animate__delay-1s">With
                                a custom web page and built-in web page, get the results that you have dreamed about.
                            </p>

                            <a href="#"
                                className="get-started animate__animated animate__fadeInUp animate__bounce animate__delay-1s">GET
                                STARTED <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                        <div className="col-lg-5 pt-5 pt-lg-0 animate__animated animate__fadeInRight">
                            <img src="assets/banner-2.png" className="img-fluid" alt="..." />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>
);
}

export default BannerSection;