import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import {useContext} from 'react';
import { AuthContext } from '../../context/AuthContext';


const Navbar = () => {
  const { user, userType, logout } = useContext(AuthContext);
  const linkClass = ({ isActive }) =>
    isActive ? "h-full border-b-purple-500 border-b-2" : "menu__link h-full";

  return (
    <nav className="bg-white dark:bg-black border-b border-slate-300 dark:border-neutral-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-around md:items-stretch md:justify-start">
            <div className="flex flex-shrink-0 items-center mr-4 logo-container group">
              <div className="rounded-full bg-white flex justify-center items-center relative group">
                <a
                  href="/"
                  className="w-8 h-8 flex items-center justify-center transform group-hover:rotate-45 transition-all ease-in-out"
                >
                  <Logo />
                </a>
                <span className="absolute font-bold text-lg left-full top-1/2 transform -translate-y-1/2 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                  Connect
                </span>
              </div>
            </div>
            <div className="md:ml-auto md:flex items-center hidden">
              <div className="flex space-x-4 items-center">
                <NavLink to="/jobs" className={linkClass}>
                  Find a Job
                </NavLink>
                <NavLink to="/companies" className={linkClass}>
                  Companies
                </NavLink>
                <NavLink to="/about" className={linkClass}>
                  Why Connect?
                </NavLink>
                <NavLink to="/contact" className={linkClass}>
                  Contact
                </NavLink>
              </div>
            </div>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                {/* <NavLink
                  to="/auth"
                  className="bg-purple-500 hover:bg-purple-600 p-2 px-3 text-white rounded-full"
                >
                  Join with Us!
                </NavLink> */}
                {user ? (
                    <div className="flex items-center space-x-2">
                      <span>Welcome, {user.name}!</span>
                      <button
                        onClick={logout}
                        className="bg-red-500 hover:bg-red-600 p-2 px-3 text-white rounded-full"
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                    <NavLink
                      to="/auth"
                      className="bg-purple-500 hover:bg-purple-600 p-2 px-3 text-white rounded-full"
                    >
                      Join with Us!
                    </NavLink>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
