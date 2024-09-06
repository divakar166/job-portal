import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Link, useLocation } from 'react-router-dom';

export default function ProfileAvatar({handleLogout, profileImg}) {
  const location = useLocation();
  const isProfilePage = location.pathname === '/profile';
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className={`inline-flex w-full justify-center gap-x-1.5 rounded-full bg-white p-2 text-sm font-semibold text-gray-500 shadow-sm ring-1 ring-inset 
        ${isProfilePage ? 'ring-purple-500' : 'ring-gray-300'} hover:bg-gray-50`}>
        <div className="relative w-6 h-6 overflow-hidden bg-gray-100 rounded-full justify-center items-center flex">
            {profileImg ? (<>DS</>) : (<img src="logo.png" alt='profile' />)}
        </div>
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <Link
              to='/profile'
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Profile
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to='/applications'
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              My Applications
            </Link>
          </MenuItem>
          <MenuItem>
            <button
              type="submit"
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              onClick={handleLogout}
            >
              Sign out
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}
