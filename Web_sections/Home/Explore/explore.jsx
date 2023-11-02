import { s3baseUrl } from "@/config/config";
import { useEffect, useState } from "react";

const ExploreSection = ({ page_data, benefit }) => {
  const salePage = page_data.sale_page_detail;

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
          {benefit.map((items, index) => {
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
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
