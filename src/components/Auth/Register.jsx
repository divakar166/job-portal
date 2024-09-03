import { useState } from "react";
import DeveloperDiv from "./DeveloperDiv";
import CompanyDiv from "./CompanyDiv";
import { Link } from "react-router-dom";
import InputField from '../common/InputField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [currentUserType, setCurrentUserType] = useState('developer');
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
    try {
      const endpoint = currentUserType === 'developer' ? '/api/developers/register' : '/api/companies/register';
      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        });
        toast.success(result.msg)
        setTimeout(() => {
          window.location.href = '/auth/login';
        }, 3000); 
      } else {
        toast.error(result.msg);
      }
    } catch (error) {
      toast.error('Registration failed. Please try again later.');
    }
  }
  return (
    <section className="w-screen h-screen bg-gradient-to-r from-violet-300 to-violet-200  flex justify-center items-center">
      {currentUserType == 'developer' ? <DeveloperDiv /> : <CompanyDiv />}
      <div className="w-1/2 h-[80%] flex justify-center items-center">
        <div className="w-2/3 h-full bg-cover bg-center rounded-lg flex flex-col justify-center items-center">
          <div className="text-4xl text-white my-2 text-left w-full">Create an account</div>
          <div className="text-md  mb-4 w-full text-left">Already have an account? <Link to='/auth/login' className="underline hover:text-purple-500">Login</Link></div>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex grid-rows-2 justify-around items-center w-full">
              <label 
                className={`${activeStyle('developer')} mr-2`}
              >
                <input 
                  type="radio" 
                  name="userType" 
                  value="developer" 
                  className="hidden"
                  checked={currentUserType === 'developer'}
                  onChange={() => setCurrentUserType('developer')}
                />
                Developer
              </label>
              <label 
                className={activeStyle('company')}
              >
                <input 
                  type="radio" 
                  name="userType" 
                  value="company" 
                  className="hidden"
                  checked={currentUserType === 'company'}
                  onChange={() => setCurrentUserType('company')}
                />
                Company
              </label>
            </div>
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
            <div className="relative flex gap-x-2 mb-2">
                <div className="flex h-6 items-center">
                  <input id="termsconditions" name="termsconditions" type="checkbox" className="h-4 w-4 rounded border-purple-300 text-purple-600 focus:ring-purple-600" />
                </div>
                <div className="text-sm leading-6">
                  <label className="font-medium text-gray-500">I agree to the <a className="text-purple-500 font-bold">Terms & Conditions</a></label>
                </div>
              </div>
            <button type="submit" className="w-full bg-purple-600 hover:bg-purple-500 text-lg text-white text-center py-3 rounded-lg">Create Account</button>
          </form>
        </div>
      </div>
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
