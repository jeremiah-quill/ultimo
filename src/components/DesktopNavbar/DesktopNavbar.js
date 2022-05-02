import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import logo from '../../images/black-logo-2.svg';
import useParallax from '../../hooks/useParallax';

const DesktopNavbar = () => {
  const [offsetY] = useParallax();

  if (offsetY === 0) return '';
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="DesktopNavbar">
      <h1>
        <img src={logo} alt="logo" />
      </h1>
      <ul className="DesktopNavbar__ul">
        <li>
          <Link className="DesktopNavbar__link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="DesktopNavbar__link" to="/">
            Menu
          </Link>
        </li>
        <li>
          <Link className="DesktopNavbar__link" to="/">
            Order
          </Link>
        </li>
        <li>
          <Link className="DesktopNavbar__link" to="/">
            Shop
          </Link>
        </li>
        <li>
          <Link className="DesktopNavbar__link" to="/">
            Story
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
};

export default DesktopNavbar;
