import React, { useState } from 'react';
import TypingText from './TypingText';
import programmer from '../assets/programmer.svg';
import './css/Hero.css';
import { ButtonNeon } from './Button';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { AiFillGoogleCircle } from 'react-icons/ai';

export function Hero() {
  return (
    <div className="Hero">
      <div>
        <AiFillLinkedin size={48} />
        <AiFillGithub size={48} />
        <AiFillGoogleCircle size={48} />
        <h1>Hello, I'm Angel Vazquez,</h1>
        <div className="typing-text">
          <TypingText
            textArray={[
              'Welcome to my Portfolio,',
              `I'm a Full Stack Software Developer`,
              `and I've been building applications over 3 years,`,
              'enjoy my portfolio.',
            ]}
            speed={100}
          />
        </div>
        <ButtonNeon text="Get Resume" />
      </div>
      <div>
        <img className="programmer" src={programmer} />
      </div>
    </div>
  );
}
