import React, { FC } from "react";
import DashboardHeader from "./Header";
import DashboardSideBar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export const DashboardLayout: FC = ({ children }: any) => {
  return (
    <div className="min-h-screen flex bg-slate-100">
      {/* Sidebar */}
      <DashboardSideBar className="w-60 min-h-screen border-r-2 border-gray-200" />
      {/* Content */}
      <div className="flex flex-col flex-1">
        <DashboardHeader name="PTA" role="Admin" />
        <div className="p-4 flex-1 bg-white">
          <Outlet />
          {/* Outlet is for react router */}
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout;
