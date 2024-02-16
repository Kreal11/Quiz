import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import { LayoutWrapper } from "./Layout.styled";

const Layout = () => {
  return (
    <LayoutWrapper>
      <Header />
      <Outlet />
    </LayoutWrapper>
  );
};

export default Layout;
