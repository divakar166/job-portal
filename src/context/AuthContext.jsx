import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState(localStorage.getItem('userType') || null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  useEffect(() => {
    const fetchUser = async () => {
      if (token && userType) {
        try {
          const response = await fetch(`http://localhost:5000/api/${userType}s/profile`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (response.ok) {
            const data = await response.json();
            setUser(data);
          } else {
            console.error('Failed to fetch user data');
            logout();
            location.href = '/'
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUser();
  }, [token]);

  const login = (token, userType) => {
    setUserType(userType);
    setToken(token);
    localStorage.setItem('token', token);
    localStorage.setItem('userType', userType);
  };

  const logout = () => {
    setUser(null);
    setUserType(null);
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
  };

  return (
    <AuthContext.Provider value={{ user, userType, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
