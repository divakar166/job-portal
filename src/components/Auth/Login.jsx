import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="w-full h-full bg-white flex justify-center items-center">
      Login
      <Link to='/register'>Register</Link>

    </section>
  );
};
export default Login;
