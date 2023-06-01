import React, { FC } from "react";
import { BannerForm } from "../../features/Dashboard/Banner";
import { useGetBanner } from "../../features/Dashboard/Banner/hook";
export const BannerPage: FC = () => {
  const { banners, isLoading } = useGetBanner();
  console.log(banners);
  if (isLoading) return <></>;
  return (
    // <div>
    <BannerForm banners={banners} />
    // </div>
  );
};

export default BannerPage;
