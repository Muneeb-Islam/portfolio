import Image from "next/image";
import Link from "next/link";

const NewBannerSection = () => {
  return (
    <section className="hero-section mt-sm-60 ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="row">
              <div className="col-lg-7">
                <div className="hero-left">
                  <div className="badge-pill">FULL STACK DEVELOPER • SAAS • DEVOPS</div>

                  <h1>
                    Building scalable SaaS products, modern web apps, backend APIs, and reliable cloud systems.
                  </h1>

                  <p>
                    I’m Muneeb Islam, a Full Stack Developer with 7+ years of experience building React, Next.js, React Native, Node.js, and cloud-based solutions. I help startups, agencies, and growing businesses launch faster with scalable products, clean backend systems, and practical DevOps execution.
                  </p>

                  <div className="expertise-tags">
                    <span>SaaS Development</span>
                    <span>Backend APIs</span>
                    <span>Cloud & DevOps</span>
                    <span>Automation Systems</span>
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
                      <div className="stat-number">7+</div>
                      <div className="stat-label">
                        Years of Experience
                      </div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-number">25+</div>
                      <div className="stat-label">
                        Projects Delivered
                      </div>
                    </div>
                    {/* <div className="stat-card">
                      <div className="stat-number">Cost Optimized</div>
                      <div className="stat-label">
                        Reduced server costs through better infrastructure
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>

              <div className="col-lg-5 mt-3 mt-lg-0">
                <div className="profile-card h-100">
                  <div className="profile-header">
                    <Image width={100} height={100} className="profile-avatar" src="https://media.licdn.com/dms/image/v2/D4D03AQHIuZXMz7HL8g/profile-displayphoto-scale_400_400/B4DZhfOcy1HAAw-/0/1753944280862?e=1778716800&v=beta&t=RwOqFOCQleiBIbWC6F1qPF35tTQS1pJwXmsWhUllNv0" alt="Profile" />

                    <div className="profile-info">
                      <h3>Muneeb Islam</h3>
                      <p>Full Stack Developer • SaaS Engineer • DevOps</p>
                      <p className="profile-bio">
                        Helping businesses build scalable web platforms, mobile apps, backend systems, and cloud-ready infrastructure with modern technologies and reliable execution
                      </p>
                    </div>
                  </div>

                  <div className="profile-details">
                    <div className="detail-row">
                      <div className="detail-item">
                        <div className="detail-label">AVAILABILITY</div>
                        <div className="detail-value availability">Open</div>
                        <div className="detail-subtext">
                          Available for freelance, contract, and long-term technical work.
                        </div>
                      </div>
                      <div className="detail-item">
                        <div className="detail-label">PRIMARY FOCUS</div>
                        <div className="detail-value focus">Build + Scale</div>
                        <div className="detail-subtext">
                          From product idea to launch, deployment, and system improvement.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tech-stack">
                    <h3>Core Stack</h3>
                    <div className="tech-tags">
                      <span>React</span>
                      <span>Next.js</span>
                      <span>React Native</span>
                      <span>Node.js</span>
                      <span>MongoDB</span>
                      <span>SQL</span>
                      <span>AWS</span>
                      <span>DigitalOcean</span>
                      <span>CI/CD</span>
                      <span>DevOps</span>
                      <span>Email Infrastructure</span>
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

export default NewBannerSection;
