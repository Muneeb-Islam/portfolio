import Link from "next/link";
import { useEffect, useRef } from "react";


const GetInTouch = ({ setBgColor }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!setBgColor) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setBgColor("#f1f8e9"); // light green
      },
      { threshold: 0.6 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [setBgColor]);

  return (
    <section
      className="contact-box mt-80 pt-60 pb-60"
      id="contact"
      ref={sectionRef}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6">
            <span>Get in touch</span>
            <h2>Let’s Work Together</h2>
            <p>I’m open for new opportunities – especially ambitious or large projects. However, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!.</p>
            <Link href="" className="view-details-btn">Say Hello</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
