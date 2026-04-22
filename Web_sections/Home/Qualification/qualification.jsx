const Qualification = () => {
  return (
    <section className="qualification-section mt-60" id="qualification">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 section-header">
            <div className="badge-pill">QUALIFICATION</div>
            <h2>Experience shaped by engineering depth and leadership.</h2>
            <p>
              A strong mix of hands-on development, infrastructure planning,
              <br />
              delivery ownership, and technical mentoring across modern software
              environments.
            </p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-lg-6">
            <div className="highlights-column h-100">
              <h3>Professional Highlights</h3>
              <p>
                I work across the full lifecycle, from idea validation and
                architecture planning to deployment, monitoring, optimization,
                and long-term product improvement.
              </p>

              <ul className="highlights-list">
                <li className="highlight-item">
                  <span className="bullet"></span>
                  <span className="highlight-text">
                    Full stack web application development
                  </span>
                </li>
                <li className="highlight-item">
                  <span className="bullet"></span>
                  <span className="highlight-text">
                    DevOps pipelines, Docker workflows, and server automation
                  </span>
                </li>
                <li className="highlight-item">
                  <span className="bullet"></span>
                  <span className="highlight-text">
                    Team lead collaboration, task planning, and technical
                    decision-making
                  </span>
                </li>
                <li className="highlight-item">
                  <span className="bullet"></span>
                  <span className="highlight-text">
                    Performance tuning, security-enabled implementation, and
                    infrastructure stability
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="pillars-column h-100">
              <div className="pillar-card">
                <div className="pillar-icon"></div>
                <div className="pillar-content">
                  <div className="pillar-label">FOUNDATION</div>
                  <h4>Full Stack Engineering</h4>
                  <p>
                    Build and maintained modern frontend, backend, database, and
                    API-driven products with attention to clean code and stable
                    architecture.
                  </p>
                </div>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon"></div>
                <div className="pillar-content">
                  <div className="pillar-label">INFRASTRUCTURE</div>
                  <h4>DevOps & Deployment</h4>
                  <p>
                    Managed cloud servers, CI/CD pipelines, containers,
                    environment security, deployment flow, and production
                    operations.
                  </p>
                </div>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon"></div>
                <div className="pillar-content">
                  <div className="pillar-label">LEADERSHIP</div>
                  <h4>Technical Team Lead</h4>
                  <p>
                    Led delivery, assigned tasks, reviewed engineering quality,
                    reduced blockers, and kept products aligned with business
                    goals.
                  </p>
                </div>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon"></div>
                <div className="pillar-content">
                  <div className="pillar-label">GROWTH</div>
                  <h4>Scalable Product Thinking</h4>
                  <p>
                    Focused on maintainable systems that support faster
                    iterations, smoother releases, and better team productivity
                    over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
