import { Icon } from "@iconify/react";

const NewTestimonialSection = () => {
  return (
    <section className="industry-section mt-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="badge-pill">CLIENT FEEDBACK</div>

            <h2>Trusted for clarity, speed, and dependable execution.</h2>

            <p>
              Client-facing delivery is not only about shipping code. It is
              about communication, ownership, and confidence throughout the
              work.
            </p>
          </div>
        </div>

        <div className="industry-grid mt-4">
          <div className="industry-card">
            <div className="d-flex">
              <Icon icon="mdi:star" width="20" height="17" color="#eace30" />
              <Icon icon="mdi:star" width="17" height="17" color="#eace30" />
              <Icon icon="mdi:star" width="17" height="17" color="#eace30" />
              <Icon icon="mdi:star" width="17" height="17" color="#eace30" />
              <Icon icon="mdi:star" width="17" height="17" color="#eace30" />
            </div>
            <p>
              Muneeb handled both development and deployment with a very
              structured mindst The process stayed clear, and the outcome was
              strong.
            </p>
            <div className="d-flex align-items-center mt-2">
              <div className="industry-number">AK</div>
              <div className="ms-3">
                <h4>Ali Khan</h4>
                <p>Product Owner</p>
              </div>
            </div>
          </div>

          <div className="industry-card">
            <div className="d-flex">
              <Icon icon="mdi:star" width="20" height="17" color="#eace30" />
              <Icon icon="mdi:star" width="17" height="17" color="#eace30" />
              <Icon icon="mdi:star" width="17" height="17" color="#eace30" />
              <Icon icon="mdi:star" width="17" height="17" color="#eace30" />
              <Icon icon="mdi:star" width="17" height="17" color="#eace30" />
            </div>
            <p>
              A rare combination of engineering quality and practical
              leadership. He improved the system and also improved how the team
              worked.
            </p>
            <div className="d-flex align-items-center mt-2">
              <div className="industry-number">SM</div>
              <div className="ms-3">
                <h4>Sarah Malik</h4>
                <p>Startup Founder</p>
              </div>
            </div>
          </div>
          <div className="industry-card">
            <div className="d-flex">
              <Icon icon="mdi:star" width="20" height="17" color="#eace30" />
              <Icon icon="mdi:star" width="17" height="17" color="#eace30" />
              <Icon icon="mdi:star" width="17" height="17" color="#eace30" />
              <Icon icon="mdi:star" width="17" height="17" color="#eace30" />
              <Icon icon="mdi:star" width="17" height="17" color="#eace30" />
            </div>
            <p>
              From frontend polish to cloud deployment, everything felt
              professional Communication www.responsive and the delivery stayed
              on target.
            </p>
            <div className="d-flex align-items-center mt-2">
              <div className="industry-number">HR</div>
              <div className="ms-3">
                <h4>Hassan Raza</h4>
                <p>Operations Lead</p>
              </div>
            </div>
          </div>
          <div className="industry-card">
            <div className="d-flex">
              <Icon icon="mdi:star" width="20" height="17" color="#eace30" />
              <Icon icon="mdi:star" width="17" height="17" color="#eace30" />
              <Icon icon="mdi:star" width="17" height="17" color="#eace30" />
              <Icon icon="mdi:star" width="17" height="17" color="#eace30" />
              <Icon icon="mdi:star" width="17" height="17" color="#eace30" />
            </div>
            <p>
              Zain consistently delivered high-quality work with great attention
              to detail. Communication was clear throughout, and deadlines were
              always met without compromising on quality.
            </p>
            <div className="d-flex align-items-center mt-2">
              <div className="industry-number">FA</div>
              <div className="ms-3">
                <h4>Faisal Ahmed</h4>
                <p>CTO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewTestimonialSection;
