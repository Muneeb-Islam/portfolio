import Footer from "@/Web-Layout/Footer/Footer";
import Header from "@/Web-Layout/Header/Header";
import {
  BannerSection,
  DetailSection,
  SliderSection,
} from "@/Web_sections/PortfolioDetail";

export default function PortfolioDetailPage() {
  return (
    <div>
      <Header />
      <BannerSection />
      {/* <BreadCrumbsSection /> */}
      <SliderSection />
      <DetailSection />
      <Footer />
    </div>
  );
}
