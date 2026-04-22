import FooterSection from "@/Web-Layout/Footer/Footer";
import Header from "@/Web-Layout/Header/Header";
import { GetInTouch } from "@/Web_sections/Home";
import { OurProjects, ProjectBanner } from "@/Web_sections/Projects";


export default function ProjectPage() {
  return (
    <div>
      <Header />
      {/* <ProjectBanner /> */}
      <OurProjects />
      <GetInTouch />
      <FooterSection />
    </div>
  );
}
