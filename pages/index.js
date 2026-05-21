
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
  );
}
