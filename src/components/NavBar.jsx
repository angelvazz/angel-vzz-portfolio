import React, { useEffect } from 'react';
import { ButtonNeon } from './Button';
import './css/NavBar.css';
import { Burger } from './Burger';

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
      <div className="NavBarInner">
        <img className="logo" src="src/assets/firma_AVzz.png" />
        <div className="nav-links">
          <a>Home</a>
          <a>Skills</a>
          <a>Projects</a>
        </div>
        <div className="boton-connect">
          <ButtonNeon text="Connect" />
        </div>

        <Burger />
      </div>
    </div>
  );
}
