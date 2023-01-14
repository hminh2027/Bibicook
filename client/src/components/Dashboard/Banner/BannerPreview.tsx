import React from "react";
import { Banner } from "./interface";

interface Props {
  banners: Banner[];
}

export const BannerPreview = ({ banners }: Props) => {
  return (
    <div className="flex flex-col justify-center gap-4">
      <div className="font-bold text-center">
        Preview (slide chạy từ trái qua phải)
      </div>
      <div className="flex gap-2 flex-wrap">
        {banners?.map((banner: Banner) => (
          <img src={banner?.url} className="w-[320px] h-[190px] rounded-md" />
        ))}
      </div>
    </div>
  );
};
export default BannerPreview;
