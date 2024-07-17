import { useState, useContext } from 'react';
import axios from '../../api/axios';
import { AuthContext } from '../../context/AuthContext';
import Label from '../common/Label';
import Logo from '../common/Logo';

const DeveloperLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { login } = useContext(AuthContext);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/developers/login', formData);
      const { developer, token } = response.data;
      login(developer, 'developer', token);
      localStorage.setItem('token', token);
      localStorage.setItem('userType', 'developers');
      alert('Login successful!');
    } catch (error) {
      console.error('There was an error logging in!', error);
    }
  };
  return (
    <div className="h-[80vh] mx-10 mt-5 flex justify-center items-center">
      <div className="border border-1 h-full w-4/5 flex justify-center">
        <div className="w-1/2 h-full flex flex-col justify-center items-center">
          <div className="w-6 h-6 flex items-center justify-center">
            <Logo />
            <span className="pl-2 font-bold">Connect</span>
          </div>
          <div className="text-center my-4">
            <p className="text-xl font-bold">Welcome Back</p>
            <p className="text-sm text-slate-500">Please enter your details</p>
          </div>
          <form className="w-3/5" onSubmit={handleSubmit}>
            <Label type="email" name="Email" placeholder="josh@email.com" value={formData.email} onChange={handleChange} />
            <Label type="password" name="Password" placeholder="Shh...it's secret" value={formData.password} onChange={handleChange} />
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
              Boost Your Career
            </div>
            <div className="border-b border-slate-100 w-1/2"></div>
            <div className="text-slate-300 font-bold text-xl">
              Discover Opportunities
            </div>
            <div className="border-b border-slate-100 w-1/2"></div>
            <div className="text-slate-300 font-bold text-xl">
              Showcase Your Skills
            </div>
            <div className="border-b border-slate-100 w-1/2"></div>
            <div className="text-slate-300 font-bold text-xl">
              Achieve Your Goals
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DeveloperLogin;
