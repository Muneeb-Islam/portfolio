import styles from "@/styles/Home.module.css";
import HeaderController from "@/Components/Header-Controller/HeaderController";
import { _get_website_page } from "../DAL/pages";
import { s3baseUrl } from "@/config/config";
import { PageController } from "@/Web_pages";
export async function getServerSideProps(context) {
  console.log(context.resolvedUrl, "resolved--");
  const query = context.query;
  const result = await _get_website_page(
    JSON.stringify({ page_slug: query.page_slug })
  );

  if (result.code === 200) {
    return {
      props: {
        web_page: result,
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
export default function Home({ web_page }) {
  const { brand_favicon, meta_keywords, meta_title, meta_description } =
    web_page.web_page;
  const page_name = web_page.web_page.page_component_name;

  return (
    <>
      <HeaderController
        fav_icon={s3baseUrl + brand_favicon}
        image={s3baseUrl + brand_favicon}
        title={meta_title}
        description={meta_description}
        keywords={meta_keywords}
      />
      <PageController page_data={{ web_page, page_name }} />
    </>
  );
}
