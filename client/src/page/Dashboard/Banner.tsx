import React, { FC } from "react";
import { BannerForm } from "../../components/Dashboard/Banner";
import { useGetBanner } from "../../components/Dashboard/Banner/hook";
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
