import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import { useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/auth" || location.pathname === "/auth/";;
  return (
    <div className="">
      {!isAuthPage && <Navbar />}
      <Outlet />
    </div>
  );
};

export default MainLayout;
