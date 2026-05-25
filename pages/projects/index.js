import ProfIdea from "@/Web_pages/Home/ProfIdea";
import ProjectsHero from "@/Web_pages/Projects/ProjectsHero";
import ProjectsGridSection from "@/Web_pages/Projects/ProjectsListing";

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGridSection />
      <ProfIdea />
      {/* <ProjectsCTA /> */}
    </>
  );
}