import "@/styles/globals.css";
import Head from "next/head";
import Script from "next/script";
// import "animate.css/animate.min.css";
import { _get_website_page } from "../DAL/pages";
import { useEffect } from "react";
export default function App({ Component, pageProps }) {
  const sale_page = async () => {
    // call DAL function
    const postData = {
      page_slug: "home",
    };
    const result = await _get_website_page(postData);
    console.log(result, "--result");
  };
  useEffect(() => {
    sale_page();
  }, []);
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        />

        {/* <title>Vission</title> */}

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"
        />
        {/* <link href="/assets/fav-icon.png" rel="icon" type="image/x-icon"></link> */}
      </Head>
      <Component {...pageProps} />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></Script>
    </>
  );
}
