import React, { useEffect } from 'react';
import { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import './css/Burger.css';

const sidebar = {
  open: {
    width: '100vw',
    height: '100vh',
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    width: 0,
    height: 0,
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const buttonVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const topBarVariants = {
  open: { y: 9, rotate: 45, originX: '50%', originY: '50%' },
  closed: { y: 0, rotate: 0 },
};

const middleBarVariants = {
  open: { opacity: 0 },
  closed: { opacity: 1 },
};

const bottomBarVariants = {
  open: { y: -9, rotate: -45, originX: '70%', originY: '50%' },
  closed: { y: 0, rotate: 0 },
};

export const Burger = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const backgroundRef = useRef();

  useEffect(() => {
    if (isOpen) {
      backgroundRef.current.style.width = '100vw';
      backgroundRef.current.style.height = '100vh';
    } else {
      backgroundRef.current.style.width = '0';
      backgroundRef.current.style.height = '0';
    }
  }, [isOpen]);

  return (
    <motion.div
      className="CustomBurger"
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      ref={containerRef}
    >
      <motion.nav
        className="background"
        ref={backgroundRef}
        variants={sidebar}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
      >
        <div className="mobile-nav-links">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>
      </motion.nav>
      <motion.button
        className="burger-button"
        onClick={() => toggleOpen()}
        variants={buttonVariants}
      >
        <motion.span className="top-bar" variants={topBarVariants} />
        <motion.span className="middle-bar" variants={middleBarVariants} />
        <motion.span className="bottom-bar" variants={bottomBarVariants} />
      </motion.button>
    </motion.div>
  );
};
