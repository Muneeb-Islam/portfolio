import { portfolioItems } from "@/Components/portfolioData/portfolioData";
import Link from "next/link";
import { useEffect, useRef } from "react";

const OurProjects = ({ setBgColor }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!setBgColor) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setBgColor("#fff6e6"); // warm pale background
      },
      { threshold: 0.6 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [setBgColor]);

  return (
    <section className="projects_wrapper mt-80 pt-60 pb-60" id="my-projects" ref={sectionRef}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h2 data-aos="zoom-in-right">Things I've Worked on, Some of Them</h2>

            {portfolioItems?.map((project, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  className={`row project-row position-relative ${isEven ? "" : "justify-content-end"
                    }`}
                  key={project.id}
                >
                  {/* Text Column */}
                  <div
                    className={`col-12 col-lg-6 project-text-col mt-4 mt-lg-5 ${!isEven ? "order-lg-2" : ""
                      }`}
                  >
                    <div className={`${isEven ? "" : "text-end"}`}>
                      <p data-aos="zoom-in-right">Featured Project</p>
                      <h3 data-aos="zoom-in-right" className={`${isEven ? "" : "ms-auto"}`}>{project.title}</h3>
                    </div>

                    <div className="project-text-box">
                      <p data-aos="zoom-in-right">{project.description}</p>
                    </div>

                    <div className={`${isEven ? "" : "text-end"}`}>
                      <div className="feature_list">{project.techStack.join(" | ")}</div>
                      <Link href={`/projects/${project?.slug}`} className="view-details-btn" data-aos="zoom-in-right">
                        View Details
                      </Link>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div
                    className={`col-lg-6 project-image-col mt-4 mt-lg-5 ${!isEven ? "order-lg-1 project-image-col-1" : ""
                      }`}
                  >
                    <div className="project-img-wrapper">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="img-fluid project-img"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="mt-80 d-flex justify-content-center">
              <Link href="/projects" className="view-details-btn" data-aos="fade-up">
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProjects;