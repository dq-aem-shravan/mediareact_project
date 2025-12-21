// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { getCurrentUser, logout } from '../api/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = () => {
      const current = getCurrentUser();
      if (current.token) {
        setUser({
          role: current.role,
          isAdmin: current.role === 'ADMIN', // Adjust if backend sends "ADMIN"
        });
      }
      setLoading(false);
    };
    loadUser();
  }, []);

  const loginUser = (userData) => {
    setUser({
      role: userData.roleName,
      isAdmin: userData.roleName === 'ADMIN',
    });
  };

  const logoutUser = () => {
    logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin: user?.isAdmin, loginUser, logoutUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};