import React, { useEffect, useRef, useState } from 'react';
import whiteBrick from '../../images/white-brick.jpeg';
import SlideUpLetters from '../SlideUpLetters';
import useOnScreen from '../../hooks/useOnScreen';
import { motion } from 'framer-motion';

const Hero = () => {
  const [ref, visible] = useOnScreen({ rootMargin: '-400px' });
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    if (visible === true) {
      setTriggered(true);
    }
  }, [visible]);

  const heroImgVariant = {
    initial: {
      x: '300px',
      opacity: 0,
    },
    animate: {
      x: '0px',
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
            {/* 
						<h1 className="Hero__title">Philadelphia</h1>
						<h1 className="Hero__title">specialty coffee bar</h1>
						<h1 className="Hero__title">& roastery</h1> */}
          </div>
        </div>
        <div ref={ref} className="Hero__img-container">
          <motion.img
            initial={'initial'}
            animate={triggered ? 'animate' : ''}
            variants={heroImgVariant}
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
