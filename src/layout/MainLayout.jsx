import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import AuthNav from "../components/common/AuthNav";

const MainLayout = () => {
  const location = useLocation();
  const isAuthPage = location.pathname.startsWith("/auth") || location.pathname.startsWith("/dashboard") ;
  return (
    <div className="min-h-screen">
      {!isAuthPage && <Navbar />}
      <Outlet />
    </div>
  );
};

export default MainLayout;
