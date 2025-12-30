import Head from "next/head";

export default function SEO({
  title,
  description,
  image = "/og-image.png",
  url = "http://localhost:3000",
}) {
  return (
    <Head>
      {/* BASIC SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* VIEWPORT */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />

      {/* OPEN GRAPH */}
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={description}
      />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* SEO */}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
    </Head>
  );
}
