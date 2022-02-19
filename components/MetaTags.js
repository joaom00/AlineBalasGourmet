import Head from 'next/head';

export default function MetaTags({ title, description, url, image, children }) {
  return (
    <>
      <Head>
        {/* GENERAL */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta rel="canonical" href={url} />
        <meta name="distribution" content="Global" />
        <meta name="owner" content="Aline Roberta Ferreira" />
        <meta name="creator" content="Diego Ferreira Crivelaro" />

        {/* GOOGLE */}
        <meta name="googlebot" content="notranslate" />

        {/* FACEBOOK */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={image} />

        {/* TWITTER */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:image" content={image} />
      </Head>
      {children}
    </>
  );
}
