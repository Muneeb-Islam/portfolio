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

  return {
    props: { detail },
  };
}

export default function PortfolioDetail({ detail }) {
  return (
    <div>
      <HeaderController
        fav_icon="/assets/logo.png"
        image="/assets/logo.png"
        title={`Byte Pulse | ${detail?.title || "Portfolio"}`}
        description={`Check out ${detail?.title} — a showcase project by Byte Pulse. Discover how we combined clean UI/UX, functionality, and scalability to meet our client’s needs.`}
        keywords="web development portfolio, mobile apps, responsive websites, case management system, planner apps, meditation apps, fitness apps, byte pulse"
        url={`https://bytepulse.co/portfolio/${detail?.slug}`}
      />
      <PortfolioDetailPage detail={detail} />
    </div>
  );
}
