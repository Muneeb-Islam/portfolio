
import HeaderController from "@/Components/Header-Controller/HeaderController";
import ProfAbout from "@/Web_pages/Home/ProfAbout";
import ProfChooseMe from "@/Web_pages/Home/ProfChooseMe";
import ProfConnect from "@/Web_pages/Home/ProfConnect";
import ProfHero from "@/Web_pages/Home/ProfHero";
import ProfIdea from "@/Web_pages/Home/ProfIdea";
import ProfPojects from "@/Web_pages/Home/ProfPojects";
import ProfProcess from "@/Web_pages/Home/ProfProcess";
import ProfServices from "@/Web_pages/Home/ProfServices";
import ProfStats from "@/Web_pages/Home/ProfStats";
import ProfTech from "@/Web_pages/Home/ProfTech";
import ProfTestmonials from "@/Web_pages/Home/ProfTestmonials";

export default function Home() {
  return (
    <>
      <HeaderController
        title="Muneeb Islam | SaaS, Web & Mobile App Developer"
        description="I build production-ready SaaS platforms, web apps, mobile apps, admin dashboards, backend APIs, and cloud deployments for startups and businesses."
        url="https://muneebislam.devflips.com/"
        image="https://muneebislam.devflips.com/og-image.jpg"
        // fav_icon="/favicon.ico"
        keywords="Muneeb Islam, SaaS developer, web app developer, mobile app developer, full stack developer, React developer, Next.js developer, Node.js developer, admin dashboard developer, backend API developer, cloud deployment, startup MVP developer, software developer portfolio"
        author="Muneeb Islam"
        publisher="Muneeb Islam"
      />
      <main className="min-h-screen bg-white text-slate-950">
        <ProfHero />
        <ProfStats />
        <ProfAbout />
        <ProfServices />
        <ProfTech />
        <ProfPojects />
        <ProfProcess />
        <ProfChooseMe />
        <ProfTestmonials />
        <ProfIdea />
        <ProfConnect />
      </main>
    </>
  );
}
