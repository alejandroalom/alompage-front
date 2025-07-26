import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './pulmon.css';

const Pulmon = () => {
  const [educacion, setEducacion] = useState([]);
  const [experiencia, setExperiencia] = useState([]);

  useEffect(() => {
    fetch('https://alompage-back.onrender.com/education')
      .then(res => res.json())
      .then(data => setEducacion(data));

    fetch('https://alompage-back.onrender.com/experience')
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
              {educacion.length === 0 ? (
                <p>No hay datos de educación disponibles.</p>
              ) : (
                educacion.map((item, index) => (
                  <div key={index} className="pulmon-item">
                    <h4>{item.title}</h4>
                    <p>{item.institution} - {item.location}</p>
                    <p>{item.startDate} – {item.endDate}</p>
                    <p>{item.description}</p> {/* Esta línea es la nueva */}
                  </div>
                ))
              )}
            </div>

            <div className="pulmon-columna">
              <h3>Experiencia</h3>
              {experiencia.length === 0 ? (
                <p>No hay datos de experiencia disponibles.</p>
              ) : (
                experiencia.map((item, index) => (
                  <div key={index} className="pulmon-item">
                    <h4>{item.position}</h4>
                    <p>{item.company} - {item.location}</p>
                    <p>{item.startDate} – {item.endDate}</p>
                    <p>{item.description}</p>
                  </div>
                ))
              )}
            </div>
          </div>

          <Link to="/" className="boton-volver">Volver</Link>
        </div>
      </div>
    </section>
  );
};

export default Pulmon;






