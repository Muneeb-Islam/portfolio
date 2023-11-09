const BannerSection = () => {

return (
<section className="banner">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 order-2 order-lg-1 mt-5 mt-lg-0 wow slideInLeft">
        <img src="/assets/home-page/banner-logo.png" alt="" className="img-fluid" />
        <h1>Your Business, Our Expertise</h1>
        <p>At Vissioon, we are your all-in-one solution for membership management, business consulting, sales generation, and business growth. Our services aim to maximize your business's potential. Stay informed through our news feed and manage it all with our CRM/CMS platform.</p> <br />
        <p>Vissioon is your one-stop destination for membership management, business consulting, sales generation, and business growth solutions. Stay informed with our news feed and unlock your business's full potential with the power of our CRM/CMS platform. Explore our website and take the first step towards achieving your business goals. </p>
        <a href="#" class="btn-vision">BOOK A CALL</a>
      </div>
      <div className="col-lg-6 order-1 order-lg-2 wow slideInRight">
        <img src="/assets/home-page/banner-img.png" alt="" className="img-fluid" />
      </div>
    </div>
  </div>
</section>



);
}

export default BannerSection;