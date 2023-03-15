import React from 'react';
import './css/Contact.css';

export function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes conectar tu formulario con la librería o servicio que elijas para enviar correos
  };
  return (
    <div className="ContactContainer">
      <form className="ContactForm" onSubmit={handleSubmit}>
        <div className="ContactFormField">
          <input type="text" id="name" placeholder=" " required />
          <label htmlFor="name">Nombre</label>
        </div>
        <div className="ContactFormField">
          <input type="email" id="email" placeholder=" " required />
          <label htmlFor="email">Correo electrónico</label>
        </div>
        <div className="ContactFormField">
          <textarea id="message" placeholder=" " rows="5" required></textarea>
          <label htmlFor="message">Mensaje</label>
        </div>
        <button type="submit">Enviar</button>
      </form>
      <div className="ContactImage"></div>
    </div>
  );
}
