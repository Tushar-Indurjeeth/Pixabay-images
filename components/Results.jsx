import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import InfiniteScroll from 'react-infinite-scroll-component';

import Thumbnail from './Thumbnail';
import Loading from './Loading';

const Results = ({ results }) => {
  const [images, setImages] = useState(results);
  const [hasMore, setHasMore] = useState(true);
  const [pageNumber, setPageNumber] = useState(2);

  const { query } = useRouter();

  const getMoreImages = async () => {
    // Calls Api to get more images after scrolled to end of page
    const data = await (
      await fetch(
        `https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_PIXABAY_KEY}&page=${pageNumber}&image_type=${query.id}`
      )
    ).json();

    setPageNumber(pageNumber + 1);

    const newImages = data.hits;
    setImages((image) => [...image, ...newImages]);
  };

  return (
    <InfiniteScroll
      dataLength={images.length}
      next={getMoreImages}
      hasMore={hasMore}
      loader={<Loading />}
      endMessage={<h4>Nothing more to show</h4>}
    >
      <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
        {images.map((result) => (
          <Link key={result.id} href={`/details/${result.id}`}>
            <a>
              <Thumbnail result={result} />
            </a>
          </Link>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Results;
