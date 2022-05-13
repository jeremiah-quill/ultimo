import React, { useRef } from 'react';
import { Link } from 'gatsby';
import coffeeSealed from '../../images/coffee-sealed.jpeg';
import subscriptionCoffee from '../../images/subscription-coffee.jpeg';
import shirt from '../../images/shirt.jpeg';
import { motion } from 'framer-motion';
import useOnScreen from '../../hooks/useOnScreen';
import { useIsMobile } from '../../hooks/useIsMobile';
import { shopAround } from './ShopAroundAnimations';

const ShopAround = () => {
  const ref = useRef();
  const [isMobile] = useIsMobile();
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
          <div className="shop-link">
            <img src={coffeeSealed} alt="bag of coffee" />
            <div className="overlay" />
            <h3>Coffee</h3>
          </div>
        </Link>
        <Link to="/">
          <div className="shop-link">
            <img src={subscriptionCoffee} alt="coffee subscription" />
            <div className="overlay" />
            <h3>Subscriptions</h3>
          </div>
        </Link>
        <Link to="/">
          <div className="shop-link">
            <img src={shirt} alt="shirt" />
            <div className="overlay" />
            <h3>Merch</h3>
          </div>
        </Link>
      </div>
    </motion.section>
  );
};

export default ShopAround;
