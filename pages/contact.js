import HeaderController from "@/Components/Header-Controller/HeaderController";
import { ContactPage } from "@/Web_pages";

export default function Contact() {
  return (
    <>
      <HeaderController
        fav_icon="/assets/logo.png"
        // image={s3baseUrl + brand_favicon}
        title=" Get in Touch"
        description="Have a project in mind or just want to say hello? Feel free to reach out!"
        // keywords={meta_keywords}
      />
      <ContactPage />
    </>
  );
}
