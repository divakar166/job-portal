const CompanyLogin = () => {
  return (
    <div className="h-[80vh] mx-10 mt-5 flex justify-center items-center">
      <div className="border border-1 h-full w-4/5 flex justify-center">
        <div className="w-1/2 h-full flex flex-col justify-center items-center">
          <div className="w-6 h-6 flex items-center justify-center">
            <img
              src="/logo.png"
              height={100}
              width={100}
              className="logo"
              alt="Logo"
            />
            <span className="pl-2 font-bold">Connect</span>
          </div>
          <div className="text-center my-4">
            <p className="text-xl font-bold">Welcome Back</p>
            <p className="text-sm text-slate-500">Please enter your details</p>
          </div>
          <form className="w-3/5">
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div class="relative mt-2 rounded-md shadow-sm">
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900  placeholder:text-gray-400 sm:text-sm sm:leading-6 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-500 outline-none"
                  placeholder="josh@email.com"
                />
              </div>
            </div>
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div class="rounded-md shadow-sm">
                <input
                  type="password"
                  name="password"
                  id="password"
                  class="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900  placeholder:text-gray-400 sm:text-sm sm:leading-6 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-500 outline-none"
                  placeholder="Shh...it's secret"
                />
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <div class="flex items-center mb-4">
                <input
                  id="remember_me"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="remember_me"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm underline">
                Forgot password?
              </a>
            </div>
            <div>
              <button className="w-full bg-purple-500 px-2 py-1 text-white rounded-lg">
                Sign in
              </button>
            </div>
          </form>
          <div className="text-sm text-gray-500 mt-2">
            Don't have an account?{" "}
            <a href="./register" className="underline text-black">
              Register
            </a>
          </div>
        </div>
        <div className="w-1/2 h-full bg-gradient-to-b from-[#aa4b6b] via-[#6b6b83] to-[#3b8d99] flex justify-center items-center">
          <div className="h-1/2 w-1/2 bg-white-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20  flex flex-col justify-center gap-y-2">
            <div className="text-slate-300 font-bold text-xl">
              Hire top talent
            </div>
            <div className="border-b border-slate-100 w-1/2"></div>
            <div className="text-slate-300 font-bold text-xl">
              Grow Your Business
            </div>
            <div className="border-b border-slate-100 w-1/2"></div>

            <div className="text-slate-300 font-bold text-xl">
              Empower Your Team
            </div>
            <div className="border-b border-slate-100 w-1/2"></div>
            <div className="text-slate-300 font-bold text-xl">
              Streamline Hiring
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompanyLogin;
