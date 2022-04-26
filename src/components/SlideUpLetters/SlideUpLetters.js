import React from 'react';
import { motion } from 'framer-motion';
import {wordVariant, letterVariant} from './SlideUpLettersAnimations'

const SlideUpLetters = ({ word }) => {
  return (
    <motion.h1 style={{ position: 'relative', overflow: 'hidden' }} variants={wordVariant}>
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
