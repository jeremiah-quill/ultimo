import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const SlideUpLetters = ({ word, onScreen }) => {
  const wordVariant = {
    animate: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  };
  const letterVariant = {
    initial: {
      y: 150,
    },
    animate: {
      y: 0,
      transition: {
        type: 'tween',
      },
    },
  };
  return (
    <motion.h1
      initial={'initial'}
      animate={onScreen ? 'animate' : ''}
      style={{ position: 'relative', overflow: 'hidden' }}
      variants={wordVariant}>
      {word.split('').map((letter, idx) =>
        letter === ' ' ? (
          <motion.span key={idx} style={{ display: 'inline-block' }} variants={letterVariant}>
            &nbsp;
          </motion.span>
        ) : (
          <motion.span key={idx} style={{ display: 'inline-block' }} variants={letterVariant}>
            {letter}
          </motion.span>
        )
      )}
    </motion.h1>
  );
};

export default SlideUpLetters;
