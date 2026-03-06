import { portfolioItems } from '@/Components/portfolioData/portfolioData';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import * as React from 'react';

const ProjectSection = () => {

    return (
        <section className='project_wrapper pt-60 pb-60'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-11">
                        <div className='text-center links-text mb-2 mb-lg-4' data-aos="fade-up">
                            <Link href="/"><span>Home</span></Link>
                            <Icon icon="heroicons:slash"></Icon>
                            <span>Projects</span>
                        </div>
                        <h2 data-aos="zoom-in-right">All Projects
                        </h2>
                        <div className="text-center mt-2 mt-lg-4" data-aos="fade-up">
                            <p>A comprehensive collection of mobile applications, web platforms, and full-stack <br /> solutions I've developed using cutting-edge technologies.</p>
                        </div>
                        <div className="row">
                            {portfolioItems?.map((item) => (
                                <div className="col-md-6 col-lg-4 mt-3 mt-lg-4" key={item?.id}>
                                    <div className="project-card" data-aos="fade-up">
                                        <img
                                            src={item?.image}
                                            className="img-fluid hover-profile"
                                            alt={item?.title}
                                        />

                                        <div className="project-card-content">
                                            <div className="project-card-label">Featured Project</div>

                                            <h3>{item?.title}</h3>

                                            <p>
                                                {item?.description?.length > 120
                                                    ? item?.description.slice(0, 120) + "..."
                                                    : item?.description}
                                            </p>

                                            <div className="project-card-techs">
                                                {item?.techStack?.map((tech, index) => (
                                                    <span className="project-card-tech" key={index}>
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            <div>
                                                <Link
                                                    href={`/projects/${item?.slug}`}
                                                    className="view-details-btn d-inline-block mt-0"
                                                >
                                                    {item?.button_title}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
