export default function NewPricingSection() {
  return (
    <section className="pricing-section mt-60" id="pricing">
      <div className="container">
        <div className="pricing-header">
          <div className="badge-pill">RATE, REVISIONS & POLICIES</div>
          <h2 className="pricing-main-title">
            Clear engagement terms designed for smooth collaboration.
          </h2>
          <p>
            Transparent terms help projects move faster, reduce confusion, and{" "}
            <br />
            keep expectations aligned from the start.
          </p>
        </div>

        <div className="pricing-grid">
          <div className="pricing-card card-bg">
            <div className="pricing-card-label">HOURLY RATE</div>
            <h3>Professional engineering support for focused product work.</h3>
            <div className="pricing-amount">
              <span className="pricing-amount-number">$25</span>
              <span className="pricing-amount-label">/ hour</span>
            </div>
            <p>
              Ideal for development, DevOps setup, technical planning, bug
              fixing, deployment flow, and team guidance.
            </p>
            <ul className="pricing-list">
              <li>Flexible for short-term and ongoing work</li>
              <li>Clear scope breakdown before execution</li>
              <li>Time used on actual technical progress and reporting</li>
            </ul>
          </div>

          <div className="pricing-card">
            <div className="pricing-card-label">REVISIONS</div>
            <h3>Revision Policy</h3>
            <p>
              Up to <strong>2 standard revisions</strong> are included for each
              completed module or agreed milestone.
            </p>
            <ul className="pricing-list">
              <li>Minor UI refinements and technical adjustments</li>
              <li>Changes within approved scope are handled smoothly</li>
              <li>New requirements are discussed separately</li>
            </ul>
          </div>

          <div className="pricing-card">
            <div className="pricing-card-label">REFUND POLICY</div>
            <h3>Fair and clear workflow</h3>
            <p>
              Refunds can be considered before major work starts. Once approved
              technical work is completed or delivered, completed hours remain
              billable.
            </p>
            <ul className="pricing-list">
              <li>Scope clarity before project start</li>
              <li>Milestone-based transparency</li>
              <li>Communication-first resolution process</li>
            </ul>
          </div>

          <div className="pricing-card">
            <div className="pricing-card-label">PAYMENT GATEWAY</div>
            <h3>Accepted payment methods</h3>
            <p>Flexible payment options for local and international clients.</p>
            <div className="pricing-payment-grid">
              <div className="pricing-payment-item">Bank Transfer</div>
              <div className="pricing-payment-item">Payoneer</div>
              <div className="pricing-payment-item">Wise</div>
              <div className="pricing-payment-item">Stripe</div>
            </div>
          </div>

          <div className="pricing-card">
            <div className="pricing-card-label">TASKS RATIO</div>
            <h3>Work distribution model</h3>
            <p>
              A balanced workflow across core engineering responsibilities and
              leadership support.
            </p>
            <div className="pricing-bars">
              <div className="pricing-bar-item">
                <div className="pricing-bar-header">
                  <span className="pricing-bar-label">Development</span>
                  <span className="pricing-bar-value">45%</span>
                </div>
                <div className="pricing-bar-track">
                  <div
                    className="pricing-bar-fill"
                    style={{ width: "45%" }}
                  ></div>
                </div>
              </div>
              <div className="pricing-bar-item">
                <div className="pricing-bar-header">
                  <span className="pricing-bar-label">DevOps / Deployment</span>
                  <span className="pricing-bar-value">25%</span>
                </div>
                <div className="pricing-bar-track">
                  <div
                    className="pricing-bar-fill"
                    style={{ width: "25%" }}
                  ></div>
                </div>
              </div>
              <div className="pricing-bar-item">
                <div className="pricing-bar-header">
                  <span className="pricing-bar-label">
                    Architecture & Review
                  </span>
                  <span className="pricing-bar-value">20%</span>
                </div>
                <div className="pricing-bar-track">
                  <div
                    className="pricing-bar-fill"
                    style={{ width: "20%" }}
                  ></div>
                </div>
              </div>
              <div className="pricing-bar-item">
                <div className="pricing-bar-header">
                  <span className="pricing-bar-label">Coordination</span>
                  <span className="pricing-bar-value">10%</span>
                </div>
                <div className="pricing-bar-track">
                  <div
                    className="pricing-bar-fill"
                    style={{ width: "10%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="pricing-card">
            <div className="pricing-card-label">ENGAGEMENT</div>
            <h3>Working approach</h3>
            <ul className="pricing-list">
              <li>Clear scope discussion before starting</li>
              <li>Regular progress updates and aligned milestones</li>
              <li>Professional communication and issue handling</li>
              <li>Built for startups, agencies, and long-term teams</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
