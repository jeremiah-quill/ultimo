import React, { useRef } from 'react';
import { Link } from 'gatsby';
import coffeeSealed from '../../images/coffee-sealed.jpeg';
import subscriptionCoffee from '../../images/subscription-coffee.jpeg';
import shirt from '../../images/shirt.jpeg';
import { motion } from 'framer-motion';
import useOnScreen from '../../hooks/useOnScreen';
import { useIsMobileContext } from '../../contexts/IsMobileContext';
import { shopAround } from './ShopAroundAnimations';

const ShopAround = () => {
  const ref = useRef();
  const { isMobile } = useIsMobileContext();
  const [triggered] = useOnScreen({ threshold: 0.5 }, ref);

  return (
    <motion.section
      ref={ref}
      initial={triggered || isMobile ? 'show' : 'hide'}
      animate={triggered || isMobile ? 'show' : 'hide'}
      variants={shopAround}
      className="ShopAround">
      <h2>Shop Around</h2>
      <div className="ShopAround__container">
        <Link to="/">
          <img src={coffeeSealed} alt="bag of coffee" />
        </Link>
        <Link to="/">
          <img src={subscriptionCoffee} alt="coffee subscription" />
        </Link>
        <Link to="/">
          <img src={shirt} alt="shirt" />
        </Link>
      </div>
    </motion.section>
  );
};

export default ShopAround;
