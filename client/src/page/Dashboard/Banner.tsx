import React, { FC } from "react";
import { BannerForm } from "../../components/Dashboard/Banner";
export const BannerPage: FC = () => {
  return (
    // <div>
    <BannerForm banners={[]} />
    // </div>
  );
};

export default BannerPage;
