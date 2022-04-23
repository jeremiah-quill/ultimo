import React from 'react';
import { motion } from 'framer-motion';
import useIsMobile from '../../hooks/useIsMobile';

const SlideUpLetters = ({ word, onScreen }) => {
  const [isMobile] = useIsMobile();

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
      variants={!isMobile ? wordVariant : ''}>
      {word.split('').map((letter, idx) =>
        letter === ' ' ? (
          <motion.span
            key={idx}
            style={{ display: 'inline-block' }}
            variants={!isMobile ? letterVariant : ''}>
            &nbsp;
          </motion.span>
        ) : (
          <motion.span
            key={idx}
            style={{ display: 'inline-block' }}
            variants={!isMobile ? letterVariant : ''}>
            {letter}
          </motion.span>
        )
      )}
    </motion.h1>
  );
};

export default SlideUpLetters;
