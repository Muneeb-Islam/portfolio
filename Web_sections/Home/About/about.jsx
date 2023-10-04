
const AboutSection = () => {
  return (
    <section className="about_wrapper" id="about_wrapper">
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 pe-lg-5 text-center text-lg-start">
                    <img src="assets/about.jpg" alt="" className="img-fluid" />
                </div>

                <div className="col-lg-6 text-center text-lg-start pt-5 pt-lg-0 pe-lg-4">
                    <h2>Empowering You Through Business Consulting</h2>
                    <p>Our business consulting web templates are designed to elevate your business to new heights of success. We take pride in providing the best results. </p>

                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="about-card h-100 d-flex justify-content-center">
                                <i className="fa-solid fa-file-circle-check"></i>
                                <div className="about-content">
                                    <h3>Experience</h3>
                                    <p>Our great team of more than 1400 software experts.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pt-4 pt-md-0">
                            <div className="about-card h-100 d-flex justify-content-center">
                                <i className="fa-solid fa-file-export"></i>
                                <div className="about-content">
                                    <h3>Quick Support</h3>
                                    <p>We'll help you test bold new ideas while sharing your.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p>Vision is your one-stop platform for creating websites for coaching, LMS, and more with pre-built templates.</p>
                    <a href="#" className="read-more">READ MORE <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </section>
  );
  }
  
  export default AboutSection;