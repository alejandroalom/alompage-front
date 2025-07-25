import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';

const Landing = () => {
  return (
    <div className="landing-container">
      <section className="hero-section">
        <div className="hero-alom-text">ALOM</div>
        <div className="hero-face">FACE</div>
        <div className="hero-subtitle">Código y diseño desde las tripas</div>
      </section>

      <section className="organs-section">
        <div className="organs-grid">
          <Link to="/corazon" className="organ-button">Corazón</Link>
          <Link to="/pulmon" className="organ-button">Pulmón</Link>
          <Link to="/higado" className="organ-button">Hígado</Link>
          <Link to="/estomago" className="organ-button">Estómago</Link>
          <Link to="/intestinos" className="organ-button double">Intestinos (doble)</Link>
        </div>
      </section>

      <section className="footer-section">
        <div className="footer-pies">PIES</div>
        <footer className="footer-text">
          <p>© 2025 ALOM. Todos los derechos reservados.</p>
        </footer>
      </section>
    </div>
  );
};

export default Landing;






