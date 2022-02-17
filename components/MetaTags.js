import Head from 'next/head';

export default function MetaTags({ title, description, children }) {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="distribution" content="Global" />
        <meta name="owner" content="Aline Roberta Ferreira" />
        <meta name="creator" content="Diego Ferreira Crivelaro" />
      </Head>
      {children}
    </>
  );
}
