import HeaderController from "@/Components/Header-Controller/HeaderController";
import FooterSection from "@/New-Web-Layout/Footer/Footer";
import Header from "@/New-Web-Layout/Header/Header";
import { NewBannerSection, NewGetInTouch, NewIndustrySection, NewOurProjects, NewPerformanceSection, NewPricingSection, NewQualification, NewTeamSection, NewTestimonialSection } from "@/Web_sections/NewHome";
import NewProcessSection from "@/Web_sections/NewHome/Process/NewProcess";

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
      <NewBannerSection />
      <NewQualification />
      <NewOurProjects />
      <NewIndustrySection />
      <NewPerformanceSection />
      <NewTestimonialSection />
      <NewProcessSection />
      <NewPricingSection />
      <NewTeamSection />
      <NewGetInTouch />
      <FooterSection />
    </>
  );
}
