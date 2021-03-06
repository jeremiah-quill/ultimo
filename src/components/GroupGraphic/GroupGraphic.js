import React, { useRef } from 'react';
import beans from '../../images/icon-beans.png';
import house from '../../images/icon-house.png';
import chemex from '../../images/icon-chemex.png';
import GraphicItem from './GraphicItem';
import { motion } from 'framer-motion';
import useOnScreen from '../../hooks/useOnScreen';
import { graphicVariant } from './GroupGraphicAnimations';
import { useIsMobile } from '../../hooks/useIsMobile';

const graphics = [
  {
    src: beans,
    title: 'Freshly roasted, freshly served',
    text: 'Our Newbold roastery and lab allow us to select and roast our favorite beans, then pour you the resulting freshly made coffee.',
    alt: 'beans icon',
  },
  {
    src: chemex,
    title: 'Knowledgeable baristas',
    text: 'Have a question about our beans?  Want a few tips about how to make the best coffee at home?  Ask our expert baristas!',
    alt: 'chemex icon',
  },
  {
    src: house,
    title: 'A home away from home',
    text: 'Our inviting spaces around the city serve as hubs of togetherness. Find your neighbors studying, chatting, or just grabbing their daily espresso.',
    alt: 'house icon',
  },
];

const GroupGraphic = () => {
  const ref = useRef();
  const [isMobile] = useIsMobile();
  const [triggered] = useOnScreen({ threshold: 0.5 }, ref);

  return (
    <motion.section
      ref={ref}
      initial={triggered || isMobile ? 'show' : 'hide'}
      animate={triggered || isMobile ? 'show' : 'hide'}
      variants={graphicVariant}
      className="GroupGraphic main-container">
      {graphics.map((graphic, idx) => (
        <GraphicItem
          key={idx}
          src={graphic.src}
          title={graphic.title}
          text={graphic.text}
          alt={graphic.alt}
        />
      ))}
    </motion.section>
  );
};

export default GroupGraphic;
