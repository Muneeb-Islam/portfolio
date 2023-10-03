const Footer = () => {
  return ( 
    <section className="footer_wrapper">
    <div className="container-fluid">
        <div className="row justify-content-center px-lg-4">
            <div className="col-lg-3  main-para text-center text-lg-start">
                <a href="#home"><img src="assets/vision-white.png" alt="" className="img-fluid" /></a>
                <p>Vision is your go-to platform for creating a website for your next big project. From coaching to the LMS website, we offer pre-built templates for your ease. </p>
            </div>
            <div className="col-lg-5 pt-4 pt-lg-0 links-list text-center text-lg-start">
                <h3>Quick Links</h3>
               <div className="d-flex justify-content-center justify-content-lg-start pt-3">
                <ul className="list-unstyled mb-0 footer-links">
                    <li><a href="#home">Go To Home</a></li>
                    <li><a href="#about_wrapper">About Company</a></li>
                </ul>
                <ul className="list-unstyled justify-content-center justify-content-lg-start mb-0 footer-links">
                    <li><a href="#why_us">Why Choose Us</a></li>
                    <li><a href="#contact_form_wrapper">Contact</a></li>
                </ul>
               </div>
            </div>
            <div className="col-10 col-lg-4 pt-4 pt-lg-0 news-letter text-center text-lg-start">
                <h3>News Letter</h3>
                <p>Sign up today for hints, tips and the latest product news</p>
                <div className="d-flex position-relative mt-4">
                    <input type="email" className="form-control" name="email" placeholder="Your Email*" required="" />
                   <button type="submit" className="btn_subscribe"><i className="fa-regular fa-paper-plane"></i></button>
                 </div>
            </div>
        </div>

        <div className="row justify-content-between align-items-center bottom-footer px-lg-4">
            <div className="col-lg-4 text-center text-lg-start">
                <p>Copyright © 2023 <span>vission.</span> All Rights Reserved.</p>
            </div>
            <div className="col-lg-4 pt-4 pt-lg-0">
                <ul className="list-unstyled d-flex justify-content-center justify-content-lg-end">
                    <li><a href="#about_wrapper">About Us</a></li>
                    <li className="ms-4"><a href="#contact_form_wrapper">Contact Us</a></li>
                </ul>
            </div>
        </div>
    </div>
</section>
   );
}
 
export default Footer;