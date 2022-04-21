import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import logo from '../../images/white-ultimo-logo.svg';
import useParallax from '../../hooks/useParallax';

const LoaderEntrance = ({ setLoading }) => {
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
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2 }}
              onAnimationComplete={() => setBoxisDrawn(true)}></motion.rect>
          </svg>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={boxIsDrawn ? { opacity: 1, y: 0 } : ''}
            transition={{ duration: 1 }}
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
