import HeaderController from "@/Components/Header-Controller/HeaderController";
import { _get_website_page } from "../../../../DAL/pages";
import { s3baseUrl } from "@/config/config";
import ThanksPage from "@/Web_pages/Thanks/thanks";
export async function getServerSideProps(context) {
  console.log(context.resolvedUrl, "resolved--");
  const query = context.query;
  const result = await _get_website_page(
    JSON.stringify({ page_slug: query.page_slug })
  );

  if (result.code === 200) {
    return {
      props: {
        page_data: result,
      },
    };
  } else {
    return {
      redirect: {
        permanent: false,
        destination: `/404`,
      },
    };
  }
}
export default function Thanks({ page_data }) {
  const { brand_favicon, meta_keywords, meta_title, meta_description } =
    page_data.Sale_page;

  return (
    <>
      <HeaderController
        fav_icon={s3baseUrl + brand_favicon}
        image={s3baseUrl + brand_favicon}
        title={meta_title}
        description={meta_description}
        keywords={meta_keywords}
      />
      <ThanksPage page_data={page_data} />
    </>
  );
}
