import { Icon } from "@iconify/react";
import Link from "next/link";
import { useEffect, useRef } from "react";


const Certification = ({ setBgColor }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!setBgColor) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setBgColor("#222831"); // light lavender
      },
      { threshold: 0.6 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [setBgColor]);
  const certifications = [
    {
      id: 1,
      title: "Full Stack Developer",
      organization: "DigiPakistan",
      issued: "Dec 2023",
      logo: "/assets/muneeb/DigiPakistan.png",
      link: "#"
    },
    {
      id: 2,
      title: "MERN Stack Developer",
      organization: "Jawan Pakistan",
      issued: "Feb 2022",
      logo: "/assets/muneeb/JawanPakistan.jpeg",
      link: "#"
    },
    {
      id: 3,
      title: "AWS, Microservices & Serverless Framework",
      organization: "Self Learning",
      issued: "Aug 2022",
      logo: "/assets/muneeb/aws.png",
      link: "#"
    },
    {
      id: 4,
      title: "SEO - Search Engine Optimization",
      organization: "DigiSkills",
      issued: "Aug 2020",
      logo: "/assets/muneeb/digiskills.png",
      link: "#"
    },
    {
      id: 5,
      title: "WordPress Developer",
      organization: "DigiSkills",
      issued: "Aug 2020",
      logo: "/assets/muneeb/digiskills.png",
      link: "#"
    },
    {
      id: 6,
      title: "Graphic Designer",
      organization: "DigiSkills",
      issued: "May 2020",
      logo: "/assets/muneeb/digiskills.png",
      link: "#"
    }
  ];
  return (
    <section className="certification_wrapper  mt-80" id="services" ref={sectionRef}>
      <div className="container">
        <div className="certifications-top-background"></div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="certifications-container">
              <h2 data-aos="zoom-in-right">Licenses & certifications</h2>
              <div className="row  mt-4">
                {certifications.map((cert, index) => (
                  <div className="col-md-6 col-lg-4 mb-4 " key={cert.id} data-aos={index % 2 === 0 ? "zoom-out-left" : "zoom-out-right"}>
                    <div className="certificate-card">

                      <div className="cert-header">
                        <img src={cert.logo} alt={cert.title} className="img-fluid" />
                        <Link href={cert.link} target="_blank">
                          <Icon icon="icon-park-outline:share" width="20" />
                        </Link>
                      </div>

                      <div className="flex-1 mt-3 mt-lg-4">
                        <h3>{cert.title}</h3>
                        <p>{cert.organization}</p>
                      </div>

                      <div className="issued">
                        Issued {cert.issued} · No Expiration Date
                      </div>

                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>



      </div>
    </section>
  );
};

export default Certification;
