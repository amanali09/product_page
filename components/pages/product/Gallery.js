"use client";

import { HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import useWindowSize from "hooks/useWindowSize";
import ImageSlider from "components/common/ImageSlider";
import { useEffect, useState } from "react";

const Gallery = ({ detail, form }) => {
  const { width } = useWindowSize();
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(detail.images.filter((item, i) => item.colorid === form.color));
  }, [form.color]);

  return (
    <div className="relative">
      <div
        className="w-full flex justify-end sm:sticky top-0 right-0 z-10"
        id="heart"
      >
        <button className="h-6 w-6 absolute z-50 ">
          <HeartIcon />
        </button>
      </div>
      {width > 500 ? (
        <div className="flex flex-wrap gap-2  justify-center relative ">
          {images.map((image, i) => (
            <Image
              key={i}
              sizes="100vw"
              src={image.url}
              alt="Picture of the author"
              fill
              {...(images.length === i + 1 && { id: "last-img" })}
              className="!relative !w-auto" // just an example
              loading="lazy"
            />
          ))}
        </div>
      ) : (
        <ImageSlider images={images} />
      )}
    </div>
  );
};

export default Gallery;
