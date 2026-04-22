export default function TeamSection() {
  return (
    <section className="industry-section team-section mt-60" id="team">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-7">
            <div className="badge-pill">TEAM MEMBERS</div>

            <h2>A lean, reliable collaboration model when projects scale.</h2>
            <p>
              Even when working as the lead, complex projects often need aligned
              support. This section shows how a small trusted team structure can
              be presented professionally.
            </p>
          </div>
        </div>

        <div className="industry-grid mt-4">
          <div className="industry-card">
            <div className="industry-number">MI</div>
            <h3>Muneeb Islam</h3>
            <p>
              Lead engineer for architecture, full stack execution, DevOps
              delivery, planning, and client communication.
            </p>
          </div>

          <div className="industry-card">
            <div className="industry-number">FD</div>
            <h3>Frontend Support</h3>
            <p>
              Helps with polished UI implementation, responsive views, and
              production-ready visual experiences.
            </p>
          </div>

          <div className="industry-card">
            <div className="industry-number">BE</div>
            <h3>Backend Support</h3>
            <p>
              Assists with data handling, APIs, integrations, performance
              tuning, and advanced logic when needed.
            </p>
          </div>

          <div className="industry-card">
            <div className="industry-number">QA</div>
            <h3>QA / Delivery Support</h3>
            <p>
              Supports review cycles, testing flow, issue reporting, and final
              delivery checks for stable releases.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
