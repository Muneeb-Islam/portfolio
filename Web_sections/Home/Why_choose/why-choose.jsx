
const Why_chooseSection = () => {
  return (
    <section className="choose-us ">
    <div className="container-fluid">
      <div className="row justify-content-center text-center">
        <div className="col-lg-7">
          <span>WHY CHOOSE US</span>
          <h2>How Ghy Help of Your Business Grow And Successful</h2>
        </div>
      </div>
      <div className="row mt-50 text-center">
        <div className="col-md-6 col-lg-3 position-relative mb-50">
          <div className="choose-card">
            <div className="elementor-icon-box-icon"> <span className="elementor-icon"> <img src="/assets/email-marketing.png"
                  className="img-fluid" alt=""  /> </span></div>
            <h3>Email Campaigns</h3>
            <br />
            <p>Instead of working hard and generating long coats, use our pre-built website templates that support email campaigns. Inform all your users with just one click using Email cub. .</p>

          </div>
        </div>
        <div className="col-md-6 col-lg-3 position-relative mb-50">
          <div className="choose-card">
            <div className="elementor-icon-box-icon"> <span className="elementor-icon"> <img src="/assets/crm.png"
                  className="img-fluid" alt=""  /> </span></div>
            <h3>CRM Solutions</h3>
            <br />
            <p>Streamline customer interactions and enhance efficiency in managing client data. We customize CRM systems to align with your unique business processes and objectives.</p>

          </div>
        </div>
        <div className="col-md-6 col-lg-3 position-relative mb-50">
          <div className="choose-card">
            <div className="elementor-icon-box-icon"> <span className="elementor-icon"> <img src="/assets/cms.png"
                  className="img-fluid" alt=""  /> </span></div>
            <h3>CMS Solutions</h3>
            <br />
            <p>Easily update and maintain your website's content without the need for technical expertise. Our CMS is designed for users of all skill levels, from beginners to experts.</p>

          </div>
        </div>
        <div className="col-md-6 col-lg-3 position-relative mb-50">
          <div className="choose-card">
            <div className="elementor-icon-box-icon"> <span className="elementor-icon"> <img src="/assets/calendar.png"
                  className="img-fluid" alt=""  /> </span></div>
            <h3>Calendar Management</h3>
            <br />
            <p>Manage appointments, bookings, and client meetings seamlessly. Reclaim control of your schedule, reduce stress, and enhance your productivity with our Calendar Management. </p>

          </div>
        </div>
   
      </div>
      <div className="row align-items-center justify-content-center back-img">
      <div className="col-11 col-lg-10">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-4 col-lg-4">
            <a href="" data-bs-toggle="modal" data-bs-target="#myModal">
              <div className="video-icon"> <img src="/assets/play.png" className="img-fluid" alt=""  /> </div>
            </a>
          </div>
          <div className="col-md-8 col-lg-6 text-center text-md-start">
            <h2>
              Agency Excited With Our Solutions</h2>
            <div className="chhose-btn">
              <a href="" className="read-btn">READ MORE <i className="fa-solid fa-arrow-right ms-1"></i></a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div className="modal fade mt-5 pt-5" id="myModal" data-bs-backdrop="static"
      aria-labelledby="exampleModalLabel" data-bs-focus="false" aria-hidden="true">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <button name="myModal" type="button" className="btn-close video-player-stop-event" data-bs-dismiss="modal"
              aria-label="Close">
            </button>
            <div className="ratio ratio-16x9 wb-iframe">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/inpok4MKVLM"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
  }
  
  export default Why_chooseSection;