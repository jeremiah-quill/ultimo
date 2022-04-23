import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../../images/white-ultimo-logo.svg';
import useParallax from '../../hooks/useParallax';
import { animateBox, animateLogo, hideLogo } from './loaderAnimations.js';
import useIsMobile from '../../hooks/useIsMobile';

const LoaderEntrance = ({ firstLoad }) => {
  const [isMobile] = useIsMobile();
  const [boxIsDrawn, setBoxisDrawn] = useState(false);
  const [offsetY] = useParallax();

  return (
    <>
      <div className="Loader" style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
        <motion.div className="TestLogoContainer">
          <svg className="svg" viewBox="0 0 500 250" fill="none">
            <motion.rect
              x="0"
              y="0"
              width="500"
              height="250"
              stroke="white"
              style={{ strokeWidth: '10px' }}
              initial={'initial'}
              animate={'animate'}
              variants={firstLoad && !isMobile ? animateBox : ''}
              onAnimationComplete={() => setBoxisDrawn(true)}
            />
          </svg>

          <motion.div
            initial={'initial'}
            animate={'animate'}
            variants={!firstLoad || isMobile ? '' : boxIsDrawn ? animateLogo : hideLogo}
            className="logo-container-2">
            <img className="logo-2" src={logo} alt="logo" />
            <h1 className="logo-text-2">Ultimo Coffee</h1>
          </motion.div>
        </motion.div>
      </div>
      <div style={{ transform: `translateY(${offsetY * 0.8}px)` }} className="Loader__spacer" />
    </>
  );
};

export default LoaderEntrance;
