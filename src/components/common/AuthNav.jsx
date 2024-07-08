const AuthNav = () => {
  return (
    <div className="p-2 pl-16 h-20 flex justify-left items-center border-b auth-nav">
      <div className="flex flex-shrink-0 items-center mr-4 logo-container group">
        <div className="rounded-full bg-white flex justify-center items-center relative group">
          <a
            href="/"
            className="w-8 h-8 flex items-center justify-center transform group-hover:rotate-45 transition-all ease-in-out"
          >
            <img
              src="/logo.png"
              height={100}
              width={100}
              className="logo"
              alt="Logo"
            />
          </a>
          <span className="absolute font-bold text-lg left-full top-1/2 transform -translate-y-1/2 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 cursor-pointer">
            Connect
          </span>
        </div>
      </div>
    </div>
  );
};

export default AuthNav;
