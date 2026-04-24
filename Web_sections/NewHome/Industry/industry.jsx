export default function IndustrySection() {
  return (
    <section className="industry-section mt-60" id="industry">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="badge-pill">INDUSTRY AREA</div>

            <h2>
              Engineering solutions adapted to diverse product environments.
            </h2>

            <p>
              I work across different business domains by building scalable platforms, reliable backend systems, cloud infrastructure, and automation-focused solutions.
            </p>
          </div>
        </div>

        <div className="industry-grid mt-4">
          <div className="industry-card">
            <div className="industry-number">01</div>
            <h3>SaaS Products</h3>
            <p>
             Subscription-based platforms, internal systems, customer portals, dashboards, and scalable product architecture.
            </p>
          </div>

          <div className="industry-card">
            <div className="industry-number">02</div>
            <h3>E-Commerce</h3>
            <p>
             Backend workflows, product operations, integrations, secure logic, and performance-focused implementation.
            </p>
          </div>
          <div className="industry-card">
            <div className="industry-number">03</div>
            <h3>Business Automation</h3>
            <p>
              Reporting systems, admin workflows, APIs, internal tools, and process automation to reduce manual effort.
            </p>
          </div>

          <div className="industry-card">
            <div className="industry-number">04</div>
            <h3>Cloud Infrastructure</h3>
            <p>
              Deployment pipelines, cloud environments, monitoring setup, server optimization, and stable production delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
