import React from 'react';
import { motion } from 'framer-motion';
import { useIsMobileContext } from '../../contexts/IsMobileContext';

const SlideUpLetters = ({ word, onScreen }) => {
  const {isMobile} = useIsMobileContext()

  const wordVariant = {
    show: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  };
  const letterVariant = {
    hide: {
      y: 150,
    },
    show: {
      y: 0,
      transition: {
        type: 'tween',
      },
    },
  };
  return (
    <motion.h1
      initial={onScreen || isMobile ? 'show' : 'hide'}
      animate={onScreen || isMobile ? 'show' : 'hide'}
      style={{ position: 'relative', overflow: 'hidden' }}
      variants={wordVariant}>
      {word.split('').map((letter, idx) =>
        letter === ' ' ? (
          <motion.span
            key={idx}
            style={{ display: 'inline-block' }}
            variants={letterVariant}>
            &nbsp;
          </motion.span>
        ) : (
          <motion.span
            key={idx}
            style={{ display: 'inline-block' }}
            variants={letterVariant}>
            {letter}
          </motion.span>
        )
      )}
    </motion.h1>
  );
};

export default SlideUpLetters;
