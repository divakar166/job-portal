import { Link } from "react-router-dom";
const DevelopersAuth = () => {
  return (
    <section className="w-1/2 bg-white flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="p-5 w-[75%] text-center">
          <div className="text-2xl">
            For <span className="text-purple-500">Developers</span>
          </div>
          <div>
            Unlock your potential by finding the perfect job and building your
            professional profile
          </div>
        </div>
        <div className="p-3">
          <a href="auth/dev/login">
            <button className="outline-1 outline-purple-500 outline w-40 h-10 text-purple-500 rounded-lg hover:bg-purple-500 hover:text-white">
              Login
            </button>
          </a>
        </div>
        <div className="p-5 flex justify-center items-center flex-col">
          <div>Don't have an account?</div>
          <a
            href="auth/dev/register"
            className="text-purple-500 hover:text-purple-700 hover:underline"
          >
            Sign up
          </a>
        </div>
      </div>
    </section>
  );
};
export default DevelopersAuth;
