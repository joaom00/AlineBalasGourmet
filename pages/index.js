import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Aline Balas Gourmet - Home</title>
        <meta
          name="description"
          content="Desde 2016 oferecendo uma experiência gourmet, além do habitual, para as balas de coco"
        />
        <meta name="distribution" content="Global" />
        <meta name="owner" content="Aline Roberta Ferreira" />
        <meta name="creator" content="Diego Ferreira Crivelaro" />
      </Head>
      <Header />
    </>
  );
}
