import React, { FC } from "react";

const DashboardHeader: FC = ({ avatar, name, role }: any) => {
  return (
    <div className="flex items-center gap-4 p-4">
      <div className="flex items-center gap-4 justify-center cursor-pointer">
        <div>
          <div>{name}</div>
          <div>{role}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
