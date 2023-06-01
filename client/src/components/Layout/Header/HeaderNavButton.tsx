import { Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

interface Props {
  to: string;
  label: string;
}

export const HeaderNavButton = ({ to, label }: Props) => {
  return (
    <NavLink to={to}>
      {({ isActive, isPending }) => (
        <Button variant={isActive ? "solid" : "ghost"}>{label}</Button>
      )}
    </NavLink>
  );
};

export default HeaderNavButton;
