import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import ProductCard from "@/components/ProductCard";
const RelatedProduct = (props) => {
  return (
    <div
      className={`flex flex-col gap-4 py-4 w-full max-w-screen-xl overflow-x-hidden ${props.className}`}
    >
      <h2 className="text-xl font-semibold text-center">
        Các sản phẩm liên quan
      </h2>
      <div>
        <Swiper
          slidesPerView="auto"
          spaceBetween={30}
          loop={true}
          loopFillGroupWithBlank={true}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductCard
                key={index}
                title={product.title}
                imgSrc={product.imgSrc}
                href={`products/${product.slug}`}
                className="p-1 lg:p-4"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RelatedProduct;
const products = [
  {
    slug: "product1",
    imgSrc:
      "http://bebecook.vn/wp-content/uploads/2021/12/banh-bong-bebecook-bo-sung-loi-khuan-vi-chuoi-600x600.png",

    title: "Bánh gạo hữu cơ hình que Bebecook vị Ngũ Cốc",
  },
  {
    slug: "product2",
    imgSrc:
      "http://bebecook.vn/wp-content/uploads/2021/12/banh-gao-huu-co-bebecook-vi-bi-ngo-600x600.jpg",
    title: "Bánh gạo hữu cơ hình que Bebecook vị Ngũ Cốc",
  },
  {
    slug: "product3",
    imgSrc:
      "http://bebecook.vn/wp-content/uploads/2021/12/banh-gao-lut-thanh-dai-bebecook-bo-sung-canxi-vitamin-b1-vi-bi-ngo-600x600.jpg",
    title: "Bánh gạo hữu cơ hình que Bebecook vị Ngũ Cốc",
  },
  {
    slug: "product3",
    imgSrc:
      "http://bebecook.vn/wp-content/uploads/2021/12/banh-gao-lut-thanh-dai-bebecook-bo-sung-canxi-vitamin-b1-vi-bi-ngo-600x600.jpg",
    title: "Bánh gạo hữu cơ hình que Bebecook vị Ngũ Cốc",
  },
  {
    slug: "product3",
    imgSrc:
      "http://bebecook.vn/wp-content/uploads/2021/12/banh-gao-lut-thanh-dai-bebecook-bo-sung-canxi-vitamin-b1-vi-bi-ngo-600x600.jpg",
    title: "Bánh gạo hữu cơ hình que Bebecook vị Ngũ Cốc",
  },
  {
    slug: "product3",
    imgSrc:
      "http://bebecook.vn/wp-content/uploads/2021/12/banh-gao-lut-thanh-dai-bebecook-bo-sung-canxi-vitamin-b1-vi-bi-ngo-600x600.jpg",
    title: "Bánh gạo hữu cơ hình que Bebecook vị Ngũ Cốc",
  },
];
