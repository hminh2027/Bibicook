import BannerSlider from "@/components/BannerSlider";
import React from "react";
import Footer from "../Footer";
import Menu from "../Menu";
import LandingHeader from "../Header/LandingPage";

const LandingPageLayout = (props) => {
  return (
    <div className="flex flex-col  min-h-screen">
      <div className="w-full z-50 shadow-md  shadow-bebecook">
        <LandingHeader />
      </div>
      <Menu className="shadow-md  shadow-bebecook" />

      <BannerSlider />

      <main className="min-h-screen  py-4 max-w-screen-xl w-screen  mx-auto">
        {props.children}
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPageLayout;
