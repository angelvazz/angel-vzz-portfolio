import React from 'react';
import { NavBar } from '../components/NavBar';
import { Hero } from '../components/Hero';
import { Skills } from '../components/Skills';

export function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Skills />
    </div>
  );
}
