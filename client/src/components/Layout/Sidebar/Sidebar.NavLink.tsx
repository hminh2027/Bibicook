import React from "react";
import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";

export const NavLink = (props: NavLinkProps) => {
  const { children, className } = props;
  return (
    <RouterNavLink
      {...props}
      className={({ isActive }) =>
        `px-9 py-2  ${
          isActive ? "border-l border-l-amber-400 bg-gray-100 font-bold" : ""
        }`
      }
      end
    >
      {children}
    </RouterNavLink>
  );
};

export default NavLink;
