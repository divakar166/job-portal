import React from 'react';

const UserTypeRadioGroup = ({ currentUserType, setCurrentUserType, activeStyle }) => {
  return (
    <div className="flex grid-rows-2 justify-around items-center w-full">
      <label className={`${activeStyle('developer')} mr-2`}>
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
      <label className={activeStyle('company')}>
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
  );
};

export default UserTypeRadioGroup;
