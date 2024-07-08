import Label from "../common/Label";
const CompanyRegister = () => {
  return (
    <div className="h-[80vh] mx-10 mt-5 flex justify-center items-center">
      <div className="border border-1 h-full w-4/5 flex justify-center">
        <div className="w-1/2 h-full bg-gradient-to-b from-[#aa4b6b] via-[#6b6b83] to-[#3b8d99] flex justify-center items-center">
          <img src="/register-work.png" alt="register" className="h-3/5" />
        </div>
        <div className="w-1/2 h-full flex flex-col justify-center items-center">
          <div className="w-6 h-6 flex items-center justify-center">
            <img
              src="/logo.png"
              height={100}
              width={100}
              className="logo"
              alt="Logo"
            />
          </div>
          <div className="text-center my-4">
            <p className="text-xl font-bold">
              Hi, Welcome to <span className="text-purple-500">Connect</span>
            </p>
            <p className="text-sm text-slate-500">Let's get started</p>
          </div>
          <form className="w-3/5">
            <Label type="email" name="Email" placeholder="josh@connect.com" />
            <Label
              type="password"
              name="Password"
              placeholder="Shh...it's secret!"
            />
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
      </div>
    </div>
  );
};
export default CompanyRegister;
