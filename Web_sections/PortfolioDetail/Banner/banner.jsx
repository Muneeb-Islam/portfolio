import Link from "next/link";

const BannerSection = ({ detail }) => {
    console.log(detail, "detail")

    return (
        <section className="project_banner breadcrumbs pt-3 pt-lg-4">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-11">
                        <div className='links-text mb-2 mb-lg-4' data-aos="fade-up">
                            <Link href="/"><span>Home</span> /</Link>
                            <Link href="/projects"> <span>Projects</span> / </Link>
                            <span>{detail?.title}</span>

                        </div>
                    </div>
                    <div className="col-lg-7 text-center">
                        <span data-aos="fade-up">{detail?.sub_title}</span>
                        <h1 data-aos="fade-up">{detail.title}</h1>
                        <p data-aos="fade-up">{detail.description}</p>
                        <h3 data-aos="fade-up">Technologies Used:</h3>
                        <div className="project-card-techs justify-content-center mt-3" data-aos="fade-up">
                            {detail?.techStack?.map((tech, index) => (
                                <span className="project-detail-tech" key={index}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-8 mt-5" data-aos="fade-up">
                        <img src={detail?.image} alt={detail?.title} className="img-fluid" />
                    </div>
                </div>

            </div>
        </section>
    )
}
export default BannerSection;