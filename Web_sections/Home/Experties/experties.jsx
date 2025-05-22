import Link from "next/link";

const Experties = () => {
  return (
    <section className="experties_wrapper mt-80 pt-60 pb-60 bg-light-blue" id="experties">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 text-center">
            <h2>Our Industry <span className="font-style">Expertise</span></h2>
            <p>We empower diverse industries with scalable, data-driven solutions — enabling smarter decisions, seamless operations, and sustainable growth.</p>
          </div>
        </div>
        <div className="row justify-content-center">
          {[
            {
              img: "/assets/healthcare-1.svg",
              title: "Healthcare",
              desc: "Empowering care delivery with digital automation, smart health dashboards, and secure data handling."
            },
            {
              img: "/assets/bank.svg",
              title: "Banking",
              desc: "Streamlining banking operations with custom dashboards, user-friendly portals, and real-time reporting."
            },
            {
              img: "/assets/investment-blue.svg",
              title: "Investment",
              desc: "Smart investment tools powered by real-time analytics, predictive insights, and intuitive interfaces."
            },
            {
              img: "/assets/manufacturing-green.svg",
              title: "Manufacturing",
              desc: "Automating production processes with AI-powered systems to boost productivity and minimize manual tasks."
            },
            {
              img: "/assets/professional-services-yellow.svg",
              title: "Professional Services",
              desc: "Helping professionals scale with CRM platforms, task automation, and personalized analytics."
            },
            {
              img: "/assets/transportation.svg",
              title: "Transportation",
              desc: "Improving logistics through smart tracking systems, central dashboards, and data synchronization."
            },
            {
              img: "/assets/construction-green.svg",
              title: "Engineering and Construction",
              desc: "Digitizing workflows with centralized data platforms, predictive scheduling, and visual dashboards."
            },
            {
              img: "/assets/telecom-yellow.svg",
              title: "Telecoms",
              desc: "Delivering scalable digital solutions for user management, billing automation, and network analytics."
            }
          ].map((item, idx) => (
            <div className="col-md-6 col-lg-3 mt-3" key={idx}>
              <div className="experties-card text-center">
                <img src={item.img} alt={item.title} className="img-fluid" />
                <h3>{item.title}</h3>
                <p >{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-3 mt-lg-5">
           <Link href="/contact" className="contained-button">
                        Request A Quote 
                        <span className="circle"></span>
                      </Link>
        </div>
      </div>
    </section>
  );
};

export default Experties;
