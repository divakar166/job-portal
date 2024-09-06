import { useState } from "react";
import axios from 'axios';
import DeveloperDiv from "./DeveloperDiv";
import CompanyDiv from "./CompanyDiv";
import { Link } from "react-router-dom";
import InputField from '../common/InputField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserTypeRadioGroup from "../common/UserTypeRadioGroup";

const Register = () => {
  const [currentUserType, setCurrentUserType] = useState('developer');
  const [submitBtn, setSubmitBtn] = useState('Create Account');
  const [redirect, setRedirect] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const activeStyle = (userType) =>  `border w-full text-center px-4 py-2  rounded-lg cursor-pointer sm:text-sm lg:text-lg ${ userType === currentUserType ? 'border-purple-700 bg-purple-600 text-white' : 'border-purple-500'}`;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      toast.error('All fields are required');
      return;
    }
    try {
      const endpoint = currentUserType === 'developer' ? '/api/developers/register' : '/api/companies/register';
      
      setSubmitBtn("Creating...");
  
      const response = await axios.post(`/backend${endpoint}`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const result = response.data;
      console.log(response.status)
      if (response.status === 201) {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        });
        toast.success(result.msg);
        setSubmitBtn("Created");
        setRedirect(true);
        setTimeout(() => {
          window.location.href = '/auth/login';
        }, 3000); 
      } else {
        toast.error(result.msg);
      }
    } catch (error) {
      setSubmitBtn("Create Account")
      if(error["response"].status == 500){
        toast.error("Server error!")
      }
      toast.error(error["response"]["data"]["msg"]);
    }
  };
  return (
    <section className="w-screen h-screen bg-gradient-to-r from-violet-300 to-violet-200  flex justify-center items-center">
      {currentUserType == 'developer' ? <DeveloperDiv type="register" /> : <CompanyDiv type="register" />}
      <div className="w-1/2 h-[80%] flex justify-center items-center">
        <div className="w-2/3 h-full bg-cover bg-center rounded-lg flex flex-col justify-center items-center">
          <div className="text-4xl text-white my-2 text-left w-full">Create an account</div>
          <div className="text-md  mb-4 w-full text-left">Already have an account? <Link to='/auth/login' className="underline hover:text-purple-500">Login</Link></div>
          <form onSubmit={handleSubmit} className="w-full">
            <UserTypeRadioGroup 
              currentUserType={currentUserType} 
              setCurrentUserType={setCurrentUserType} 
              activeStyle={activeStyle} 
            />
            <div className="flex grid-rows-2 justify-between items-center my-2">
              <div className="mr-2 w-full">
                <InputField 
                  type="text" 
                  name="firstName" 
                  id="first-name" 
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full">
                <InputField 
                  type="text" 
                  name="lastName" 
                  id="last-name" 
                  placeholder="Last name" 
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-2">
              <div>
                <InputField 
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder="Email" 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <div>
                <InputField 
                  type="password" 
                  name="password" 
                  id="password" 
                  placeholder="Password" 
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
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
                I agree with the  &nbsp;
                <a href="#" className="text-purple-600 hover:underline">terms and conditions</a>.
              </label>
            </div>
            <button type="submit" className="w-full bg-purple-600 hover:bg-purple-500 border border-purple-500 focus:ring-2 focus:ring-inset focus:ring-purple-600 outline-none text-lg text-white text-center py-3 rounded-lg">{submitBtn}</button>
          </form>
        </div>
      </div>
      {redirect && (<div className="inset-0 absolute top-0 bg-black opacity-50 z-20 flex justify-center items-center rounded-lg w-full h-full">
        <div className="text-white text-xl">Redirecting...</div>
      </div>)}
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
        transition: Bounce
      />
    </section>
  );
};
export default Register;
