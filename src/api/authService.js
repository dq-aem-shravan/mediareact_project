// src/api/authService.js
import axiosInstance from './axiosInstance';

export const register = async (userData) => {
  const response = await axiosInstance.post('/user/register', userData);
  return response.data;
};

export const login = async (credentials) => {
  const response = await axiosInstance.post('/login', credentials);
  const { accessToken, refreshToken, roleName } = response.data;
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
  localStorage.setItem('role', roleName); // "USER" or "ADMIN"
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('role');
};

export const getCurrentUser = () => {
  return {
    token: localStorage.getItem('accessToken'),
    role: localStorage.getItem('role'),
  };
};