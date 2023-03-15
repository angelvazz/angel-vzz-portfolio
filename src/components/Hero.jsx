import React from 'react';
import { motion } from 'framer-motion';
import TypingText from './TypingText';
import programmer from '../assets/programmer.svg';
import './css/Hero.css';
import { ButtonNeon } from './Button';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { AiFillGoogleCircle } from 'react-icons/ai';

export function Hero() {
  return (
    <div className="Hero">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 2 }}
      >
        <AiFillLinkedin size={48} />
        <AiFillGithub size={48} />
        <AiFillGoogleCircle size={48} />
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 1, duration: 2, type: 'spring', stiffness: 120 }}
        >
          Hello, I'm Angel Vazquez,
        </motion.h1>
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
      </motion.div>
      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <img className="programmer" src={programmer} alt="Programmer" />
      </motion.div>
    </div>
  );
}
