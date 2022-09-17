import React from "react";
import Image from "next/image";
import { images } from "@/utils/const/images";
const Album = ({ title }) => {
  return (
    <section className="flex flex-col gap-2">
      {title && (
        <div className="text-center text-pink-salmon-700 text-3xl">{title}</div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {images.map((image) => (
          <div
            className={`border ${
              image.isBig && "md:col-span-2 md:row-span-2"
            } rounded-xl hover:border-pink-salmon-600 overflow-hidden`}
          >
            <Image
              width={1}
              height={1}
              layout="responsive"
              src={image.src}
              className=""
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Album;
