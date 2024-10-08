import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import {useContext} from 'react';
import { AuthContext } from '../../context/AuthContext';
import ProfileAvatar from './ProfileAvatar';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const linkClass = ({ isActive }) =>
    isActive ? "h-full border-b-purple-500 border-b-2" : "menu__link h-full";
  return (
    <nav className="bg-white dark:bg-black border-b border-slate-300 dark:border-neutral-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-between md:items-stretch md:justify-start">
            <div className="flex flex-shrink-0 items-center mr-4 logo-container group">
              <Link href='/' className="rounded-full bg-white flex justify-center items-center relative">
                <div className="w-8 h-8 flex items-center justify-center" >
                  <Logo />
                </div>
                <span className="font-bold text-lg ml-2">
                  Connect
                </span>
              </Link>
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
                {user ? (
                    <div className="flex items-center space-x-2">
                      {/* <span>Welcome, {user.name}!</span>
                      <button
                        onClick={logout}
                        className="bg-red-500 hover:bg-red-600 p-2 px-3 text-white rounded-full"
                      >
                        Logout
                      </button> */}
                      <ProfileAvatar handleLogout={logout}  />
                    </div>
                  ) : (
                    <NavLink
                      to="/auth/register"
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
