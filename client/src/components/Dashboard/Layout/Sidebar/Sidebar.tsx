import React, { FC } from "react";
import DashboardMenu from "../Menu";
const DashboardSideBar: FC = () => {
  return (
    <div
      className={`flex flex-col min-h-screen w-60 border-r-2 border-gray-200`}
    >
      {/* <Image
        src={
          "https://admin.bebecook.com/images/common/PC_bebecook_logo.png?ver=20220708"
        }
        width={150}
        height={80}
        layout="intrinsic"
      /> */}
      <div className="grid place-items-center text-3xl text-center text-bold h-[75px]">
        <div>LOGO</div>
      </div>
      <div className="flex flex-1 flex-col ">
        <DashboardMenu />
      </div>
    </div>
  );
};

export default DashboardSideBar;
