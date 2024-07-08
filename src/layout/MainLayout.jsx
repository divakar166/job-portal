import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import { useLocation } from "react-router-dom";
import AuthNav from "../components/common/AuthNav";

const MainLayout = () => {
  const location = useLocation();
  const isAuthPage = location.pathname.startsWith("/auth");
  return (
    <div className="">
      {!isAuthPage ? <Navbar /> : <AuthNav />}
      <Outlet />
    </div>
  );
};

export default MainLayout;
