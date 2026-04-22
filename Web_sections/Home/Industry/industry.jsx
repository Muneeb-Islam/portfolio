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
              I can work across multiple industries by translating business
              requirements into practical and scalable technical systems.
            </p>
          </div>
        </div>

        <div className="industry-grid mt-4">
          <div className="industry-card">
            <div className="industry-number">01</div>
            <h3>SaaS Products</h3>
            <p>
              Subscription platforms, admin systems, dashboards, and business
              tools with reliable architecture.
            </p>
          </div>

          <div className="industry-card">
            <div className="industry-number">02</div>
            <h3>E-Commerce</h3>
            <p>
              Storefront systems, order management, payment integration,
              performance optimization, and backend operations.
            </p>
          </div>

          <div className="industry-card">
            <div className="industry-number">03</div>
            <h3>Business Automation</h3>
            <p>
              Internal tools, workflow automation, custom portals, reporting
              systems, and task handling platforms.
            </p>
          </div>

          <div className="industry-card">
            <div className="industry-number">04</div>
            <h3>Cloud Infrastructure</h3>
            <p>
              Deployment pipelines, server environments, monitoring,
              containerization, and operational stability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
