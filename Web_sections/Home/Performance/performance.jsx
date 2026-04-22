export default function PerformanceSection() {
  return (
    <section className="performance-section mt-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="performance-grid">
              <div className="performance-card">
                <div className="badge-pill">EFFICIENCY VIEW</div>

                <h2>Execution that stays clear, measurable, and controlled.</h2>

                <p>
                  I focus on planning, visibility, clean task breakdown, stable
                  delivery cycles, and communication that reduces friction
                  across the whole project lifecycle.
                </p>

                <div className="performance-metrics mt-4">
                  <div className="metric-card">
                    <div className="metric-value">92%</div>
                    <div className="metric-label">
                      Task visibility across milestones
                    </div>
                  </div>

                  <div className="metric-card">
                    <div className="metric-value">88%</div>
                    <div className="metric-label">
                      Predictable sprint completion
                    </div>
                  </div>

                  <div className="metric-card">
                    <div className="metric-value">Low</div>
                    <div className="metric-label">
                      Escalation and blocker frequency
                    </div>
                  </div>

                  <div className="metric-card">
                    <div className="metric-value">High</div>
                    <div className="metric-label">
                      Documentation and handoff quality
                    </div>
                  </div>
                </div>
              </div>

              <div className="performance-card">
                <div className="badge-pill">DELIVERY FLOW</div>

                <h2>How work is moved from idea to production.</h2>

                <div className="delivery-steps mt-4">
                  <div className="delivery-step">
                    <div className="step-number">01</div>
                    <div className="step-content">
                      <h3>Discovery & Scope</h3>
                      <p>
                        Understand goals, define flows, map dependencies, and
                        reduce ambiguity before execution starts.
                      </p>
                    </div>
                  </div>

                  <div className="delivery-step">
                    <div className="step-number">02</div>
                    <div className="step-content">
                      <h3>Build & Review</h3>
                      <p>
                        Develop in structured milestones with transparent
                        progress, reviews, and quality checkpoints.
                      </p>
                    </div>
                  </div>

                  <div className="delivery-step">
                    <div className="step-number">03</div>
                    <div className="step-content">
                      <h3>Deploy & Improve</h3>
                      <p>
                        Release with confidence, monitor actively, and iterate
                        using real usage and feedback data.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
