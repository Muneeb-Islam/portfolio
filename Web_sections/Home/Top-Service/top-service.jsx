import React from 'react'
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null


export default class Top_ServiceSection extends React.Component {
componentDidMount() {
new WOW().init()
}
render(){
return (
<section className="top_services_wrapper">
    <div className="container">
        <div className="client-card">
            <div className="row justify-content-between">
                <div className="col-lg-5 text-center text-lg-start wow fadeInDown">
                    <h3>Won The Trust Of Over 1500 Clients</h3>
                </div>
                <div className="col-lg-6 text-center text-lg-start">
                    <div id="testimonial-carousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="4000">
                                <p>“The user-friendly templates from the Vision have helped me a lot in creating my
                                    dream website”</p>

                                <div
                                    className="d-flex justify-content-center justify-content-lg-start align-items-center pt-4">
                                    <div className="client-img">
                                        <img src="/assets/client-img.jpg" alt="" className="img-fluid" />
                                        <div className="its-pos-img">
                                            <i className="fa-solid fa-quote-left"></i>
                                        </div>
                                    </div>
                                    <div className="testimonial-details ps-3">
                                        <span>John Smith</span>
                                        <span className="attribute">A leading Company</span>
                                    </div>
                                </div>

                            </div>
                            <div className="carousel-item" data-bs-interval="4000">
                                <p>“I love how I get the calendar management within my coaching website. It has made it
                                    easy for me to organize my events.”</p>

                                <div
                                    className="d-flex justify-content-center justify-content-lg-start align-items-center pt-4">
                                    <div className="client-img">
                                        <img src="/assets/client-img.jpg" alt="" className="img-fluid" />
                                        <div className="its-pos-img">
                                            <i className="fa-solid fa-quote-left"></i>
                                        </div>
                                    </div>
                                    <div className="testimonial-details ps-3">
                                        <span>John Smith</span>
                                        <span className="attribute">A leading Company</span>
                                    </div>
                                </div>

                            </div>

                            <div className="carousel-item" data-bs-interval="2000">
                                <p>“Being someone with no knowledge of coding or website creation, the templates from
                                    Vision helped me a great deal in creating my dream webpage."</p>

                                <div
                                    className="d-flex justify-content-center justify-content-lg-start align-items-center pt-4">
                                    <div className="client-img">
                                        <img src="/assets/client-img.jpg" alt="" className="img-fluid" />
                                        <div className="its-pos-img">
                                            <i className="fa-solid fa-quote-left"></i>
                                        </div>
                                    </div>
                                    <div className="testimonial-details ps-3">
                                        <span>John Smith</span>
                                        <span className="attribute">A leading Company</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-lg-8 text-center wow fadeInUp">
                <h2>Our Top Notch Services To Help You Built Perfect Website</h2>
            </div>
        </div>

        <div className="row justify-content-center justify-content-lg-between text-center tech-main">
            <div className="col-md-4 col-lg-2 hover-effect wow slideInLeft">
                <span className="elementor-icon"><img src="/assets/h-p.png" alt="" className="img-fluid" /></span>
                <h3>Community Building</h3>
                <p>Create and manage online communities and forums to facilitate discussions and networking. </p>
            </div>
            <div className="col-md-4 col-lg-2 pt-5 p-md-0 hover-effect wow slideInUp">
                <span className="elementor-icon"> <img src="/assets/crm.png" alt="" className="img-fluid" /></span>
                <h3>Program Drip System</h3>
                <p>No need for a third party to send and receive mail when you can get a program drip system that
                    simplifies campaign management.</p>
            </div>
            <div className="col-md-4 col-lg-2 pt-5 pt-md-0 hover-effect wow slideInDown">
                <span className="elementor-icon"><img src="/assets/menu.png" alt="" className="img-fluid" /></span>
                <h3>Payment Processing</h3>
                <p>Accept payments in-store and online with ease, improving the checkout experience.</p>
            </div>
            <div className="col-md-4 col-lg-2 pt-5 pt-lg-0 hover-effect wow slideInUp">
                <span className="elementor-icon"><img src="/assets/customer-support.png" alt=""
                        className="img-fluid" /></span>
                <h3>Customer Support</h3>
                <p>Let your users report all their issues directly to you with our customer support tickets.</p>
            </div>
            <div className="col-md-4 col-lg-2 pt-5 pt-lg-0 hover-effect wow slideInRight">
                <span className="elementor-icon"><img src="/assets/hand.png" alt="" className="img-fluid" /></span>
                <h3>Cyber Security</h3>
                <p>We understand the need for a secure website and therefore provide a safe and secure place for you and
                    your users. </p>
            </div>
        </div>
    </div>
</section>
)
}
}