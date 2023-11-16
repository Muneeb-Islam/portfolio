const BannerSection = () => {

return (
<section className="banner">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 order-2 order-lg-1 mt-5 mt-lg-0 wow slideInLeft text-center text-lg-start">
        <img src="/assets/home-page/ban-logo.png" alt="" className="img-fluid" />
        <h1>Let Us Guide You on Your Journey to Success </h1>
        <p>Vision is your one-stop destination for managing memberships, expert consultations, and accelerating growth. Our platform is designed for simplicity, ensuring your journey to success is smooth and efficient. Stay in the loop with our Community and easily manage everything through our CRM/CMS platform. </p>
        <a href="#contact_form_wrapper" class="btn-vision">BOOK A CALL</a>
      </div>
      <div className="col-lg-6 order-1 order-lg-2 wow slideInRight">
        <img src="/assets/home-page/ban-img.png" alt="" className="img-fluid" />
      </div>
    </div>
  </div>
</section>



);
}

export default BannerSection;