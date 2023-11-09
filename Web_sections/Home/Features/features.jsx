const FeaturesSection = () => {

return (
<section className="features-wrapper pt-80">
  <div className="container">
    <div className="row justify-content-center text-center">
      <div className="col-lg-7 wow slideInUp">
        <h2>Explore Our Tech Services</h2>
        <p>Dive into a world of possibilities with Vissioon’s services.</p>
      </div>
    </div>
    <div className="row justify-content-center pt-5">
      <div className="nav nav-pills d-flex justify-content-center">
        <button className="nav-link  active" data-bs-toggle="pill" data-bs-target="#first_G_U_ID" type="button">
          Funnel & Pages
        </button>
        <button className="nav-link mt-4 mt-md-0" data-bs-toggle="pill" data-bs-target="#second_G_U_ID" type="button">
          Membership & Mentorship
        </button>
        <button className="nav-link  mt-4 mt-md-0" data-bs-toggle="pill" data-bs-target="#third_G_U_ID" type="button">
          Sales Software
        </button>
        <button className="nav-link   mt-5 mt-lg-0" data-bs-toggle="pill" data-bs-target="#fourth_G_U_ID" type="button">
          Community
        </button>

      </div>
    </div>

    <div className="tab-content pt-80">
      <div className="tab-pane active" id="first_G_U_ID">
        <div className="row  align-items-center">
          <div className="col-lg-6 wow slideInLeft">
            <h2>Simplify Sales Funnels for Success</h2>
            <p>Getting visitors to your website and converting them into paying customers is our specialty. With zero
              computer skills needed, Vissioon works for every type of business. Create effective sales funnels, turning
              visitors into customers, and boosting online sales effortlessly.</p>
            <h3>Funnel’s Popular Features </h3>
            <ul className="list-unstyled">
              <li>User-friendly Funnel Builder</li>
              <li>Payment Gateway Integration</li>
              <li>Website Editor</li>
              <li>Works for Every Type of Business </li>
            </ul>
            {/* <a href="#" className="white-btn-with-arrow">Explore Marketing Software <i
                className="fa-solid fa-arrow-right ms-2 ms-lg-5"></i></a> */}
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0 wow slideInRight">
            <img src="/assets/home-page/1.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>

      <div className="tab-pane" id="second_G_U_ID">
        <div className="row  align-items-center">
          <div className="col-lg-6 wow slideInLeft">
            <h2>Personal Guidance for Membership Success</h2>
            <p>Discover the best in life with our tailored programs and mentorship your path to self-designed success.
              Effortlessly navigate success principles with our proven step-by-step systems.</p>
            <h3>Top-rated Features</h3>
            <ul className="list-unstyled">
              <li>Transform Within, Tailored for All</li>
              <li>Access control</li>
              <li>Mentorship matching</li>
              <li>Success is 95% attitude, 5% plan</li>
            </ul>
            {/* <a href="#" className="white-btn-with-arrow">Explore Free CRM Features <i
                className="fa-solid fa-arrow-right ms-2 ms-lg-5"></i></a> */}
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0 wow slideInRight">
            <img src="/assets/home-page/2.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
      <div className="tab-pane" id="third_G_U_ID">
        <div className="row  align-items-center">
          <div className="col-lg-6 wow slideInLeft">
            <h2>Your Path to Pro-Level Sales</h2>
            <p>Vissioon's Sales Software simplifies contact management, email tracking, Event Management , and
              appointment
              scheduling, all within one efficient platform. Elevate your sales process with ease.</p>
            <h3>Pro Sales Features</h3>
            <ul className="list-unstyled">
              <li>Contact & lead management</li>
              <li>Deal tracking</li>
              <li>Email integration</li>
              <li>Event Management </li>
            </ul>
            {/* <a href="#" className="white-btn-with-arrow">Explore Sales Software <i
                className="fa-solid fa-arrow-right ms-2 ms-lg-5"></i></a> */}
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0 wow slideInRight">
            <img src="/assets/home-page/4.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
      <div className="tab-pane" id="fourth_G_U_ID">
        <div className="row  align-items-center">
          <div className="col-lg-6 wow slideInLeft">
            <h2>Stay Informed with Real-time Updates</h2>
            <p>Be part of a friendly global group to learn, grow, and succeed together. We share knowledge, support each
              other, and boost results by working as a team, opening doors to income opportunities</p>
            <h3>Community Features </h3>
            <ul className="list-unstyled">
              <li>Real-Time Updates </li>
              <li>Industry Trends </li>
              <li>Networking</li>
              <li>Continuous Learning</li>
            </ul>
            {/* <a href="#" className="white-btn-with-arrow">Explore Help Desk Software <i
                className="fa-solid fa-arrow-right ms-2 ms-lg-5"></i></a> */}
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