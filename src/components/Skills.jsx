import React from 'react';
import './css/Skills.css';
import { AiFillGithub } from 'react-icons/ai';
import Card from './Card';

export function Skills() {
  return (
    <div>
      <div className="contenedor-skill">
        <div className="titulo-contenedor">
          <h1>Front-End</h1>
        </div>
        <div className="card-contenedor">
          <div className="centro">
            <Card title="Mi título" icon={<AiFillGithub size={48} />} />
          </div>
          <div className="derecha">
            <Card title="Mi título" icon={<AiFillGithub size={48} />} />
          </div>
          <div className="centro">
            <Card title="Mi título" icon={<AiFillGithub size={48} />} />
          </div>
          <div className="derecha">
            <Card title="Mi título" icon={<AiFillGithub size={48} />} />
          </div>

          <div className="izquierda">
            <Card title="Mi título" icon={<AiFillGithub size={48} />} />
          </div>
        </div>
      </div>
      <div className="contenedor-skill">
        <div className="titulo-contenedor">
          <h1>Back-End</h1>
        </div>
        <div className="card-contenedor">
          <div className="centro">
            <Card title="Mi título" icon={<AiFillGithub size={48} />} />
          </div>
          <div className="derecha">
            <Card title="Mi título" icon={<AiFillGithub size={48} />} />
          </div>
          <div className="centro">
            <Card title="Mi título" icon={<AiFillGithub size={48} />} />
          </div>
          <div className="derecha">
            <Card title="Mi título" icon={<AiFillGithub size={48} />} />
          </div>

          <div className="izquierda">
            <Card title="Mi título" icon={<AiFillGithub size={48} />} />
          </div>
        </div>
      </div>
      <div className="contenedor-skill">
        <div className="titulo-contenedor">
          <h1>Cloud</h1>
        </div>
        <div className="card-contenedor">
          <div className="centro">
            <Card title="Mi título" icon={<AiFillGithub size={48} />} />
          </div>
          <div className="derecha">
            <Card title="Mi título" icon={<AiFillGithub size={48} />} />
          </div>
          <div className="centro">
            <Card title="Mi título" icon={<AiFillGithub size={48} />} />
          </div>
          <div className="derecha">
            <Card title="Mi título" icon={<AiFillGithub size={48} />} />
          </div>

          <div className="izquierda">
            <Card title="Mi título" icon={<AiFillGithub size={48} />} />
          </div>
        </div>
      </div>
    </div>
  );
}
