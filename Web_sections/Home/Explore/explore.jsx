const ExploreSection = () => {
return (
  <section className="explore-wrapper text-center">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <span>WE MAKE CONNECTIONS</span>
          <h2>Explore Our Templates </h2>
          <p>We provide you with multiple templates that let you make websites like life coaching and Education within a few minutes. </p>
           {/* <a href="#" className="all-services">ALL PROJECTS<i className="fa-solid fa-arrow-right ms-3"></i></a>  */}
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6 col-lg-4">
          <div className="card">
            <img src="/assets/project-1.png" className="img-fluid" alt="" />
            <div className="card-body">
              <div className="card-body-links"><a href=""><span> DESIGN</span></a> <span>/ </span><a href=""><span>DEVELOPMENT</span></a></div>
              <a href="#">
                <h3>Business Plans</h3>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mt-5 mt-md-0">
          <div className="card">
            <img src="/assets/project-2.png" className="img-fluid" alt="" />
            <div className="card-body">
              <div className="card-body-links"><a href=""> <span>DEVELOPMENT</span></a> <span>/</span> <a href=""><span>IDEAS</span></a></div>
              <a href="#">
                <h3>Hair & Beauty</h3>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mt-5 mt-lg-0">
          <div className="card">
            <img src="/assets/project-3.png" className="img-fluid" alt="" />
            <div className="card-body">
              <div className="card-body-links"><a href=""> <span>IDEAS</span> </a> <span>/</span> <a href=""><span>TECHNOLOGY</span></a></div>
              <a href="#">
                <h3>Fitness</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
}

export default ExploreSection;