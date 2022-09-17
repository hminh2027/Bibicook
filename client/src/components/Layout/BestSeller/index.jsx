import React from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/utils/const/product";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import "swiper/css";
import ProductSlide from "../../ProductSlide";

const BestSeller = ({ className }) => {
  SwiperCore.use([Autoplay]);
  const resProducts = arraySplitting(products, 6);
  return (
    <div className={`${className}`}>
      {/* <div className="text-4xl text-center">Sản phẩm HOT</div> */}
      {/*TODO: check media screen size and return instead of using display:none*/}
      <Swiper
        slidesPerView="auto"
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 3000 }}
        loopFillGroupWithBlank={true}
        className="hidden md:flex"
      >
        {resProducts.map((products) => (
          <SwiperSlide>
            <ProductSlide products={products} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-col gap-4 md:hidden">
        {resProducts.map((products) => (
          <ProductSlide products={products} />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
// Cắt mảng
const arraySplitting = (input, size = 6) => {
  const pages = Math.ceil(input.length / size);

  const res = [];
  for (let i = 0; i < pages; i++) {
    res.push(input.slice(size * i, size * (i + 1)));
  }
  return res;
};
