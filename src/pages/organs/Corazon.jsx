import React from 'react';
import { Link } from 'react-router-dom';
import './corazon.css';

const Corazon = () => {
  return (
    <section className="corazon-section">
      <div className="corazon-container">
        <div className="corazon-ilustracion">
          <div className="corazon-placeholder">
            [ ILUSTRACIÓN CORAZÓN ]
          </div>
        </div>

        <div className="corazon-texto">
          <h2>¿Quién soy?</h2>
          <p>
            Aquí irá carta de presentación. Un texto claro y potente explicando enfoque, lo que me mueve y por qué deberían contratarme.
          </p>

          <Link to="/" className="boton-volver">Volver</Link>
        </div>
      </div>
    </section>
  );
};

export default Corazon;


