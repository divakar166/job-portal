import React, { createContext, useState, useEffect } from 'react';
import axios from '../api/axios';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  useEffect(() => {
    const fetchUser = async () => {
      const storedUserType = localStorage.getItem('userType');
      if (token && storedUserType) {
        try {
          const response = await axios.get(`/${storedUserType}/profile`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(response.data);
          setUserType(storedUserType);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUser();
  }, [token]);

  const login = (userData, type, newToken) => {
    setUser(userData);
    setUserType(type);
    setToken(newToken);
    localStorage.setItem('token', newToken);
    localStorage.setItem('userType', type);
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
