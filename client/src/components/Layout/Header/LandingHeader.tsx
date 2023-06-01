import { PageIcon } from "@/components/common";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/features/Auth";
import { headerItems } from "./header.config";
import HeaderNavButton from "./HeaderNavButton";
import { HiUserCircle } from "react-icons/hi";
import { Container, Button, ButtonGroup, Text } from "@chakra-ui/react";
import { WishlistModal } from "@/features/WishList/component";

export const LandingHeader = () => {
  const { user, logoutFn }: any = useAuth();
  const navigate = useNavigate();
  const logoutHandler = () => {
    logoutFn();
    navigate("/");
  };
  return (
    <Container maxWidth={"container.2xl"}>
      <div className="flex items-center justify-between w-full p-4">
        <div className="flex items-center gap-4">
          <PageIcon />
          {headerItems.map((item) => (
            <NavLink key={item.link} to={item.link}>
              {item.label}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <WishlistModal />
          {!user ? (
            <ButtonGroup>
              <HeaderNavButton to="/auth/login" label="Đăng nhập" />
              <HeaderNavButton to="/auth/register" label="Đăng ký" />
            </ButtonGroup>
          ) : (
            <Button variant={"ghost"} onClick={logoutHandler}>
              Đăng xuất
            </Button>
          )}

          <Link to="/manage/post/create">
            <Button>Đăng tin</Button>
          </Link>

          {!user ? (
            <></>
          ) : (
            <NavLink to="/user/me">
              <Text color="error" className="text-4xl">
                <HiUserCircle />
              </Text>
            </NavLink>
          )}
        </div>
      </div>
    </Container>
  );
};

export default LandingHeader;
