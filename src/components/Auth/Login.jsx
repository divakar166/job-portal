import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import DeveloperDiv from "./DeveloperDiv";
import CompanyDiv from "./CompanyDiv";
import InputField from "../common/InputField";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserTypeRadioGroup from "../common/UserTypeRadioGroup";
import { Circles } from "react-loader-spinner";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [currentUserType, setCurrentUserType] = useState('developer');
  const [redirect, setRedirect] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const activeStyle = (userType) => 
    `border w-full text-center px-4 py-2 rounded-lg cursor-pointer ${userType === currentUserType ? 'border-purple-700 bg-purple-600 text-white' : 'border-purple-500'}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const endpoint = currentUserType === 'developer' ? '/api/developers/login' : '/api/companies/login';
      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (response.ok) {
        toast.success("Login Success!");
        login(result.token, currentUserType);
        setIsLoading(false);
        setRedirect(true);
        setTimeout(() => {
          navigate('/');
        }, 2000); 
      } else {
        toast.error(result.msg);
        setIsLoading(false);
      }
    } catch (error) {
      toast.error('Login failed. Please try again later.');
      setIsLoading(false);
    }
  };

  return (
    <section className="w-screen h-screen bg-gradient-to-r from-violet-300 to-violet-200 flex justify-center items-center">
      {currentUserType === 'developer' ? <DeveloperDiv type="login" /> : <CompanyDiv type="login" />}
      <div className="w-1/2 flex justify-center items-center">
        <div className="w-2/3 h-full bg-cover bg-center rounded-lg">
          <div className="text-4xl text-white my-5">Welcome Back!</div>
          <div className="text-md my-4">Don't have an account? <Link to='/auth/register' className="underline hover:text-purple-500">Register</Link></div>
          <form onSubmit={handleSubmit}>
            <UserTypeRadioGroup 
              currentUserType={currentUserType} 
              setCurrentUserType={setCurrentUserType} 
              activeStyle={activeStyle} 
            />
            <div className="my-2">
              <InputField 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Email" 
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <InputField 
                type="password" 
                name="password" 
                id="password" 
                placeholder="Password" 
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center justify-between my-1">
              <div className="flex items-center pt-1 mb-2">
                <input 
                  id="link-checkbox" 
                  type="checkbox" 
                  value="" 
                  className="w-4 h-4 border-purple-500 focus:ring-2 focus:ring-purple-600 focus:ring-inset outline-none bg-purple-500 text-purple-500 checked:bg-purple-500"
                />
                <label 
                  htmlFor="link-checkbox" 
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember Me
                </label>
              </div>
              <div className="text-md">
                <a href="/auth/developer/forgot-password" className="font-semibold text-purple-600 hover:text-purple-500">
                  Forgot password?
                </a>
              </div>
            </div>
            <button 
              type="submit" 
              className="w-full bg-purple-600 hover:bg-purple-500 text-white flex justify-center items-center py-3 rounded-lg"
            >
              {isLoading ? (<Circles
                height="30"
                width="30"
                color="#fff"
                ariaLabel="circles-loading"
                visible={true}
                />)
                : 
                "Login"
              }
            </button>
          </form>
        </div>
      </div>
      {redirect && (
        <div className="inset-0 absolute top-0 bg-black opacity-50 z-20 flex justify-center items-center rounded-lg w-full h-full">
          <div className="text-white text-xl">Redirecting...</div>
        </div>
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default Login;
