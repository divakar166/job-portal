
const CompaniesAuth = () => {
  return (
    <section className="w-1/2 bg-gradient-to-b from-slate-100 to-purple-300 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="p-5 w-[75%] text-center">
          <div className="text-2xl">
            For <span className="text-purple-500">Companies</span>
          </div>
          <div>
            Discover and recruit top talent to drive your company's success
          </div>
        </div>
        <div className="p-3">
          <a href="auth/company/login">
            <button className="outline-1 outline-purple-500 outline bg-purple-500 w-40 h-10 text-white rounded-lg hover:bg-purple-700">
              Login
            </button>
          </a>
        </div>
        <div className="p-5 flex justify-center items-center flex-col">
          <div>Don't have an account?</div>
          <a
            href="auth/company/register"
            className="text-purple-500 hover:text-purple-700 hover:underline"
          >
            Sign up
          </a>
        </div>
      </div>
    </section>
  );
};
export default CompaniesAuth;
