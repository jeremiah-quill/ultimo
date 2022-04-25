import React, {useRef} from 'react';
import Quote from './Quote.js';
import { motion } from 'framer-motion';
import useIsMobile from '../../hooks/useIsMobile';
import useOnScreen from '../../hooks/useOnScreen';

const quotes = [
  {
    quote: 'This is hands-down one of my favorite coffee shops in the country',
    author: 'Erin Meister, coffee writer',
  },
  {
    quote: 'if you want some mind-bending espresso, this is where to find it.',
    author: 'Philadelphia Inquirer',
  },
  {
    quote:
      'these coffee experts know how to pull a shot, and are among the best-trained baristas in the city.',
    author: 'Philly.eater',
  },
];

const MediaQuotes = () => {
  const ref = useRef();
  const [isMobile] = useIsMobile();
  const [triggered] = useOnScreen({ threshold: 0.5 }, ref);

  const MediaQuotesAnimate = {
		hide: {
			opacity: 0,
			y: 100
		},
    show: {
			opacity: 1,
			y: 0,
      transition: {
				duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.section ref={ref} initial={triggered || isMobile ? 'show' : 'hide'} animate={triggered || isMobile ? 'show' : 'hide'} variants={MediaQuotesAnimate} className="MediaQuotes">
      <h2>What the community thinks</h2>
      <div className="MediaQuotes__container">
        {quotes.map((quote, idx) => (
          <Quote key={idx} quote={quote.quote} author={quote.author} />
        ))}
      </div>
    </motion.section>
  );
};

export default MediaQuotes;
