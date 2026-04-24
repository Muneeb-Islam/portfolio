import HeaderController from "@/Components/Header-Controller/HeaderController";
import FooterSection from "@/New-Web-Layout/Footer/Footer";
import Header from "@/New-Web-Layout/Header/Header";
import { BannerSection, GetInTouch, IndustrySection, OurProjects, PerformanceSection, PricingSection, ProcessSection, Qualification, TeamSection, TestimonialSection } from "@/Web_sections/NewHome";

export default function NewHome() {
  return (
    <>
      <HeaderController
        fav_icon="/assets/muneeb/profile.png"
        // image={s3baseUrl + brand_favicon}
        title="Muneeb Islam"
        description="Backend Architect & DevOps engineer"
        keywords="7 Years Backend Experience,
               SaaS + DevOps + Architecture Focus,
               International Clients,
               Hybrid (Job + Client focused)"

      />
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
    </>
  );
}
