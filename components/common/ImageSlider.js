import useSwipe from "hooks/useSwipe";
import Image from "next/image";
import { useEffect, useState } from "react";
import { classNames } from "utils/Function";

const ImageSlider = ({ images }) => {
  const [active, setActive] = useState(0);
  const { onTouchStart, onTouchEnd, onTouchMove } = useSwipe();

  useEffect(() => {
    setActive(0);
  }, [images]);
  return (
    <>
      <div className="block w-full">
        {images.map((image, i) => (
          <div
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={() =>
              onTouchEnd({ length: images.length, active, setActive })
            }
            key={i}
            className={`relative ${active === i ? "block" : "hidden"}`}
          >
            <Image
              src={image.url}
              sizes="100vw"
              alt=""
              fill
              className="!relative !w-full" // just an example
            />
          </div>
        ))}
        <div className="flex mt-4 gap-2 justify-center">
          {images.map((image, i) => (
            <span
              key={i}
              className={classNames(
                "left-0 top-0 w-[30px] border-t-4 ",
                active === i ? "border-gray-800" : "border-gray-300"
              )}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
