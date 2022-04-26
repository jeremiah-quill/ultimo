import React, { useRef } from 'react';
import whiteBrick from '../../images/white-brick.jpeg';
import SlideUpLetters from '../SlideUpLetters';
import useOnScreen from '../../hooks/useOnScreen';
import { motion } from 'framer-motion';
import { useIsMobileContext } from '../../contexts/IsMobileContext';

const Hero = () => {
  const ref = useRef();
  const [triggered] = useOnScreen({ threshold: 0.5 }, ref);
  const { isMobile } = useIsMobileContext();

  const animateImg = {
    hide: {
      x: 300,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="Hero">
      <motion.div
        ref={ref}
        initial={triggered || isMobile ? 'show' : 'hide'}
        animate={triggered || isMobile ? 'show' : 'hide'}
        variants={''}
        className="Hero__container">
        <div className="Hero__title-group">
          <div className="title-container">
            <SlideUpLetters word={'Philadelphia'} />
            <SlideUpLetters word={'specialty coffee bar'} />
            <SlideUpLetters word={'& roastery'} />
          </div>
        </div>
        <div className="Hero__img-container">
          <motion.img variants={animateImg} className="Hero__img" src={whiteBrick} alt="hero" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
