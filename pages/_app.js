import "@/styles/globals.css";
import Head from "next/head";
import Script from "next/script";
// import "animate.css/animate.min.css";
import { SnackbarProvider } from "notistack";
export default function App({ Component, pageProps }) {
  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      maxSnack={3}
      autoHideDuration={3000}
    >
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Byte Pulse</title>
        <link rel="icon" type="image/x-icon" href="" />
        <link rel="apple-touch-icon" href="" sizes="144x144" />
        <link rel="apple-touch-icon" href="" sizes="152x152" />
        <link rel="apple-touch-icon" href="" sizes="180x180" />

        <meta name="description" content="" />
        <meta name="keywords" content="" />

        <meta itemprop="name" content="" />
        <meta itemprop="description" content="" />
        <meta itemprop="image" content="" />

        <meta name="twitter:card" content="" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image:src" content="" />
        <meta property="og:title" content="" />
        <meta property="og:type" content="" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="og:description" content="" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://builder-templates-bucket.s3.amazonaws.com/asserts-db/css/main.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Sanchez:ital@0;1&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Moderustic:wght@300..800&display=swap"
        />
      </Head>
      <Component {...pageProps} />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"
      ></Script>
    </SnackbarProvider>
  );
}
