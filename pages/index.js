import styles from "@/styles/Home.module.css";
import HeaderController from "@/Components/Header-Controller/HeaderController";
import HomePage from "@/Web_pages/Home/Home";
import { _get_website_page } from "../DAL/pages";
export async function getServerSideProps(context) {
  const query = context.query;
  const postData = {
    page_slug: "home",
  };
  const result = await _get_website_page(postData);
  // console.log(result, "--result--result");
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
export default function Home({ page_data }) {
  return (
    <>
      <HeaderController />
      {/* <AnimatedComponent /> */}
      <HomePage page_data={page_data} />
    </>
  );
}
