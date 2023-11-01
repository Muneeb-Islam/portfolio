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

export default function HomePage({ page_data }) {
  const sale_page = page_data.Sale_page;
  const slider = page_data.slider;
  const buisness_strategy = page_data.buisness_strategy;
  const website_program = page_data.website_program;
  const comprehensive_services = page_data.comprehensive_services;
  const benefit = page_data.benefit;
  const testimonial = page_data.testimonial;
  const menu_items = page_data.menu_items;
  // console.log(buisness_strategy, "--buisness_strategy");

  return (
    <div>
      <Header page_data={sale_page} />
      <BannerSection page_data={sale_page} slider={slider} />

      <ServiceSection
        page_data={sale_page}
        comprehensive_services={comprehensive_services}
      />

      <AboutSection page_data={sale_page} />
      {website_program && website_program.length > 0 && (
        <Why_chooseSection
          page_data={sale_page}
          website_program={website_program}
        />
      )}

      {/* <PricingSection /> */}

      <ExploreSection page_data={sale_page} benefit={benefit} />

      <ExperianceSection page_data={sale_page} />
      <Top_ServiceSection
        page_data={sale_page}
        testimonial={testimonial}
        buisness_strategy={buisness_strategy}
      />
      <Brans_LogoSection page_data={sale_page} />
      <ContactSection page_data={sale_page} />
      <Footer page_data={sale_page} menu_items={menu_items} />
    </div>
  );
}
