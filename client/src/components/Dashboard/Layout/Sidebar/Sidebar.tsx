import React, { FC } from "react";
import DashboardMenu from "../Menu";
import { Link } from "react-router-dom";
const DashboardSideBar: FC = () => {
  return (
    <div
      className={`flex flex-col min-h-screen w-48 border-r-2 border-gray-200`}
    >
      <div className="grid place-items-center text-3xl text-center text-bold h-[75px]">
        <Link to={"/"}>
          <img src="/logo.png" width={80} height={80} />
        </Link>
      </div>
      <div className="flex flex-1 flex-col ">
        <DashboardMenu />
      </div>
    </div>
  );
};

export default DashboardSideBar;
