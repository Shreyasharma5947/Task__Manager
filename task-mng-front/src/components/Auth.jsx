import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/Login.css'; // Assuming the same CSS file for consistency

const Auth = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isRegister ? 'register' : 'login';
    try {
      const response = await fetch(`http://localhost:5000/api/users/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || `${endpoint === 'register' ? 'Registration' : 'Login'} failed`);
      if (!isRegister) {
        setToken(data.token);
        navigate('/tasks');
      } else {
        setIsRegister(false);
        setError('Registration successful! Please log in.');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-tabs">
          <button
            onClick={() => { setIsRegister(false); setError(''); }}
            className={`tab-button ${!isRegister ? 'tab-active' : 'tab-inactive'}`}
          >
            Login
          </button>
          <button
            onClick={() => { setIsRegister(true); setError(''); }}
            className={`tab-button ${isRegister ? 'tab-active' : 'tab-inactive'}`}
          >
            Register
          </button>
        </div>
        <form onSubmit={handleSubmit} className="auth-form">
          <h2 className="auth-title">{isRegister ? 'Register' : 'Login'}</h2>
          {error && <p className="error-message">{error}</p>}
          <div className="form-group">
            <label className="form-label">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <button type="submit" className="auth-button">
            {isRegister ? 'Register' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;