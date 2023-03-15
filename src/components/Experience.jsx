import React from 'react';
import './css/Experience.css';

const jobs = [
  {
    title: 'Desarrollador Frontend',
    company: 'Empresa A',
    date: 'Ene 2020 - Dic 2020',
    description: 'Robarnos lana mientras aprendemos',
  },
  {
    title: 'Desarrollador Full Stack',
    company: 'Empresa B',
    date: 'Ene 2021 - Sep 2021',
    description: 'Robarnos lana mientras aprendemos',
  },
  {
    title: 'Arquitecto de Software',
    company: 'Empresa C',
    date: 'Oct 2021 - Presente',
    description: 'Robarnos lana mientras aprendemos',
  },
];

export function Experience() {
  return (
    <div style={{ marginBottom: '15rem' }}>
      <h1 style={{ marginBottom: '50px', textAlign: 'center' }}>Experience</h1>
      <div className="TimelineContainer">
        <div className="Line" />
        {jobs.map((job, index) => (
          <div key={index} className="Job">
            <div className="JobPoint" />
            <div className="JobLabel">
              <h1>{job.title}</h1>
              <br />
              <h3>{job.company}</h3>

              <h5>{job.date}</h5>
              <br />
              <p>{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
