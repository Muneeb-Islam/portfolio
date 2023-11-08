const BannerSection = () => {

return (
<section className="banner">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 order-2 order-lg-1 mt-5 mt-lg-0 wow slideInLeft">
        <img src="/assets/home-page/logo-img.png" alt="" className="img-fluid" />
        <h1>Now everyone’s an Einstein.</h1>
        <p>Customer 360, our entire portfolio of products, helps you connect with your customers in a whole new way. Now
          everyone — your marketing, sales, commerce, service, IT, and data teams — can work smarter and be more
          productive with connected data, trusted AI, and the #1 AI CRM.</p>
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