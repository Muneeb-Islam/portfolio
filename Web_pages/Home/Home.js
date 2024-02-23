import Footer from "@/Web-Layout/Footer/Footer";
import Header from "@/Web-Layout/Header/Header";
import {
  AboutSection,
  BannerSection,
  ContactSection,
  ExperianceSection,
  ExploreSection,
  FeaturesSection,
  HowSection,
  PricingSection,
  Service,
  TestimonialSection,
  Top_ServiceSection,
  Why_chooseSection,
} from "@/Web_sections/Home";
import ServiceSection from "@/Web_sections/Home/Service/service";
import Animated from "../../Components/AnimatedComponent";
import FaqSection from "@/Web_sections/Home/Faq/faq";
import Brans_LogoSection from "@/Web_sections/Home/Brand-logo/brand-logo";
export default function HomePage({ result }) {
  console.log(result, "-----result");
  const sale_page = result.web_page;
  const faq = result?.faq;
  const feature = result?.feature;
  const website_workflow = result?.website_workflow;
  const benefit = result?.benefit;
  const testimonial = result?.testimonial;
  const menu_items = result?.menu_items;
  const payment_plan = result?.payment_plan;

  return (
    <div>
      <Header page_data={sale_page} />
      <BannerSection page_data={sale_page} />
      <HowSection page_data={sale_page} website_workflow={website_workflow} />
      {/* <FeaturesSection /> */}
      <Service page_data={sale_page} feature={feature} />
      {/* <Brans_LogoSection /> */}
      {/* <ServiceSection
        page_data={sale_page}
        comprehensive_services={comprehensive_services}
      /> */}

      {/* {website_program && website_program.length > 0 && (
        <Why_chooseSection
          page_data={sale_page}
          website_program={website_program}
        />
      )} */}
      {/* <AboutSection page_data={sale_page} /> */}
      <PricingSection page_data={sale_page} payment_plan={payment_plan} />

      {/* <ExploreSection page_data={sale_page} benefit={benefit} /> */}

      {/* <ExperianceSection page_data={sale_page} /> */}

      <TestimonialSection page_data={sale_page} testimonial={testimonial} />
      <FaqSection page_data={sale_page} faq={faq} />
      {/* <Top_ServiceSection
        page_data={sale_page}
        testimonial={testimonial}
        buisness_strategy={buisness_strategy}
      /> */}

      <ContactSection page_data={sale_page} />
      <Footer page_data={sale_page} menu_items={menu_items} />
      <Animated />
    </div>
  );
}
