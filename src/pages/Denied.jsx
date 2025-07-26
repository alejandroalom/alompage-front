import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const Denied = () => {
  return (
    <div className="login-container">
      <h2>No eres digno de entrar en esta casa, vuelve por donde has venido.</h2>
      <Link className="volver-btn" to="/">Volver</Link>
    </div>
  );
};

export default Denied;

