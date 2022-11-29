import Head from "next/head";

export default function Meta({ _id, title, description }) {
  return (
    <Head key={_id}>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={description} />
      <meta name="robots" content="all" />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
    </Head>
  );
}
