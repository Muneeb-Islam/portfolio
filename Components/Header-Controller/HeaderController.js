import React from "react";
import Head from "next/head";

function HeaderController({
  title,
  description,
  url,
  image,
  fav_icon,
  keywords,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <link rel="icon" type="image/x-icon" href={fav_icon} />
        <meta name="keywords" content={keywords} />
        <meta property="og:type" content="website" />
        {url && <meta property="og:url" content={url} />}
        <meta property="og:image" content={image} />
      </Head>
    </>
  );
}

export default HeaderController;
