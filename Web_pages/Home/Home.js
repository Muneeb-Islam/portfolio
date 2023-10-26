import Footer from "@/Web-Layout/Footer/Footer";
import Header from "@/Web-Layout/Header/Header";
import {
  AboutSection,
  BannerSection,
  Brans_LogoSection,
  ContactSection,
  ExperianceSection,
  ExploreSection,
  PricingSection,
  Top_ServiceSection,
  Why_chooseSection,
} from "@/Web_sections/Home";
import ServiceSection from "@/Web_sections/Home/Service/service";

export default function HomePage() {
  return (
    <div>
      <Header />
      <BannerSection />
      <ServiceSection />
      <AboutSection />
      <Why_chooseSection />
      {/* <PricingSection /> */}
      <ExploreSection />
      <ExperianceSection />
      <Top_ServiceSection />
      <Brans_LogoSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
