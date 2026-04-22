import { scrollToHash } from "@/utils/constants";
import FooterSection from "@/Web-Layout/Footer/Footer";
import Header from "@/Web-Layout/Header/Header";
import {
  BannerSection,
  GetInTouch,
  IndustrySection,
  OurProjects,
  PerformanceSection,
  PricingSection,
  ProcessSection,
  Qualification,
  TeamSection,
  TestimonialSection,
} from "@/Web_sections/Home";
export default function HomePage() {
  return (
    <div>
      <Header />
      <BannerSection />
      <Qualification />
      <OurProjects />
      <IndustrySection />
      <PerformanceSection />
      <TestimonialSection />
      <ProcessSection />
      <PricingSection />
      <TeamSection />
      <GetInTouch />
      <FooterSection />

    </div>
  );
}
