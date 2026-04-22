import { projectsData } from "@/utils/projectsData";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const OurProjects = () => {
  return (
    <section className="project-section mt-sm-60" id="projects">
      <div className="container">
        <div className="row">
          <div className=" links-text mt-3 mb-3">
            <Link href="/">
              <span>Home</span>
            </Link>
            <Icon icon="heroicons:slash"></Icon>
            <span>Projects</span>
          </div>
          <div className="project-header col-lg-7 mt-4">
            <div className="badge-pill">PROJECTS</div>
            <div className="project-header-content">
              <h2>Selected work across products, platforms, and systems.</h2>
              <p>
                These sample project blocks are structured for a premium
                portfolio presentation.
              </p>
            </div>
          </div>
        </div>
        <div className="project-grid mt-4">
          {projectsData?.map((project, index) => (
            <Link
              href={`/projects/${project?.slug}`}
              className="project-card"
              key={project.id}
            >
              {project.image && (
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid w-100 mb-3"
                  />
                </div>
              )}
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
