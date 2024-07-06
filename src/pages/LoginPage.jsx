import {
  CompaniesAuthSection,
  DevelopersAuthSection,
} from "../components/Login";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <div className="p-2 pl-16 h-20 flex justify-left items-center border-b">
        <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
          <div className="h-10 w-10 rounded-full bg-white flex justify-center items-center">
            <a
              href="/"
              className="w-8 h-8 hover:rotate-45 transition-all ease-in-out"
            >
              <img src="logo.png" height={100} width={100} alt="Logo" />
            </a>
          </div>
        </NavLink>
      </div>
      <div className="flex h-[87.5vh]">
        <CompaniesAuthSection />
        <DevelopersAuthSection />
      </div>
    </div>
  );
};

export default LoginPage;
