import React, { useRef } from 'react';
import beautyPour from '../../images/beauty-pour.jpeg';
import machinePour from '../../images/machine-pour.jpeg';
import { motion } from 'framer-motion';
import useIsMobile from '../../hooks/useIsMobile';
import useOnScreen from '../../hooks/useOnScreen';

const BigBlocks = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const [isMobile] = useIsMobile();
  const [triggered1] = useOnScreen({ threshold: 0.5 }, ref1);
  const [triggered2] = useOnScreen({ threshold: 0.5 }, ref2);

  const animateText = {
    show: {
      // opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
      },
    },
    hide: {
      // opacity: 0,
      y: 300,
    },
  };

  const animateImg = {
    show: {
      // opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
      },
    },
    hide: {
      // opacity: 0,
      x: "-100%",
    },
  };

  return (
    <section className="BigBlocks">
      <div ref={ref1} className="BigBlocks__flex-container">
        <motion.img
          initial={triggered1 || isMobile ? 'show' : 'hide'}
          animate={triggered1 || isMobile ? 'show' : 'hide'}
          variants={animateImg}
          className="BigBlocks__img"
          src={beautyPour}
          alt="pouring coffee"
        />
        <div className="BigBlocks__text-container main-container">
          <motion.p
            initial={triggered1 || isMobile ? 'show' : 'hide'}
            animate={triggered1 || isMobile ? 'show' : 'hide'}
            variants={animateText}
            className="BigBlocks__text">
            We are committed to brewing the best coffee we can while serving and getting to know
            four really fantastic neighborhoods.
          </motion.p>
        </div>
      </div>
      <div ref={ref2} className="BigBlocks__flex-container">
        <img className="BigBlocks__img" src={machinePour} alt="coffee machine pour" />
        <div className="BigBlocks__text-container main-container">
          <p className="BigBlocks__text">
            It’s about a good cup of coffee and a good atmosphere in which to enjoy it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BigBlocks;
