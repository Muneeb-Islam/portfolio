import Link from "next/link";

const BannerSection = () => {
  return (
    <section className="hero-section mt-sm-60 ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="row">
              <div className="col-lg-7">
                <div className="hero-left">
                  <div className="badge-pill">FULL STACK & DEVOPS ENGINEER</div>

                  <h1>
                    Building scalable products, cloud systems, and
                    high-performing engineering teams.
                  </h1>

                  <p>
                    I am a{" "}
                    <strong>Full Stack & DevOps Engineer - Tech Lead</strong>{" "}
                    focused on modern web platforms, cloud-native architecture,
                    CI/CD automation, team leadership, and business-driven
                    product delivery. I help startups and enterprises ship
                    faster with clean code, reliable infrastructure, and smart
                    execution.
                  </p>

                  <div className="expertise-tags">
                    <span>Tech Lead</span>
                    <span>Cloud Architecture</span>
                    <span>CI/CD Automation</span>
                    <span>Product Delivery</span>
                  </div>

                  <div className="cta-buttons">
                    <Link href="#contact" className="contained-btn">
                      Let's Work Together
                    </Link>
                    <Link href="#projects" className="btn-secondary">
                      View Projects
                    </Link>
                  </div>

                  <div className="stats-grid">
                    <div className="stat-card">
                      <div className="stat-number">8+</div>
                      <div className="stat-label">
                        Years of Engineering Experience
                      </div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-number">40+</div>
                      <div className="stat-label">
                        Projects Delivered Across Industries
                      </div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-number">99.9%</div>
                      <div className="stat-label">
                        Deployment Reliability Goal
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 mt-3 mt-lg-0">
                <div className="profile-card h-100">
                  <div className="profile-header">
                    <div className="profile-avatar">TL</div>
                    <div className="profile-info">
                      <h3>Your Name Here</h3>
                      <p>Full Stack & DevOps Engineer - Tech Lead</p>
                      <p className="profile-bio">
                        Helping businesses launch robust platforms with modern
                        UX, backend systems, infrastructure, observability, and
                        team alignment.
                      </p>
                    </div>
                  </div>

                  <div className="profile-details">
                    <div className="detail-row">
                      <div className="detail-item">
                        <div className="detail-label">AVAILABILITY</div>
                        <div className="detail-value availability">Open</div>
                        <div className="detail-subtext">
                          Available for long-term contracts and consulting work.
                        </div>
                      </div>
                      <div className="detail-item">
                        <div className="detail-label">PRIMARY FOCUS</div>
                        <div className="detail-value focus">Lead + Build</div>
                        <div className="detail-subtext">
                          From project planning to delivery and growth.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tech-stack">
                    <h3>Core Technology Stack</h3>
                    <div className="tech-tags">
                      <span>React / Next.js</span>
                      <span>Node.js</span>
                      <span>TypeScript</span>
                      <span>Docker</span>
                      <span>AWS</span>
                      <span>Kubernetes</span>
                      <span>CI/CD</span>
                      <span>PostgreSQL</span>
                      <span>MongoDB</span>
                      <span>Terraform</span>
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
};

export default BannerSection;
