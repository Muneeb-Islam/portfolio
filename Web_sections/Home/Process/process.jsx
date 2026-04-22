export default function ProcessSection() {
  return (
    <section className="process-section mt-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="badge-pill">HR RATE</div>
            <h2>Flexible engagement structure for serious work.</h2>
            <p>
              Present your hourly rate, availability, and work model in a strong
              premium layout. The content below is ready to customize based on
              your preferred pricing.
            </p>
          </div>
          <div className="process-cards-grid">
            <div className="process-card process-card-large">
              <h3>Hourly Engagement</h3>

              <div className="process-rate">
                <span className="process-rate-amount">$35</span>
                <span className="process-rate-label">/ hour starting rate</span>
              </div>

              <p>
                For custom development, DevOps implementation, technical
                consulting, code audits, architecture planning, and team
                support. Final rate can vary depending on scope, complexity,
                urgency, and engagement model.
              </p>

              <div className="process-info-box">
                <span className="process-info-label">Includes:</span>
                <span className="process-info-text">
                  planning, development, deployment, and review guidance.
                </span>
              </div>

              <div className="process-info-box">
                <span className="process-info-label">Suitable for:</span>
                <span className="process-info-text">
                  startups, agencies, scaling teams, and product owners.
                </span>
              </div>

              <div className="process-info-box">
                <span className="process-info-label">Availability:</span>
                <span className="process-info-text">
                  hourly, milestone-based, or ongoing retainer support.
                </span>
              </div>
            </div>

            <div className="process-card process-card-small">
              <h3>Payment Gateway</h3>

              <p>
                I support modern professional payment options for local and
                international clients based on the project engagement model.
              </p>

              <div className="process-payment-grid">
                <div className="process-payment-item">Stripe</div>
                <div className="process-payment-item">PayPal</div>
                <div className="process-payment-item">Wise</div>
                <div className="process-payment-item">Payoneer</div>
                <div className="process-payment-item">Bank Transfer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
