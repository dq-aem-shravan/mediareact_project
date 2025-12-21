// src/pages/AdminDashboard.js
import React, { useState, useEffect, useContext } from 'react';
import { uploadMedia, getAllMedia, getMediaUrl } from '../api/mediaService';
import { AuthContext } from '../context/AuthContext';

const AdminDashboard = () => {
  const { isAdmin, logoutUser } = useContext(AuthContext);
  const [files, setFiles] = useState([]);
  const [mediaList, setMediaList] = useState([]);

  useEffect(() => {
    if (isAdmin) fetchMedia();
  }, [isAdmin]);

  const fetchMedia = async () => {
    const data = await getAllMedia();
    setMediaList(data.content);
  };

  const handleUpload = async () => {
    if (files.length === 0) return;
    await uploadMedia(files);
    alert('Upload successful!');
    setFiles([]);
    fetchMedia();
  };

  if (!isAdmin) return <p>Access denied</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Admin Media Manager</h1>
      <button onClick={logoutUser}>Logout</button>

      <div style={{ margin: '20px 0' }}>
        <input type="file" multiple onChange={(e) => setFiles(Array.from(e.target.files))} />
        <button onClick={handleUpload} disabled={files.length === 0}>Upload</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {mediaList.map((media) => (
          <div key={media.id}>
            <img src={getMediaUrl(media.id)} alt={media.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <p>{media.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;