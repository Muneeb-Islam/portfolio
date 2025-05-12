const BannerSection = ({ detail }) => {


    return (
        <section className="porfolio_banner breadcrumbs mt-3 mt-lg-5">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-8">
                        <ol className="justify-content-center mb-2">
                            <li><a href="/">Home</a></li>
                            <li>Portfolio Detail</li>
                        </ol>
                        <h2>{detail.title}</h2>
                        <p>{detail.description}</p>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default BannerSection;