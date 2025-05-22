import HeaderController from "@/Components/Header-Controller/HeaderController";
import { ContactPage } from "@/Web_pages";

export default function Contact() {
  return (
    <>
      <HeaderController
        fav_icon="/assets/logo.png"
        image="/assets/logo.png"
        title=" Get in Touch"
        description="Have a project in mind or need expert guidance? Get in touch with Byte Pulse today. We’re here to help you build digital solutions that scale and succeed."
        keywords="contact byte pulse, contact web development agency, get in touch, software development contact, app development agency contact, website design company, digital agency contact"
        url="https://bytepulse.co/contact"
      />
      <ContactPage />
    </>
  );
}
