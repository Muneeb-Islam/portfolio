
const ContactSection = () => {

return (
<section className="contact_form_wrapper" id="contact_form_wrapper">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
                <span>CONTACT US</span>
                <h2>We Always Here To Helps You</h2>
            </div>
        </div>

        <div className="row justify-content-center align-items-center mx-3 mt-5 contact-card">
            <div className="col-lg-5 ps-lg-0">
                <img src="/assets/form-img.jpg" alt="" className="img-fluid" />
            </div>

            <div className="col-lg-7 ps-lg-5">
                <form>
                    <div className="row">
                        <div className="col-lg-6">
                            <input type="email" className="form-control" placeholder="Your Name *" required />
                        </div>
                        <div className="col-lg-6">
                            <input type="phone" className="form-control" placeholder="Phone Number *" required />
                        </div>
                        <div className="col-lg-6">
                            <input type="email" className="form-control" placeholder="Email Address *" required />
                        </div>
                        <div className="col-lg-6">
                            <input type="text" className="form-control" placeholder="Subject"  />
                        </div>

                        <div className="col-12">
                            <textarea type="message" className="form-control" cols="30" rows="4" placeholder="Message *" required></textarea>
                        </div>

                        <div className="col-lg-6 pt-4">
                            <button className="send-message w-100">SEND MESSAGE <i className="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                   
                  </form>
            </div>
        </div>
    </div>
</section>
);
}

export default ContactSection;