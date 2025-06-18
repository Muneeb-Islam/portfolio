import { scrollToHash } from "@/utils/constants";
import Footer from "@/Web-Layout/Footer/Footer";
import Header from "@/Web-Layout/Header/Header";
import { ContactSection } from "@/Web_sections/Contact";
import {
  Achievements,
  BannerSection,
  Brans_LogoSection,
  Experties,
  HowSection,
  ServicesSection,
  TestimonialSection,
} from "@/Web_sections/Home";
import { useEffect } from "react";
export default function HomePage() {
  useEffect(() => {
    scrollToHash();
  }, []);

  return (
    <div>
      <Header />
      <BannerSection />
      <Brans_LogoSection />
      <Achievements />
      <HowSection />
      <ServicesSection />
      <Experties />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
