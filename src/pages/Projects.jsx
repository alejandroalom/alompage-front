import React from 'react';
import projects from '../data/projects';

function Projects() {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="border rounded-lg overflow-hidden shadow-md">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-600 hover:underline"
              >
                Ver proyecto
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
