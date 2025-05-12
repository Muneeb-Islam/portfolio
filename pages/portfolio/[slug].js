import HeaderController from "@/Components/Header-Controller/HeaderController";
import { portfolioItems } from "@/Components/portfolioData/portfolioData";
import { PortfolioDetailPage } from "@/Web_pages";
export async function getStaticPaths() {
  const paths = portfolioItems.map((item) => ({
    params: { slug: item.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const detail = portfolioItems.find((p) => p.slug === params.slug);
  // const detail = portfolioItems.find(item => item.slug === slug);

  return {
    props: { detail },
  };
}

export default function PortfolioDetail({ detail }) {
  console.log(detail, "detaildetail");
  return (
    <div>
      <HeaderController
        fav_icon="/assets/logo.png"
        // image={s3baseUrl + brand_favicon}
        title="Byte Pulse Portfolio"
        description="Here are some of the projects that showcase our design and development skills. Each project reflects our commitment to clean code, intuitive user interfaces, and performance-driven experiences"
      />
      <PortfolioDetailPage detail={detail} />
    </div>
  );
}
