import Footer from "@/Web-Layout/Footer/Footer";
import Header from "@/Web-Layout/Header/Header";
import {
  BannerSection,
  DetailSection,
  SliderSection,
} from "@/Web_sections/PortfolioDetail";

export default function PortfolioDetailPage({ detail }) {
  const images = detail?.images;
  return (
    <div>
      <Header />
      <BannerSection detail={detail} />
      {/* <BreadCrumbsSection /> */}
      <SliderSection images={images} />
      <DetailSection detail={detail} />
      <Footer />
    </div>
  );
}
