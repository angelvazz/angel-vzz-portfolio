import React from 'react';
import './css/Projects.css';

const projects = [
  {
    title: 'Proyecto A',
    description: 'Descripción del proyecto A.',
    image: 'src/assets/ecommerce.png',
  },
  {
    title: 'Proyecto B',
    description: 'Descripción del proyecto B.',
    image: 'src/assets/rent-car.png',
  },
  {
    title: 'Proyecto C',
    description: 'Descripción del proyecto C.',
    image: 'src/assets/crypto.png',
  },
];

const ProjectBox = ({ project }) => (
  <div className="ProjectBox">
    <img src={project.image} alt={project.title} className="ProjectImage" />
    <div className="ProjectInfo">
      <h3 className="ProjectTitle">{project.title}</h3>
      <p className="ProjectDescription">{project.description}</p>
    </div>
  </div>
);

export function Projects() {
  return (
    <div style={{ marginBottom: '10rem' }}>
      <h1 style={{ marginBottom: '50px', textAlign: 'center' }}>Experience</h1>
      <div className="ProjectsContainer">
        {projects.map((project, index) => (
          <ProjectBox key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
