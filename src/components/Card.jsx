import React from 'react';
import './css/Card.css';

const Card = ({ title, icon }) => {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <div className="card-title">{title}</div>
    </div>
  );
};

export default Card;
