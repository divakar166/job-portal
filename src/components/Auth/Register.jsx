import { useState } from "react";
import DeveleporDiv from "./DeveleporDiv";
import CompanyDiv from "./CompanyDiv";
import { Link } from "react-router-dom";

const Register = () => {
  const [currentUserType, setCurrentUserType] = useState('dev5eloper');
  return (
    <section className="w-screen h-screen bg-gradient-to-r from-violet-300 to-violet-200  flex justify-center items-center">
      {currentUserType == 'developer' ? <DeveleporDiv /> : <CompanyDiv />}
      <div className="w-1/2 flex justify-center items-center">
        <div className="w-full h-full bg-cover bg-center rounded-lg">
          <div className="text-4xl text-white">Create an account</div>
          <div>Already have an account? <Link to='/login' className="underline">Login</Link></div>
          <div>
            <div>Developer</div>
            <div>Company</div>
          </div>
          <div>
            <div>First Name</div>
            <div>Last Name</div>
          </div>
          <div>Email</div>
          <div>Password</div>
          <div>Accept terms&conditions</div>
          <div>Create Account</div>
        </div>
      </div>
    </section>
  );
};
export default Register;
