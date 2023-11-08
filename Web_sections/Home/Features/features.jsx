const FeaturesSection = () => {

return (
<section className="features-wrapper pt-80">
  <div className="container">
    <div className="row justify-content-center text-center">
      <div className="col-lg-7 wow slideInUp">
        <h2>Create Your Own Views</h2>
        <p>From identifying new opportunities to delivering customer happiness</p>
      </div>
    </div>
    <div className="row justify-content-center pt-5">
      <div className="col-xl-11">
        <div className="nav nav-pills d-flex justify-content-center">
          <button className="nav-link ps-0 active" data-bs-toggle="pill" data-bs-target="#first_G_U_ID" type="button">
            Marketing Software
          </button>
          <button className="nav-link mt-4 mt-md-0" data-bs-toggle="pill" data-bs-target="#second_G_U_ID" type="button">
            Free CRM Features
          </button>
          <button className="nav-link  mt-4 mt-md-0" data-bs-toggle="pill" data-bs-target="#third_G_U_ID" type="button">
            Sales Software
          </button>
          <button className="nav-link pe-0  mt-5 mt-lg-0" data-bs-toggle="pill" data-bs-target="#fourth_G_U_ID"
            type="button">
            Help Desk Software
          </button>

        </div>
      </div>
    </div>

    <div className="tab-content pt-80">
      <div className="tab-pane active" id="first_G_U_ID">
        <div className="row">
          <div className="col-lg-6 wow slideInLeft">
            <h2>Market Your Business Like the World’s Best Companies</h2>
            <p>With our comprehensive set of Marketing tools, including Email Marketing, Marketing Automation, Email
              Template Builder, Landing Page Builder, Lead Generation tools, Social Suite & more, your marketing team
              can take things to the next level.</p>
            <h3>POPULAR MARKETING FEATURES</h3>
            <ul className="list-unstyled">
              <li>Email Marketing</li>
              <li>Marketing Automation</li>
              <li>Lead Generation tools</li>
              <li>Landing Pages</li>
            </ul>
            <a href="#" className="white-btn-with-arrow">Explore Marketing Software <i
                className="fa-solid fa-arrow-right ms-2 ms-lg-5"></i></a>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0 wow slideInRight">
            <img src="/assets/home-page/1.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>

      <div className="tab-pane" id="second_G_U_ID">
        <div className="row">
          <div className="col-lg-6 wow slideInLeft">
            <h2>Build Lasting Customer Relationships</h2>
            <p>Along with a full stack of software for marketing, sales, and customer service, EngageBay also offers a
              completely free CRM at its core. While they’re powerful when used individually, they are at their best
              when used together.</p>
            <h3>POPULAR FEATURES</h3>
            <ul className="list-unstyled">
              <li>Contact Management</li>
              <li>Tasks</li>
              <li>Deal Pipeline</li>
              <li>Appointment Scheduling</li>
            </ul>
            <a href="#" className="white-btn-with-arrow">Explore Free CRM Features <i
                className="fa-solid fa-arrow-right ms-2 ms-lg-5"></i></a>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0 wow slideInRight">
            <img src="/assets/home-page/2.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
      <div className="tab-pane" id="third_G_U_ID">
        <div className="row">
          <div className="col-lg-6 wow slideInLeft">
            <h2>Sell Like the Pros</h2>
            <p>With our exhaustive set of Sales tools such as Contact Management, Email Tracking, Telephony, Appointment
              Scheduling, Project Management, Gamification.</p>
            <h3>POPULAR SALES AUTOMATION FEATURES</h3>
            <ul className="list-unstyled">
              <li>Telephony</li>
              <li>Sales Automation</li>
              <li>Multiple Deal Pipelines</li>
              <li>Email Sequences</li>
            </ul>
            <a href="#" className="white-btn-with-arrow">Explore Sales Software <i
                className="fa-solid fa-arrow-right ms-2 ms-lg-5"></i></a>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0 wow slideInRight">
            <img src="/assets/home-page/4.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
      <div className="tab-pane" id="fourth_G_U_ID">
        <div className="row">
          <div className="col-lg-6 wow slideInLeft">
            <h2>Provide Awesome Support to Your Customers</h2>
            <p>With our seamless stack of Service tools such as Ticketing, Helpdesk, Customer Feedback Forms, Knowledge
              Base, Canned Responses and your support team can now connect better, resolve faster, and retain your
              customers for a lifetime.</p>
            <h3>POPULAR TICKETING FEATURES</h3>
            <ul className="list-unstyled">
              <li>Multiple Ticketing Groups</li>
              <li>Macros</li>
              <li>Ticket Views</li>
              <li>Help Desk Automation</li>
            </ul>
            <a href="#" className="white-btn-with-arrow">Explore Help Desk Software <i
                className="fa-solid fa-arrow-right ms-2 ms-lg-5"></i></a>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0 wow slideInRight">
            <img src="/assets/home-page/3.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>

</section>



);
}

export default FeaturesSection;