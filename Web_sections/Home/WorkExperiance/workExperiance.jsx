import { useState, useEffect, useRef } from "react";

const WorkExperiance = ({ setBgColor }) => {
  const [activeTab, setActiveTab] = useState(0);
  const experiences = [
    {
      company: 'Confidential SaaS Company',
      title: 'Senior Backend Engineer & DevOps Lead',
      location: 'Hybrid',
      period: 'January 2021 - Present',
      description: 'Leading backend architecture and DevOps operations for scalable SaaS platforms. Responsible for designing microservices-based systems, implementing CI/CD pipelines, managing AWS infrastructure, and optimizing database performance. Focused on high-availability systems, security best practices, and production-grade deployment strategies serving international clients.'
    },
    {
      company: 'International Clients (Freelance & Consulting)',
      title: 'Backend Architect & SaaS Consultant',
      location: 'Remote',
      period: 'March 2018 - December 2020',
      description: 'Collaborated with international clients to design and develop scalable backend systems and SaaS products. Built RESTful APIs, implemented authentication systems, optimized cloud infrastructure, and delivered production-ready deployments using AWS and serverless technologies. Provided architectural guidance and performance optimization strategies.'
    },
    {
      company: 'Tech Solutions Company',
      title: 'Backend Developer',
      location: 'Onsite',
      period: 'June 2016 - February 2018',
      description: 'Worked on core backend development, database design, and API integrations for enterprise-level applications. Contributed to system design discussions, improved query performance, and implemented structured deployment workflows. Gained strong foundations in scalable architecture and clean backend engineering practices.'
    }
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    if (!setBgColor) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBgColor("#222831"); // light blue for work experience
        }
      },
      { threshold: 0.6 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [setBgColor]);

  return (
    <section className="experiance_wrapper pt-60 mt-80" id="experiance" ref={sectionRef}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 data-aos="zoom-in-right">
              My Work Experiences
            </h2>
            <div className="experiences-container" data-aos="fade-down-left">
              <div className="tabs-navigation">
                <ul className="nav nav-tabs" data-aos="zoom-in-right">
                  {experiences.map((exp, index) => (
                    <li className="nav-item" key={index}>
                      <button
                        className={activeTab === index ? 'nav-link active' : 'nav-link'}
                        onClick={() => setActiveTab(index)}
                        type="button"
                      >
                        {exp.company}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="tab-content">
                <div className="tab-pane active">
                  <h3 data-aos="zoom-in-right">{experiences[activeTab].title}</h3>
                  <p data-aos="zoom-in-right">
                    {experiences[activeTab].location} | {experiences[activeTab].period}
                  </p>
                  <div className="job-description">
                    <p data-aos="zoom-in-right">{experiences[activeTab].description}</p>
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

export default WorkExperiance;
