import { projectsData } from "@/utils/projectsData";
import Link from "next/link";

const OurProjects = () => {
  return (
    <section className="project-section mt-60" id="projects">
      <div className="container">
        <div className="row">
          <div className="project-header col-lg-7">
            <div className="badge-pill">PROJECTS</div>
            <div className="project-header-content">
              <h2>Selected work across products, platforms, and systems.</h2>
              <p>
                A selection of product, platform, and infrastructure work focused on scalable builds, reliable delivery, and business-ready execution.
              </p>
            </div>
          </div>
        </div>

        <div className="project-grid mt-4">
          {projectsData.slice(0, 4).map((project, index) => (
            <div className="project-card" key={project.id}>
              <div className="project-card-header">
                <h3>{project.title}</h3>
                <span className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p>{project.description}</p>

              <div className="project-tags mt-3">
                {project.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>

              <hr />

              <div className="project-metrics">
                {project.metrics.map((metric, i) => (
                  <div className="project-metric" key={i}>
                    <div className="metric-value">{metric.value}</div>
                    <div className="metric-label">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center mt-5">
          <Link href="/projects">
            <button className="contained-btn">View All Projects</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
