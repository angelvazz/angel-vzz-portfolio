import React from 'react';
import { NavBar } from '../components/NavBar';
import { Hero } from '../components/Hero';
import Skills from '../components/Skills';
import { Experience } from '../components/Experience';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';

export function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
