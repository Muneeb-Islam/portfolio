import { BannerSection, DetailContent } from "@/Web_sections/PortfolioDetail";



export default function ProjectDetailPage({ detail }) {
  console.log(detail, "detailllll")
  return (
    <div>

      <BannerSection detail={detail} />
      <DetailContent detail={detail} />
    </div>
  );
}
