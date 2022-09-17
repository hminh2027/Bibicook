import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { banners } from "@/utils/const/banners";
const BannerSlider = () => {
  return (
    <div>
      <Swiper slidesPerView={1} autoplay loop>
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <Image
              key={index}
              src={banner.url}
              width={21}
              height={9}
              layout="responsive"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
