import React, { useRef } from 'react';
import whiteBrick from '../../images/white-brick.jpeg';
import SlideUpLetters from '../SlideUpLetters';
import useOnScreen from '../../hooks/useOnScreen';
import { motion } from 'framer-motion';
import { useIsMobileContext } from '../../contexts/IsMobileContext';

const Hero = () => {
  const ref = useRef();
  const [triggered] = useOnScreen({ threshold: 0.5 }, ref);
  const {isMobile} = useIsMobileContext()

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
      <div className="Hero__container">
        <div className="Hero__title-group">
          <div ref={ref} className="title-container">
            <SlideUpLetters onScreen={triggered} word={'Philadelphia'} />
            <SlideUpLetters onScreen={triggered} word={'specialty coffee bar'} />
            <SlideUpLetters onScreen={triggered} word={'& roastery'} />
          </div>
        </div>
        <div ref={ref} className="Hero__img-container">
          <motion.img
            initial={triggered || isMobile ? 'show' : 'hide'}
            animate={triggered || isMobile ? 'show' : 'hide'}
            variants={animateImg}
            className="Hero__img"
            src={whiteBrick}
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
