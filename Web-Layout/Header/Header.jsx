import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
const sectionIds = ["achievement", "services", "testimonial", "bookACall"];

const Header = () => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  console.log(open, "openopen");
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
      className={`header_wrapper sticky-navbar ${isScrolled ? "scrolled" : ""}`}
    >
      <div class="container">
        <nav class="navbar navbar-expand-xl d-flex align-items-center p-0">
          <a class="navbar-brand d-flex align-items-center" href="/">
            <span>MI</span>
            <h5 class="px-0 fw-bold logo mb-0 ps-2">Muneeb Islam</h5>
          </a>

          <button
            class="navbar-toggler"
            type="submit"
            data-bs-toggle="collapse"
            data-bs-target="#id_vesmsgjxog_navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon">
              <i class="fas fa-bars"></i>
            </span>
          </button>
          <div
            class="collapse navbar-collapse"
            id="id_vesmsgjxog_navbarSupportedContent"
          >
            <ul class="navbar-nav m-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="/#qualification">
                  Qualification
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link " href="/#projects">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#industry" aria-disabled="true">
                  Industry Area
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="/#pricing">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#team" aria-disabled="true">
                  Team
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact" aria-disabled="true">
                  Contact
                </a>
              </li>
            </ul>

            <div class="text-start">
              <a href="#contact" class="contained-btn">
                <span>Let's Work Together</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
