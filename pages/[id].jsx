import Head from 'next/head';
import Nav from '../components/Nav';
import Results from '../components/Results';

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Pixabay Free Images</title>
        <meta
          name="description"
          content="Pixabay Free Images built built by Tushar Indurjeeth"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Results results={data.hits} />
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  // Fetch images from Pixaby api

  const data = await (
    await fetch(
      `https://pixabay.com/api/?key=${
        process.env.NEXT_PUBLIC_PIXABAY_KEY
      }&image_type=${params?.id || 'all'}`
    )
  ).json();

  return {
    props: {
      data,
    },
  };
};
