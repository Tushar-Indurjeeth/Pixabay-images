import { DownloadIcon } from '@heroicons/react/outline';
import Head from 'next/head';
import React from 'react';
import Nav from '../../components/Nav';
import Thumbnail from '../../components/Thumbnail';

const Details = ({ data }) => {
  return (
    <>
      <Head>
        <title>Pixaby Free Images</title>
        <meta
          name="description"
          content="Pixaby Free Images built built by Tushar Indurjeeth"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <div className="md:grid grid-flow-col md:grid-flow-row grid-cols-2 md:grid-cols-6 h-screen p-6">
        {/* Left - Image*/}
        <div className="md:col-span-4 pr-5">
          <Thumbnail result={data.hits[0]} large={true} />
        </div>

        {/* Right - Details*/}
        <div className="pl-2 md:col-span-2">
          <div className="space-y-2">
            <h1 className="text-2xl">Image Details:</h1>
            <p>{`Photographer: ${data.hits[0].user}`}</p>
            <p>{`Tags: ${data.hits[0].tags}`}</p>

            <p>{`Views: ${data.hits[0].views}`}</p>
            <p>{`Downloads: ${data.hits[0].downloads}`}</p>
            <p>
              {`Resolution: ${data.hits[0].imageWidth}x${data.hits[0].imageHeight}`}
            </p>
            <a
              href={data.hits[0].largeImageURL}
              target="_blank"
              rel="noreferrer"
            >
              <button className="uppercase flex bg-green-700 text-sm sm:text-md p-2 sm:p-3 items-center font-semibold rounded-xl text-gray-200 mt-3">
                <DownloadIcon className="h-7 sm:h-8 pr-2 whitespace-nowrap" />
                <p>Download</p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;

export const getServerSideProps = async ({ params }) => {
  const data = await (
    await fetch(
      `https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_PIXABAY_KEY}&id=${params?.id}`
    )
  ).json();

  return {
    props: {
      data,
    },
  };
};
