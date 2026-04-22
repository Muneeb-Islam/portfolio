export default function FooterSection() {
  return (
    <footer className="footer-section mb-60 mt-60">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="footer-logo-text">Muneeb Islam</span>
            </div>
            <p>
              Professional portfolio landing page for a Full Stack & DevOps
              Engineer - Tech Lead.
            </p>
          </div>
          <div className="footer-right">
            <p>© 2026 Muneeb Islam. Designed with a light premium interface.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
