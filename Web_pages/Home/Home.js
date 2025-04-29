import Footer from "@/Web-Layout/Footer/Footer";
import Header from "@/Web-Layout/Header/Header";
import {
  AboutSection,
  AboutSection2,
  AboutSection3,
  AboutSection4,
  AboutSection5,
  BannerSection,
  Brans_LogoSection,
  ExperianceSection,
  HowSection,
  PricingSection,
  TestimonialSection,
} from "@/Web_sections/Home";
export default function HomePage() {
  return (
    <div>
      <Header />
      <BannerSection />
      <Brans_LogoSection />
      <AboutSection />
      <AboutSection2 />
      <AboutSection3 />
      <AboutSection4 />
      <AboutSection5 />
      {/* <ServicesSection /> */}
      <HowSection />
      <TestimonialSection />
      <PricingSection />
      <ExperianceSection />
      <Footer />
    </div>
  );
}
