import React, { useEffect, useState } from 'react';
import './higado.css';
import { Link } from 'react-router-dom';

const Higado = () => {
  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [interests, setInterests] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    fetch('https://alompage-back.onrender.com/skill')
      .then(res => res.json())
      .then(data => setSkills(data))
      .catch(err => console.error('Error skills:', err));

    fetch('https://alompage-back.onrender.com/language')
      .then(res => res.json())
      .then(data => setLanguages(data))
      .catch(err => console.error('Error languages:', err));

    fetch('https://alompage-back.onrender.com/interest')
      .then(res => res.json())
      .then(data => setInterests(data))
      .catch(err => console.error('Error interests:', err));
  }, []);

  return (
    <section className="higado-section">
      <div className="higado-contenido">
        <div className="higado-ilustracion">
          <div className="higado-placeholder">[ ILUSTRACIÓN HÍGADO ]</div>
        </div>

        <div className="higado-texto">
          <div className="higado-intro-texto">
            <h2>Lo que me hace diferente</h2>
            <p>
              En esta sección muestro habilidades clave, idiomas que domino y detalles personales que aportan valor. Una combinación entre lo técnico y lo humano, lo aprendido y lo vivido.
            </p>
          </div>

          <div className="bloques-back">
            <div className="columna-izquierda">
              <div className="bloque">
                <h3>Soft Skills</h3>
                <ul>
                  {skills.map((item, index) => (
                    <li key={index}>{item.name}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="columna-derecha">
              <div className="bloque">
                <h3>Idiomas</h3>
                <ul>
                  {languages.map((item, index) => (
                    <li key={index}>
                      {item.name} – {item.level}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bloque">
                <h3>Datos de Interés</h3>
                <ul>
                  {interests.map((item, index) => (
                    <li key={index}>{item.text}</li>
                  ))}
                </ul>
              </div>

              <Link to="/" className="boton-volver">Volver</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Higado;




