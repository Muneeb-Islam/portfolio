import HeaderController from "@/Components/Header-Controller/HeaderController";
import { HomePage } from "@/Web_pages";

export default function Home() {
  return (
    <>
      <HeaderController
        fav_icon="/assets/logo.png"
        // image={s3baseUrl + brand_favicon}
        title="Byte Pulse"
        description="Byte Pulse is a modern and dynamic portfolio website showcasing innovative projects, creative design, and cutting-edge development skills. Explore work samples, skills, and contact information all in one place"
        keywords="App Development Services,
                Web Development Services,
                React Native App Development,
                UI/UX Design Services,
                PHP MySQL Web Development,
                Custom CMS and CRM Development,
                ReactJS and NodeJS Development,
                Mobile App Development in Pakistan,
                best app development company,
                portfolio for clients,
                branding & design services,
                content creation portfolio,
                website design services"
                 url="https://bytepulse.co"
      />
      <HomePage />
    </>
  );
}
