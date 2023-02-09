import React, { FC } from "react";
import { menuItems } from "./config";
import { Link, useLocation } from "react-router-dom";
const DashboardMenu: FC = ({ className }: any) => {
  const { pathname } = useLocation();
  console.log(location);
  return (
    <div className={className}>
      <div className="flex flex-col gap-4">
        {menuItems.map((menuItem) => (
          <div className="flex flex-col gap-2 text-md px-2" key={menuItem.name}>
            <div className="font-bold">{menuItem.name}</div>
            {menuItem.items.map((item) => (
              <Link
                key={item.name}
                to={`${item.href}`}
                className={`px-2 py-1 rounded-md no-underline hover:bg-indigo-600 hover:text-indigo-50 text-indigo-900 ${
                  pathname === item.href ? "bg-indigo-600 text-indigo-50" : ""
                }`}
              >
                <div>{item.name}</div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardMenu;
