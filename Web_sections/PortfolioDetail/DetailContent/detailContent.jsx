import Link from "next/link";

const DetailContent = ({ detail }) => {
  return (
    <section className="about_project mt-60">
      <div className="container">
        <div className="row justify-content-center" data-aos="fade-up">
          <div className="col-lg-11">
            <h2>About This Project</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: detail?.about_description,
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DetailContent;
