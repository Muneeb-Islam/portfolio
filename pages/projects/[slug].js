import HeaderController from "@/Components/Header-Controller/HeaderController";
import { projectsData } from "@/utils/projectsData";
import FooterSection from "@/Web-Layout/Footer/Footer";
import Header from "@/Web-Layout/Header/Header";
import ProjectDetailPage from "@/Web_pages/ProjectDetail/ProjectDetail";

export async function getStaticPaths() {
  const paths = projectsData.map((item) => ({
    params: { slug: item.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const detail = projectsData.find((p) => p.slug === params.slug);

  return {
    props: { detail },
  };
}

export default function PortfolioDetail({ detail }) {
  return (
    <div>
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
      <ProjectDetailPage detail={detail} />
      <FooterSection />
    </div>
  );
}
