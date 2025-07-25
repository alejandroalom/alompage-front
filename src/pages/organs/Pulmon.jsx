import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './pulmon.css';

const Pulmon = () => {
  const [educacion, setEducacion] = useState([]);
  const [experiencia, setExperiencia] = useState([]);

  useEffect(() => {
    fetch('https://backend-project-break-3s17.onrender.com/education')
      .then(res => res.json())
      .then(data => setEducacion(data));

    fetch('https://backend-project-break-3s17.onrender.com/experience')
      .then(res => res.json())
      .then(data => setExperiencia(data));
  }, []);

  return (
    <section className="pulmon-section">
      <div className="pulmon-container">
        <div className="pulmon-imagen">
          <img src="/assets/images/foto-perfil.png" alt="Foto perfil" className="pulmon-foto" />
        </div>

        <div className="pulmon-texto">
          <h2>Mi experiencia y formación</h2>
          <p>
            En esta sección verás una introducción a mi perfil profesional, con foco en la educación y experiencia que he acumulado. Una foto vale más que mil palabras, pero algunos párrafos también ayudan.
          </p>

          <div className="pulmon-datos">
            <div className="pulmon-columna">
              <h3>Educación</h3>
              <ul>
                {educacion.map((item, index) => (
                  <li key={index}>{item.nombre}</li>
                ))}
              </ul>
            </div>

            <div className="pulmon-columna">
              <h3>Experiencia</h3>
              <ul>
                {experiencia.map((item, index) => (
                  <li key={index}>{item.nombre}</li>
                ))}
              </ul>
            </div>
          </div>

          <Link to="/" className="boton-volver">Volver</Link>
        </div>
      </div>
    </section>
  );
};

export default Pulmon;



