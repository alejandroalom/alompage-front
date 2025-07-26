import React, { useEffect, useState } from 'react';
import './estomago.css';
import { Link } from 'react-router-dom';

const Estomago = () => {
  const [courses, setCourses] = useState([]);
  const [software, setSoftware] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    fetch('https://alompage-back.onrender.com/course')
      .then(res => res.json())
      .then(data => setCourses(data))
      .catch(err => console.error('Error cursos:', err));

    fetch('https://alompage-back.onrender.com/software')
      .then(res => res.json())
      .then(data => setSoftware(data))
      .catch(err => console.error('Error software:', err));
  }, []);

  return (
    <section className="estomago-section">
      <div className="estomago-contenido">
        {/* Columna izquierda */}
        <div className="estomago-columna-izquierda">
          <div className="estomago-texto">
            <h2>Cómo me alimento profesionalmente</h2>
            <p>
              El aprendizaje constante y las herramientas que uso son parte esencial de mi trabajo.
              Aquí comparto algunos cursos que me han marcado y el software que manejo con soltura.
            </p>
          </div>

          <div className="estomago-bloques-cursos-software">
            <div className="estomago-bloque">
              <h3>Cursos</h3>
              <ul>
                {courses.map((item, index) => (
                  <li key={index}>
                    {item.name} – {item.provider}
                  </li>
                ))}
              </ul>
            </div>

            <div className="estomago-bloque">
              <h3>Software</h3>
              <ul>
                {software.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="estomago-columna-derecha">
          <div className="estomago-ilustracion">
            <div className="estomago-placeholder">[ ILUSTRACIÓN ESTÓMAGO ]</div>
          </div>
          <a
            className="estomago-link"
            href="https://github.com/alejandroalom"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visita mi GitHub
          </a>
          <Link to="/" className="boton-volver">Volver</Link>
        </div>
      </div>
    </section>
  );
};

export default Estomago;


