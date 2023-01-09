import React, { FC } from "react";
import DashboardHeader from "./Header";
import DashboardSideBar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export const DashboardLayout: FC = ({ children }: any) => {
  return (
    <div className="min-h-screen flex bg-gray-200">
      {/* Sidebar */}
      <DashboardSideBar />
      {/* Content */}
      <div className="flex flex-col flex-1">
        <DashboardHeader name="PTA" role="Admin" avatar="" />
        <div className="p-4 flex-1 bg-gray-100 rounded-tl-lg">
          <Outlet />
          {/* Outlet is for react router */}
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout;
