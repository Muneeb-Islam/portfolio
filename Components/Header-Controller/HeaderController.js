import React from "react";
import Head from "next/head";

function HeaderController({
  title,
  description,
  url,
  image,
  fav_icon,
  keywords,
  author = "Byte Pulse",
  publisher = "Byte Pulse",
}) {
  return (
    <Head>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="icon" type="image/x-icon" href={fav_icon} />

      {/* Canonical */}
      {url && <link rel="canonical" href={url} />}

      {/* Robots */}
      <meta name="robots" content="index, follow" />

      {/* Author & Publisher */}
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />

      {/* Open Graph (Facebook, LinkedIn, etc.) */}
      <meta property="og:type" content="website" />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter Meta */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Head>
  );
}

export default HeaderController;
