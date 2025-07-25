import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './higado.css';

const Higado = () => {
  const [skills, setSkills] = useState([]);
  const [idiomas, setIdiomas] = useState([]);
  const [datosInteres, setDatosInteres] = useState([]);

  useEffect(() => {
    fetch('https://backend-project-break-3s17.onrender.com/skills')
      .then(res => res.json())
      .then(data => setSkills(data));

    fetch('https://backend-project-break-3s17.onrender.com/languages')
      .then(res => res.json())
      .then(data => setIdiomas(data));

    fetch('https://backend-project-break-3s17.onrender.com/interests')
      .then(res => res.json())
      .then(data => setDatosInteres(data));
  }, []);

  return (
    <section className="higado-section">
      <div className="higado-contenido">
        <div className="higado-ilustracion">
          <div className="higado-placeholder">[ ILUSTRACIÓN HÍGADO ]</div>
        </div>

        <div className="higado-texto">
          <h2>Lo que me hace diferente</h2>
          <p>
            En esta sección muestro habilidades clave, idiomas que domino y detalles personales que aportan valor. Una combinación entre lo técnico y lo humano, lo aprendido y lo vivido.
          </p>
        </div>

        <div className="bloques-back">
          <div className="bloque">
            <h3>Soft Skills</h3>
            <ul>
              {skills.map((item, i) => (
                <li key={i}>{item.nombre}</li>
              ))}
            </ul>
          </div>

          <div className="bloque">
            <h3>Idiomas</h3>
            <ul>
              {idiomas.map((item, i) => (
                <li key={i}>{item.nombre}</li>
              ))}
            </ul>
          </div>

          <div className="bloque">
            <h3>Datos de Interés</h3>
            <ul>
              {datosInteres.map((item, i) => (
                <li key={i}>{item.nombre}</li>
              ))}
            </ul>
          </div>
        </div>

        <Link to="/" className="boton-volver">Volver</Link>
      </div>
    </section>
  );
};

export default Higado;

