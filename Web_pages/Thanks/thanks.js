import { BannerSection } from "@/Web_sections/Thanks";

export default function ThanksPage({ page_data }) {
  const thanks_page_content = page_data.Sale_page;
  return (
    <>
      <BannerSection page_data={thanks_page_content} />
    </>
  );
}
