// src/pages/Login.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { register, login } from '../api/authService';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    role: 'ADMIN'
  });

  const [error, setError] = useState('');
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (isRegister) {
        // 🔹 REGISTER PAYLOAD (backend contract)
        const registerPayload = {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: formData.role
        };

        await register(registerPayload);
        alert('Registration successful! Now login.');
        setIsRegister(false);

      } else {
        // 🔹 LOGIN PAYLOAD (backend contract)
        const loginPayload = {
          username: formData.username,
          password: formData.password
        };
        console.log("Login Payload:", loginPayload);
        // debugger
        const res = await login(loginPayload);
        loginUser(res);
        console.log("Login success response:", res);
        // debugger
        navigate('/portfolio');
      }

    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc' }}>
      <h2>{isRegister ? 'Register Admin' : 'Admin Login'}</h2>

      <form onSubmit={handleSubmit}>
        {isRegister && (
          <>
            <input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              name="role"
              value="ADMIN"
              readOnly
              style={{ background: '#eee' }}
            />
          </>
        )}

        {!isRegister && (
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        )}

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">
          {isRegister ? 'Register' : 'Login'}
        </button>
      </form>

      <p>
        {isRegister ? 'Already have account?' : "Don't have account?"}{' '}
        <span
          style={{ color: 'blue', cursor: 'pointer' }}
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister ? 'Login' : 'Register'}
        </span>
      </p>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
