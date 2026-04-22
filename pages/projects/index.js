import HeaderController from "@/Components/Header-Controller/HeaderController";
import { ProjectPage } from "@/Web_pages";

export default function Home() {
  return (
    <>
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
      <ProjectPage />
    </>
  );
}
