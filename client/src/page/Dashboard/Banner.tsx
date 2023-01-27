import React, { FC } from "react";
import { BannerForm } from "../../components/Dashboard/Banner";
import { useBanner } from "../../components/Dashboard/Banner/hook";
export const BannerPage: FC = () => {
  const { data: banners, isLoading } = useBanner();
  if (isLoading) return <></>;
  return (
    // <div>
    <BannerForm banners={banners} />
    // </div>
  );
};

export default BannerPage;
