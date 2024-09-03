import { useState } from "react";
import { Link } from "react-router-dom";
import DeveloperDiv from "./DeveloperDiv";
import CompanyDiv from "./CompanyDiv";
import InputField from "../common/InputField";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [currentUserType, setCurrentUserType] = useState('developer');
  const [formData, setFormData] = useState({
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
  const activeStyle = (userType) =>  `border w-full text-center px-4 py-2  rounded-lg cursor-pointer ${ userType === currentUserType ? 'border-purple-700 bg-purple-600 text-white' : 'border-purple-500'}`;
  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const endpoint = currentUserType === 'developer' ? '/api/developers/register' : '/api/companies/register';
    //   const response = await fetch(`http://localhost:5000${endpoint}`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });
  
    //   const result = await response.json();
  
    //   if (response.ok) {
    //     toast.success(result.msg)
    //     setTimeout(() => {
    //       window.location.href = '/login';
    //     }, 3000); 
    //   } else {
    //     toast.error(result.msg);
    //   }
    // } catch (error) {
    //   toast.error('Registration failed. Please try again later.');
    // }
  }
  return (
    <section className="w-screen h-screen bg-gradient-to-r from-violet-300 to-violet-200  flex justify-center items-center">
      {currentUserType == 'developer' ? <DeveloperDiv /> : <CompanyDiv />}
      <div className="w-1/2 flex justify-center items-center">
        <div className="w-2/3 h-full bg-cover bg-center rounded-lg">
          <div className="text-4xl text-slate-700 my-5">Welcome Back!</div>
          <div className="text-md my-4">Don't have an account? <Link to='/auth/register' className="underline hover:text-purple-500">Register</Link></div>
          <form onSubmit={handleSubmit}>
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
            <div className="my-2">
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
            <div className="mb-2">
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
            <button type="submit" className="w-full bg-purple-600 hover:bg-purple-500 text-white text-center py-3 rounded-lg">Login</button>
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
export default Login;
