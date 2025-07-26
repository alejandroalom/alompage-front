import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (password.trim() === 'AbracadabrA') {
      window.location.href = 'https://alompage-back.onrender.com/';
    } else {
      navigate('/denied');
    }
  };

  return (
    <div className="login-container">
      <h2>no sé si deberías estar aquí...</h2>

      <form onSubmit={handleLogin}>
        <input
          type="password"
          placeholder="Introduce la contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>

      <button className="volver-btn" onClick={() => navigate('/')}>
        Volver
      </button>
    </div>
  );
};

export default Login;



