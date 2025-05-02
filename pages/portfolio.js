import HeaderController from "@/Components/Header-Controller/HeaderController";
import { PortfolioPage } from "@/Web_pages";

export default function Portfolio() {
  return (
    <>
      <HeaderController
        fav_icon="/assets/logo.png"
        // image={s3baseUrl + brand_favicon}
        title="Byte Pulse Portfolio"
        description="Here are some of the projects that showcase our design and development skills. Each project reflects our commitment to clean code, intuitive user interfaces, and performance-driven experiences"
        // keywords={meta_keywords}
      />
      <PortfolioPage />
    </>
  );
}
