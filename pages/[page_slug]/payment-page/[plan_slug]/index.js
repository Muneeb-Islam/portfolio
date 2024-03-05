import HeaderController from "@/Components/Header-Controller/HeaderController";
import { _get_website_page } from "../../../../DAL/pages";
import { s3baseUrl } from "@/config/config";
import PaymentPage from "@/Web_pages/Payment/Payment";
export async function getServerSideProps(context) {
  const query = context.query;
  const postData = {
    page_slug: query.page_slug,
  };
  const result = await _get_website_page(postData);

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

export default function Payment({ web_page }) {
  const { brand_favicon, meta_keywords, meta_title, meta_description } =
    web_page.web_page.payment_page;

  return (
    <>
      <HeaderController
        fav_icon={s3baseUrl + brand_favicon}
        image={s3baseUrl + brand_favicon}
        title={meta_title}
        description={meta_description}
        keywords={meta_keywords}
      />
      <PaymentPage page_data={web_page} />
    </>
  );
}
