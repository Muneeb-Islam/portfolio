import HeaderController from "@/Components/Header-Controller/HeaderController";
import { CareerPage } from "@/Web_pages";

export default function Career() {
  return (
    <>
      <HeaderController
        fav_icon="/assets/logo.png"
        // image={s3baseUrl + brand_favicon}
        title=" Submit Your CV & Join Our Team"
        description="Explore career opportunities at Byte Pulse. Submit your CV and become part of a dynamic team building innovative digital solutions for web and mobile platforms."
        keywords="byte pulse careers, submit cv, tech jobs, join byte pulse, software developer jobs, UI/UX designer jobs, web development careers, mobile app development jobs, digital agency hiring"
           url="https://bytepulse.co/career"
      />
      <CareerPage />
    </>
  );
}
  
         