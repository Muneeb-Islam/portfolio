// components/DetailSection.js

const DetailSection = ({ detail }) => {
    if (!detail) return null;

    return (
        <section className="portfolio_detail m-40">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-8 feature_list">
                        <h3>{detail.featureHeading}</h3>
                        <div dangerouslySetInnerHTML={{ __html: detail.featureList }} />
                        {/* {detail.testimonial && (
                            <div className="testimonial-item">
                                <p>
                                    <i className="fa-solid fa-quote-left pe-2"></i>
                                    <span>{detail.testimonial.text}</span>
                                    <i className="fa-solid fa-quote-right ps-2"></i>
                                </p>
                                <div>
                                    <img src={detail.testimonial.image} className="testimonial-img" alt="" />
                                    <h4>{detail.testimonial.name}</h4>
                                    <p className="mb-0">{detail.testimonial.role}</p>
                                </div>
                            </div>
                        )} */}
                        <p>{detail.additionalText}</p>
                    </div>
                    <div className="col-lg-3 mt-3 mt-lg-0">
                        <div className="portfolio-info">
                            <h3>Detail information</h3>
                            <ul>
                                <li><span>Category</span> {detail.category}</li>
                                {/* <li><span>Client</span> {detail.client}</li> */}
                                {/* <li><span>detail date</span> {detail.detailDate}</li> */}
                                <li><span>Project URL</span> <a href={detail.url} target="_blank" rel="noreferrer">{detail.url}</a></li>
                                {/* <li><a href={detail.url} target="_blank" rel="noreferrer" className="btn-visit align-self-start">Visit Website</a></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailSection;
