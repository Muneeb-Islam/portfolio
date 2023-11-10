const BannerSection = () => {

return (
<section className="banner">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 order-2 order-lg-1 mt-5 mt-lg-0 wow slideInLeft">
        <img src="/assets/home-page/banner-logo.png" alt="" className="img-fluid" />
        <h1>Our Solution, <br /> Your Success </h1>
        <p>At Vissioon, we are your all-in-one solution for membership management, business consulting, sales generation, and business growth. Our expertise aims to unlock your business's full potential. Stay informed through our Community  and manage it all with our CRM/CMS platform.</p>
        <a href="#contact_form_wrapper" class="btn-vision">BOOK A CALL</a>
      </div>
      <div className="col-lg-6 order-1 order-lg-2 wow slideInRight">
        <img src="/assets/home-page/bannerimg.png" alt="" className="img-fluid" />
      </div>
    </div>
  </div>
</section>



);
}

export default BannerSection;