import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Homepage";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
