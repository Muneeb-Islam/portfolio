import { s3baseUrl } from "@/config/config";
import { useEffect, useState } from "react";

const ExploreSection = ({ page_data, benefit }) => {
  const salePage = page_data.sale_page_detail;
  const [explore, setExplore] = useState([]);
  useEffect(() => {
    let exploreState = benefit.map((val, i) => {
      if (i == 0) {
        return {
          ...val,
          active: "active",
        };
      } else {
        return {
          ...val,
          active: "",
        };
      }
    });
    setExplore(exploreState);
  }, []);
  return (
    <section className="explore-wrapper text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-lg-7 wow fadeInUp" >
            <span>{salePage.template_heading}</span>
            <div
             dangerouslySetInnerHTML={{
              __html: salePage.template_section_text,
            }}>

            </div>
          </div>
        </div>
        <div className="row mt-5">
          {explore.map((items, index) => {
           return(
            <>
             <div className="col-md-6 col-lg-4 wow slideInLeft">
              <div className="card">
                <img
                  src={s3baseUrl + items.image.thumbnail_1}
                  className="img-fluid"
                  alt=""
                />
                <div className="card-body">
                  <div
                    className="card-body-links"
                    dangerouslySetInnerHTML={{
                      __html:items.benifits_description_2,
                    }}
                  ></div>
                  <a href="#">
                    <h3>{items.benifits_description_1}</h3>
                  </a>
                </div>
              </div>
            </div>
            </>
           )
          })}

          {/* <div className="col-md-6 col-lg-4 mt-5 mt-md-0 wow fadeInDown">
        <div className="card">
          <img src="/assets/project-2.png" className="img-fluid" alt="" />
          <div className="card-body">
            <div className="card-body-links"><a href=""> <span>DEVELOPMENT</span></a> <span>/</span> <a
                href=""><span>IDEAS</span></a></div>
            <a href="#">
              <h3>Hair & Beauty</h3>
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mt-5 mt-lg-0 wow slideInRight">
        <div className="card">
          <img src="/assets/project-3.png" className="img-fluid" alt="" />
          <div className="card-body">
            <div className="card-body-links"><a href=""> <span>IDEAS</span> </a> <span>/</span> <a
                href=""><span>TECHNOLOGY</span></a></div>
            <a href="#">
              <h3>Fitness</h3>
            </a>
          </div>
        </div>
      </div> */}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
