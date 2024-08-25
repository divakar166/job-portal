import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaRegCopyright,
} from "react-icons/fa";
import Logo from "../common/Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-10 mb-4 w-full">
      {/* <div>Made by <a href="https://github.com/divakar166" className="text-lg font-bold bg-gradient-to-b from-[#870000] to-[#190A05] dark:bg-gradient-to-r dark:from-[#c471f5] dark:to-[#fa71cd] bg-clip-text" style={{"-webkit-text-fill-color":"transparent"}}>Divakar Singh</a></div> */}
      <div className="flex justify-around items-center w-full pb-4 mb-10 border-b">
        <div className="w-[10%] ">
          <div className="h-10 w-10 rounded-full bg-white flex justify-center items-center relative group">
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
        <div className="flex justify-around items-center w-1/2">
          <Link className="menu__link" to="/jobs">
            Find a Job
          </Link>
          <Link className="menu__link" to="/companies">
            Companies
          </Link>
          <Link className="menu__link" to="/about">
            Why Connect?
          </Link>
          <Link className="menu__link" to="/contact">
            Contact
          </Link>
        </div>
        <div className="flex justify-around items-center w-[10%] text-slate-400">
          <a
            className="hover:text-black cursor-pointer text-xl"
            href="https://x.com/divakarsingh166"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            className="hover:text-black cursor-pointer text-xl"
            href="https://github.com/divakar166"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="hover:text-black cursor-pointer text-xl"
            href="https://www.linkedin.com/in/divakar-singh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="flex justify-between items-center px-2 text-slate-400">
        <div className="flex justify-center items-center">
          <FaRegCopyright /> 2024 Connect. All rights reserved.
        </div>
        <div className="flex justify-around items-center w-1/3 ">
          <Link className="hover:text-black">Terms of Service</Link>
          <Link className="hover:text-black">Privacy Policy</Link>
          <Link className="hover:text-black">Partners</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
