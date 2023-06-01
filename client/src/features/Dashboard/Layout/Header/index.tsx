import { Button, Dropdown, Popover } from "antd";
import React, { FC, useState } from "react";
import { useAuth } from "../../../Auth/Context";
import { FiLogOut } from "react-icons/fi";
interface Props {
  avatar?: string;
  name?: string;
  role?: string;
}
const DashboardHeader: FC<Props> = ({ avatar, name, role }: Props) => {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = () => {
    setOpen(!open);
  };
  const handleLogout = () => logout();
  const content = (
    <div className="absolute top-full right-0 flex flex-col gap-4 w-[250px] card z-10">
      <div className="flex gap-2 items-center">
        <div className="w-10 h-10 rounded-full bg-red-600"></div>
        <div className="flex flex-col">
          <div>{user?.username}</div>
          <div>{user?.email}</div>
        </div>
      </div>

      <div className="flex-1">
        <Button
          className="w-full flex items-center justify-center gap-2"
          icon={<FiLogOut />}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </div>
  );
  return (
    <div className="flex items-center gap-4 p-4 justify-end ">
      <div className="flex items-center gap-4 justify-center cursor-pointer mr-8">
        <div className="relative" onClick={handleOpenChange}>
          <div className="w-10 h-10 rounded-full bg-red-600"></div>
          {open ? content : <></>}
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
