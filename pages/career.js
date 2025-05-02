import HeaderController from "@/Components/Header-Controller/HeaderController";
import { CareerPage } from "@/Web_pages";

export default function Career() {
  return (
    <>
      <HeaderController
        fav_icon="/assets/logo.png"
        // image={s3baseUrl + brand_favicon}
        title="Byte Pulse"
        description="Byte Pulse is a modern and dynamic portfolio website showcasing innovative projects, creative design, and cutting-edge development skills. Explore work samples, skills, and contact information all in one place"
        // keywords={meta_keywords}
      />
      <CareerPage />
    </>
  );
}
