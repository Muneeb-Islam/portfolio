import HeaderController from "@/Components/Header-Controller/HeaderController";
import { PortfolioPage } from "@/Web_pages";

export default function Portfolio() {
  return (
    <>
      <HeaderController
        fav_icon="/assets/logo.png"
        image="/assets/logo.png"
        title="Byte Pulse Portfolio"
        description="Explore our diverse portfolio featuring powerful web and mobile applications including client management systems, responsive websites, meditation apps, planners, fitness timers, and privacy tools. From investigative services to wellness and productivity, we deliver tailored digital solutions."
        keywords="web development portfolio, mobile app development, case management system, meditation app, fitness timer app, responsive websites, planner app, client admin management, wellness apps, scam prevention app, cruise countdown app, productivity apps, byte pulse portfolio"
          url="https://bytepulse.co/portfolio"
      />
      <PortfolioPage />
    </>
  );
}
