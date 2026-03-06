import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
const sectionIds = ["achievement", "services", "testimonial", "bookACall"];

const Header = () => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  console.log(open, "openopen")
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let found = "";

      // Scroll background change logic
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section logic
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            found = id;
            break;
          }
        }
      }
      setActiveSection(found);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [router.pathname]);

  const handleNavClick = (hash) => {
    const scrollToSection = () => {
      const el = document.getElementById(hash);
      if (el) {
        const yOffset =
          -document.querySelector(".header_wrapper")?.offsetHeight || -80;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };

    if (router.pathname === "/") {
      scrollToSection();
    } else {
      router.push(`/#${hash}`);
    }
  };

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          const yOffset =
            -document.querySelector(".header_wrapper")?.offsetHeight || -80;
          const y =
            el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 300); // slightly increase timeout to ensure element is rendered
    }
  }, []);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`header_wrapper sticky-navbar ${isScrolled ? "scrolled" : ""
        }`}
    >
      <div className="container-fluid px-lg-5">
        <nav className="navbar  py-0" >
          <div className="logo-bg">
            <a className="navbar-brand" href="/">
              <img
                src="/assets/muneeb/profile.png"
                className="img-fluid brand-logo mb-0"
                alt="Brand Logo"
              />
            </a></div>
          <div className="d-flex justify-content-end">
            <Link className="view-details-btn me-lg-4" href="">Curriculum Vitae | CV</Link>
            <button
              className="toggle"
              type="button"
              onClick={() => setOpen(prev => !prev)}
            >
              <span className="navbar-toggler-icon">
                <Icon icon="fa7-solid:bars-staggered" width={30} />
              </span>
            </button>
          </div>
          <div className={`radial-nav top-right ${open ? "open" : ""}`} ref={menuRef}>
            <ul className="radial-menu">
              <li className="disc l1"><span>Home</span></li>
              <li className="disc l2"><span>My Self</span></li>
              <li className="disc l3"><span>Experience</span></li>
              <li className="disc l4"><span>My Work</span></li>
              <li className="disc l5"><span>All Projects</span></li>
              <li className="disc l6"><span>Reviews</span></li>
              <li className="disc l7"><span>Certifications</span></li>
              <li className="disc l8"><span>Contact</span></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>

  );
};

export default Header;
