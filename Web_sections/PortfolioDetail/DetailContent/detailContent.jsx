import Link from "next/link";

const DetailContent = ({ detail }) => {


    return (
        <section className="about_project pt-60 pb-60">
            <div className="container">
                <div className="row justify-content-center" data-aos="fade-up">
                    <div className="col-lg-11">
                        <h2>About This Project</h2>
                        <div dangerouslySetInnerHTML={{
                            __html: detail?.about_description,
                        }}></div>
                    </div>
                </div>
                <div className="project-detail-navigation" data-aos="fade-up" >
                    <Link className="view-details-btn" href="/projects">← Back to All Projects</Link>
                    <Link className="view-details-btn" href="/#contact">Start a Project →</Link></div>
            </div>

        </section>
    )
}
export default DetailContent;