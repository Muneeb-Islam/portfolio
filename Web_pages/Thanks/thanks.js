import { BannerSection } from "@/Web_sections/Thanks";

export default function ThanksPage({ page_data }) {
  const thanks_page_content = page_data.web_page;
  console.log(thanks_page_content, "---thanks_page_content");
  return (
    <>
      <BannerSection page_data={thanks_page_content} />
    </>
  );
}
