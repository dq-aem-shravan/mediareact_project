// src/api/mediaService.js
import axiosInstance from './axiosInstance';

const MEDIA_BASE = 'http://localhost:8080'; // Full domain since URLs are relative

export const uploadMedia = async (files) => {
  const formData = new FormData();
  files.forEach(file => formData.append('files', file));

  const response = await axiosInstance.post('admin/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data; // List of UUIDs
};

export const getAllMedia = async (page = 0, size = 20) => {
  const response = await axiosInstance.get('admin/media', {
    params: { page, size },
  });
  return response.data;
};

// Helper to get full image URL
export const getMediaUrl = (id) => `${MEDIA_BASE}/web/api/v1/admin/media/public/${id}`;




