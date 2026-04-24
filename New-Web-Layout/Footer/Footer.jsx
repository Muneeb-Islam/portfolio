import Link from "next/link";

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
              Full Stack Developer building SaaS platforms, APIs, mobile apps, and cloud-ready systems.
            </p>
          </div>



          <div className="footer-right h-100 d-flex flex-column justify-content-between align-items-center align-items-lg-end">
            <ul className="list-unstyled d-flex flex-wrap justify-content-center justify-content-lg-end align-items-center gap-3 mb-3 small">
              <li>
                <Link className="nav-link active px-0" aria-current="page" href="/">
                  Home
                </Link>
              </li>

              <li>
                <Link className="nav-link px-0" href="/new/#qualification">
                  Experience
                </Link>
              </li>

              <li>
                <Link className="nav-link px-0" href="/new/#projects">
                  Projects
                </Link>
              </li>

              <li>
                <Link className="nav-link px-0" href="/new/#industry">
                  Industry Area
                </Link>
              </li>

              <li>
                <Link className="nav-link px-0" href="/new/#pricing">
                  Process
                </Link>
              </li>

              <li>
                <Link className="nav-link px-0" href="#contact">
                  Contact
                </Link>
              </li>
            </ul>

            <p className="mb-0 text-center text-lg-end small text-muted">
              © 2026 Muneeb Islam. Built with a clean, product-focused approach.
            </p>
          </div>

          {/* <div className="footer-right h-100 d-flex flex-column justify-content-between">
            <ul class="d-flex flex-row justify-content-center gap-3">

              <a class=" active" aria-current="page" href="/">
                Home
              </a>


              <a class=" " href="/new/#qualification">
                Experience
              </a>



              <a class=" " href="/new/#projects">
                Projects
              </a>


              <a class="" href="/new/#industry" aria-disabled="true">
                Industry Area
              </a>


              <a class=" " href="/new/#pricing">
                Process
              </a>

              <a class="" href="#contact" aria-disabled="true">
                Contact
              </a>

            </ul>
            <p>© 2026 Muneeb Islam. Built with a clean, product-focused approach.</p>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
