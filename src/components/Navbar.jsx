import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo-black.png';

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'h-full border-b-purple-500 border-b-2'
      : 'menu__link h-full';

  return (
    <nav className='bg-white dark:bg-black border-b border-slate-300 dark:border-neutral-500'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex flex-1 items-center justify-around md:items-stretch md:justify-start'>
            <NavLink className='flex flex-shrink-0 items-center mr-4' to='/'>
              <div className='h-10 w-10 rounded-full bg-white flex justify-center items-center'>
                <a href='/' className='w-8 h-8 hover:rotate-45 transition-all ease-in-out'>
                  <img src={logo} height={100} width={100} alt='Logo' />
                </a>
              </div>
            </NavLink>
            <div className='md:ml-auto md:flex items-center hidden'>
              <div className='flex space-x-4 items-center'>
                <NavLink to='/jobs' className={linkClass}>
                  Find a Job
                </NavLink>
                <NavLink to='/companies' className={linkClass}>
                  Companies
                </NavLink>
                <NavLink to='/about' className={linkClass}>
                  Why Connect?
                </NavLink>
                <NavLink to='/contact' className={linkClass}>
                  Contact
                </NavLink>
              </div>
            </div>
            <div className='md:ml-auto'>
              <div className='flex space-x-2'>
                <NavLink to='/' className="bg-purple-500 hover:bg-purple-600 p-2 px-3 text-white rounded-full">
                  Join with Us!
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;