import React, { useEffect } from 'react';
import './intestinos.css';
import { Link } from 'react-router-dom';

const Intestinos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="intestinos-section">
      <div className="intestinos-contenido">
        <div className="intestinos-ilustracion">
          <div className="intestinos-placeholder">[ ILUSTRACIÓN INTESTINOS ]</div>
        </div>

        <div className="intestinos-texto">
          <h2>Página en construcción</h2>
          <p>Disculpen las molestias, estamos en obras... así que si no llevas casco no te podemos dejar pasar.</p>
          <Link to="/" className="boton-volver">Volver</Link>
        </div>
      </div>
    </section>
  );
};

export default Intestinos;

