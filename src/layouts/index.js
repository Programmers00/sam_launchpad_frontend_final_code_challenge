// Outlet => Albums, Photos
import { Outlet } from "react-router-dom";
// Layout header
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default Layout;
