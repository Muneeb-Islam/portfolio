import CursorBlob from "@/Components/CursorBlob/cursorBlob";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const BannerSection = ({ setBgColor }) => {

  const roles = [
    "Backend Engineer",
    "DevOps Specialist",
    "Cloud Architect"
  ];

  const [displayText, setDisplayText] = useState("");

  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const blobRef = useRef(null);
  const sectionRef = useRef(null);
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    const speed = 0.08;

    const moveBlob = () => {
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;

      // Calculate floating offset based on time
      const time = Date.now() * 0.0005;
      const floatY = Math.sin(time) * 40; // Vertical floating
      const floatX = Math.cos(time * 0.7) * 20; // Horizontal floating

      if (blobRef.current) {
        blobRef.current.style.transform =
          `translate3d(${currentX + floatX}px, ${currentY + floatY}px, 0)`;
      }

      requestAnimationFrame(moveBlob);
    };

    const handleMouseMove = (e) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;

      mouseX = e.clientX - rect.left - 125;
      mouseY = e.clientY - rect.top - 125;

      const inner = blobRef.current?.querySelector(".cursor-blob-inner");

      if (inner) {
        inner.classList.remove("animate");
        void inner.offsetWidth; // force reflow (important)
        inner.classList.add("animate");
      }
    };

    sectionRef.current?.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(moveBlob);

    return () => {
      sectionRef.current?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  useEffect(() => {
    if (!setBgColor || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setBgColor("#ffffff");
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -20% 0px", // triggers slightly earlier
      }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [setBgColor]);
  useEffect(() => {
    const typingSpeed = 80;

    const currentRole = roles[roleIndex];

    const timeout = setTimeout(() => {
      setDisplayText(currentRole.slice(0, charIndex + 1));
      setCharIndex(prev => prev + 1);

      if (charIndex + 1 === currentRole.length) {
        setCharIndex(0);
        setRoleIndex(prev => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, roleIndex]);
  return (
    <section
      className="banner_wrapper mt-3 mt-lg-4 pb-60 pt-60 cursor-section" ref={sectionRef}>
      <div className="side-elements-container side-elements-left d-none d-lg-block">
        <ul>
          <li><Link href=""><Icon icon="mynaui:github" width={20} /></Link></li>
          <li><Link href=""><Icon icon="si:youtube-line" width={20} /></Link></li>
          <li><Link href=""><Icon icon="lets-icons:insta" width={20} /></Link></li>
          <li><Link href=""><Icon icon="mingcute:twitter-line" width={20} /></Link></li>
          <li><Link href=""><Icon icon="eva:linkedin-outline" width={20} /></Link></li>
          <li>      <div className="side-elements-line"></div></li>
        </ul>
      </div>
      <div className="side-elements-container side-elements-right d-none d-lg-block">
        <ul>
          <li className="side-elements-text"><Link href="mailto:muneebislamdev@gmail.com">muneebislamdev@gmail.com</Link></li>
          <li><div className="side-elements-line"></div></li>
        </ul>
      </div>
      <div className="cursor-blob" ref={blobRef}>
        <div className="cursor-blob-inner"></div>
      </div>
      <div className="container pt-60" >
        <div className="row justify-content-center">
          <div className="col-11 content">
            <div className="row">
              <div className="col-lg-7">
                <h1>G'day, I'm
                  Muneeb Islam</h1>
                <h2 className="typing-role">
                  {displayText}
                </h2>
                <p>I’m a skilled Backend Engineer with over 7 years of experience in designing and deploying scalable SaaS platforms for startups and enterprise clients worldwide. Specializing in DevOps and cloud-native architecture, I build robust backend systems, automate CI/CD pipelines, and develop secure microservices that ensure high performance and reliability. My expertise lies in creating production-ready infrastructure using modern cloud technologies, enabling businesses to scale seamlessly across global environments. With a deep understanding of distributed systems and application lifecycle management, I consistently deliver efficient, maintainable, and future-proof solutions. If you're looking for a reliable Backend Engineer to architect and optimize your SaaS platform, I’m here to help!</p>
              </div>

            </div>
            <Link className="view-details-btn" href="">Contact me!</Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
