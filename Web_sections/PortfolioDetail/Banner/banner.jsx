import Link from "next/link";

const BannerSection = ({ detail }) => {
  console.log(detail, "detail");

  return (
    <section
      className="breadcrumbs  hero-section mt-sm-60"
      style={{ minHeight: "auto" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-11">
            <div className="links-text mb-2 mb-lg-4">
              <Link href="/">
                <span>Home</span> /
              </Link>
              <Link href="/projects">
                {" "}
                <span>Projects</span> /{" "}
              </Link>
              <span>{detail?.title}</span>
            </div>
          </div>
          <div className="col-lg-7 ">
            <div className="badge-pill">{detail?.sub_title}</div>
            <h1>{detail.title}</h1>
            <p>{detail.description}</p>
            <h3>Technologies Used:</h3>
            <div className="project-tags mt-3 ">
              {detail?.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12 mt-5 ">
            <img
              src={detail?.image}
              alt={detail?.title}
              className="img-fluid rounded w-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default BannerSection;
