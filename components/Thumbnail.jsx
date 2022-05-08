import Image from 'next/image';
import React, { forwardRef } from 'react';

// eslint-disable-next-line react/display-name
const Thumbnail = forwardRef(({ result, large }, ref) => {
  return (
    <div
      ref={ref}
      className={`break-inside-avoid relative p-2 group  transition duration-200 ease-in transform hover:z-50 ${
        !large && 'sm:hover:scale-105 cursor-pointer'
      }`}
    >
      <Image
        layout="responsive"
        src={`${large ? result?.largeImageURL : result?.webformatURL}`}
        objectFit="cover"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNUOs1QDwADcgFuE6zHkwAAAABJRU5ErkJggg=="
        placeholder="blur"
        height={`${large ? 1080 : 720}`}
        width={`${large ? 1920 : 1080}`}
        alt={result.type}
      />
    </div>
  );
});

export default Thumbnail;
