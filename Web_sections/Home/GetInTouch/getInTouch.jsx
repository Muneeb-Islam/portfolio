const GetInTouch = () => {
  return (
    <section className="contact-section mt-60" id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-header col-lg-7">
            <div className="badge-pill">CONTACT FORM</div>
            <h2>Let's build something sharp, stable, and ready to scale.</h2>
            <p>
              Share your idea, project scope, or technical challenge. I'll
              review it and help shape a practical engineering path.
            </p>
          </div>
        </div>

        <div className="contact-content">
          <div className="contact-info-card h-100">
            <h3>Start a conversation</h3>
            <p className="contact-info-description">
              Whether you need development, DevOps setup, team support, or
              technical leadership, this page is built to make the next step
              easy.
            </p>

            <div className="contact-info-box">
              <div className="contact-info-label">Email</div>
              <div className="contact-info-value">muneeb@example.com</div>
            </div>

            <div className="contact-info-box">
              <div className="contact-info-label">Role</div>
              <div className="contact-info-value">
                Full Stack & DevOps Engineer - Tech Lead
              </div>
            </div>

            <div className="contact-info-box">
              <div className="contact-info-label">Availability</div>
              <div className="contact-info-value">
                Open for freelance, contract, and selective long-term work
              </div>
            </div>
          </div>

          <div className="contact-form-card h-100">
            <form className="contact-form">
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <input
                    type="text"
                    className="contact-input"
                    placeholder="Your Name"
                  />
                </div>
                <div className="contact-form-group">
                  <input
                    type="email"
                    className="contact-input"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-form-group">
                  <input
                    type="text"
                    className="contact-input"
                    placeholder="Company / Brand"
                  />
                </div>
                <div className="contact-form-group">
                  <select className="contact-select">
                    <option>Project Type</option>
                    <option>Web Development</option>
                    <option>Mobile Development</option>
                    <option>DevOps & Infrastructure</option>
                    <option>Technical Consulting</option>
                    <option>Code Review & Architecture</option>
                  </select>
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-form-group contact-form-group-full">
                  <input
                    type="text"
                    className="contact-input"
                    placeholder="Estimated Budget or Hourly Scope"
                  />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-form-group contact-form-group-full">
                  <textarea
                    className="contact-textarea"
                    placeholder="Tell me about your project, timeline, goals, or technical problem."
                    rows={6}
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="contained-btn w-100">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
