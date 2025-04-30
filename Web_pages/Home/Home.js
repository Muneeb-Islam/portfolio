import { scrollToHash } from "@/utils/constants";
import Footer from "@/Web-Layout/Footer/Footer";
import Header from "@/Web-Layout/Header/Header";
import { ContactSection } from "@/Web_sections/Contact";
import {
  AboutSection,
  AboutSection2,
  AboutSection3,
  AboutSection5,
  BannerSection,
  Brans_LogoSection,
  ExperianceSection,
  HowSection,
  PricingSection,
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
      <AboutSection />
      <AboutSection2 />
      <AboutSection3 />
      <ServicesSection />
      {/* <AboutSection4 /> */}
      <AboutSection5 />
      <HowSection />
      <TestimonialSection />
      <PricingSection />
      <ExperianceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
