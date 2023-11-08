const BannerSection = () => {

return (
<section className="banner">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 order-2 order-lg-1 mt-5 mt-lg-0 wow slideInLeft">
        <img src="/assets/home-page/logo-img.png" alt="" className="img-fluid" />
        <h1>Your Business, Our Expertise</h1>
        <p>At Vision, we are your all-in-one solution for membership management, business consulting, sales generation, and business growth. Our services aim to unlock your business's full potential. Stay informed through our news feed and manage it all with our CRM/CMS platform</p>
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