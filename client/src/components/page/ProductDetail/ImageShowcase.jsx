import Image from "next/image";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";

import { useState } from "react";

const ImageShowcase = () => {
  const [currentImage, setCurrentImage] = useState(demoImages[0]);

  return (
    <>
      <div className="rounded">
        <InnerImageZoom src={currentImage} className="aspect-square" />
      </div>
      <div className="flex border-t border-t-bebecook  w-full max-w-xl overflow-x-auto scrollbar-thin scrollbar-thumb-forth scrollbar-track-gray-100">
        {demoImages.map((image, index) => (
          <SmallImageItem
            onClick={() => setCurrentImage(image)}
            key={index}
            imgSrc={image}
          />
        ))}
      </div>
    </>
  );
};
const SmallImageItem = (props) => {
  const imgSrc = props.imgSrc;
  return (
    <div onClick={() => props.onClick()}>
      <Image
        src={imgSrc}
        width={100}
        height={100}
        layout="fixed"
        onClick={() => props.onClick()}
      />
    </div>
  );
};
const demoImages = [
  "http://bebecook.vn/wp-content/uploads/2021/12/banh-bong-bebecook-bo-sung-loi-khuan-vi-dau.png",
  "http://bebecook.vn/wp-content/uploads/2021/12/banh-bong-bebecook-bo-sung-loi-khuan.png",
  "http://bebecook.vn/wp-content/uploads/2021/12/banh-bong-bebecook-bo-sung-loi-khuan3.png",
  "http://bebecook.vn/wp-content/uploads/2021/12/banh-bong-bebecook-bo-sung-loi-khuan2.png",
  "http://bebecook.vn/wp-content/uploads/2021/12/banh-bong-bebecook-bo-sung-loi-khuan2.png",
  "http://bebecook.vn/wp-content/uploads/2021/12/banh-bong-bebecook-bo-sung-loi-khuan2.png",
];
export default ImageShowcase;
