const BannerSection = () => {
return (
  <section className="banner_wrapper" id="home">
        <div className="container-fluid pe-lg-0">
            <div id="banner-carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="4000">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-6  pt-5 pt-lg-0 banner-content text-center text-lg-start">
                                <span>GROW YOUR BUSINESS</span>
                                <h1>Aiding Your Business Growth</h1>
                                <p>Vision aids in business growth and takes you from scratch to the heights of success. </p>

                                <a href="#" className="get-started">GET STARTED <i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                            <div className="col-lg-5 pt-5 pt-lg-0 position-relative">
                                <img src="assets/banner-1.jpg" className="img-fluid" alt="..." />
                                <div className="pos-shape">
                                    <img src="assets/bottom-triangle.png" alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-6  pt-5 pt-lg-0 banner-content text-center text-lg-start">
                                <span>CREATE PERFECT WEBSITE</span>
                                <h1>Make Your Dream Website With Vision</h1>
                                <p>With a custom web page and built-in web page, get the results that you have dreamed about.</p>

                                <a href="#" className="get-started">GET STARTED <i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                            <div className="col-lg-5 pt-5 pt-lg-0">
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