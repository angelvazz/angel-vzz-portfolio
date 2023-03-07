import React, { useEffect } from 'react';
import './css/NavBar.css';
import { ButtonNeon } from './Button';

export function NavBar() {
  useEffect(() => {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        navbar.style.backgroundColor = '#121212';
      } else {
        navbar.style.backgroundColor = 'transparent';
      }
    });
  }, []);
  return (
    <div className="NavBar" id="navbar">
      <div>
        <img className="logo" src="src/assets/firma_AVzz.png" />
      </div>
      <div className="nav-links">
        <a>Home</a>
        <a>Skills</a>
        <a>Projects</a>
      </div>
      <div className="boton-connect">
        <ButtonNeon text="Connect" />
      </div>
    </div>
  );
}
