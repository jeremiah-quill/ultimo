import React, { useRef } from 'react';
import beautyPour from '../../images/beauty-pour.jpeg';
import machinePour from '../../images/machine-pour.jpeg';
import { motion } from 'framer-motion';
import useOnScreen from '../../hooks/useOnScreen';
import { animateImgOverlay, imgVariant, animateText } from './BigBlocksAnimations';
import { useIsMobile } from '../../hooks/useIsMobile';

const BigBlocks = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const [isMobile] = useIsMobile();
  const [triggered1] = useOnScreen({ threshold: 0.5 }, ref1);
  const [triggered2] = useOnScreen({ threshold: 0.5 }, ref2);

  return (
    <section className="BigBlocks">
      <div ref={ref1} className="BigBlocks__flex-container">
        <div className="BigBlocks__img-container" style={{ position: 'relative', height: '100%' }}>
          <motion.div
            initial={triggered1 || isMobile ? 'show' : 'hide'}
            animate={triggered1 || isMobile ? 'show' : 'hide'}
            variants={animateImgOverlay(1)}
            style={{
              zIndex: 9,
              backgroundColor: 'white',
              top: 0,
              bottom: 0,
              width: '100%',
              position: 'absolute',
            }}
          />
          <motion.img
            initial={triggered1 || isMobile ? 'show' : 'hide'}
            animate={triggered1 || isMobile ? 'show' : 'hide'}
            variants={imgVariant(-1)}
            className="BigBlocks__img"
            src={beautyPour}
            alt="pouring coffee"
          />
        </div>
        <div className="BigBlocks__text-container">
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
        <div className="BigBlocks__img-container" style={{ position: 'relative', height: '100%' }}>
          <motion.div
            initial={triggered2 || isMobile ? 'show' : 'hide'}
            animate={triggered2 || isMobile ? 'show' : 'hide'}
            variants={animateImgOverlay(-1)}
            style={{
              zIndex: 9,
              backgroundColor: 'white',
              top: 0,
              bottom: 0,
              width: '100%',
              position: 'absolute',
            }}
          />
          <motion.img
            initial={triggered2 || isMobile ? 'show' : 'hide'}
            animate={triggered2 || isMobile ? 'show' : 'hide'}
            variants={imgVariant()}
            className="BigBlocks__img"
            src={machinePour}
            alt="coffee machine pour"
          />
        </div>
        <div className="BigBlocks__text-container">
          <motion.p
            initial={triggered2 || isMobile ? 'show' : 'hide'}
            animate={triggered2 || isMobile ? 'show' : 'hide'}
            variants={animateText}
            className="BigBlocks__text">
            It’s about a good cup of coffee and a good atmosphere in which to enjoy it.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default BigBlocks;
