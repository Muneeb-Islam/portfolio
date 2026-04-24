export default function TeamSection() {
  return (
    <section className="industry-section team-section mt-60" id="team">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-7">
            <div className="badge-pill">COLLABORATION MODEL</div>

            <h2>A lean support structure when projects need more than one specialist.</h2>
            <p>
              For projects that require broader execution, work can be supported through a focused collaboration setup across frontend, backend, QA, and delivery.
            </p>
          </div>
        </div>

        <div className="industry-grid mt-4">
          <div className="industry-card">
            <div className="industry-number">MI</div>
            <h3>Muneeb Islam</h3>
            <p>
              Leads architecture, full stack development, deployment planning, technical decisions, and client communication.
            </p>
          </div>

          <div className="industry-card">
            <div className="industry-number">FD</div>
            <h3>Frontend Support</h3>
            <p>
              Supports polished interfaces, component implementation, and responsive product-ready frontend work.
            </p>
          </div>

          <div className="industry-card">
            <div className="industry-number">BE</div>
            <h3>Backend Support</h3>
            <p>
              Assists with APIs, database workflows, integrations, and backend execution where needed.
            </p>
          </div>

          <div className="industry-card">
            <div className="industry-number">QA</div>
            <h3>QA / Delivery Support</h3>
            <p>
              Supports review cycles, release checks, testing coordination, and final delivery validation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
