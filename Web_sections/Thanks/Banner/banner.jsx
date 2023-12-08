import { s3baseUrl } from "@/config/config";

const BannerSection = () => {


return (
<section className="thanks_wrapper main_section">
  <div className="container">
    <div className="row justify-content-center text-center">
      <div className="col-lg-11 card-outer-area">
        <div className="lawyer-thankyou position-relative">
          <div className="card-inner">
            <h1>THANK YOU</h1>
            <h3>- For your Purchase -</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, venenatis dictum et nec. Fringilla
              dictum tristique cras pellentesque morbi consequat, maecenas egestas a. Mi feugiat urna turpis placerat
              faucibus bibendum hac vulputate. </p>
            <div className="lawyer-home-btn">
              <a href="/">Go To Home</a>
            </div>
          </div>
          <div className=" position-div">
            <ul className="d-flex justify-content-center list-unstyled lawyer-socials">
              <li><a href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a></li>
              <li><a href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></a></li>
              <li><a href="https://github.com/"><i className="fa-brands fa-github"></i></a></li>
              <li><a href="https://pk.linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></a></li>
            </ul>
            <div className="d-flex justify-content-center align-items-baseline copyright-icon">
              <i className="fa-regular fa-copyright"></i>
              <div className="lawyer-thankyou-copyright">
                <p>2077 Untitled Lawyer. All rights reserved.</p>
              </div>
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