import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import Hamburger from './Hamburger';
import { motion, AnimatePresence } from 'framer-motion';
import variants from './NavbarVariants';
import logo from '../../images/black-logo-2.svg';

// TODO: add hovers to links
// TODO: make each menu item it's own component?
const Navbar = () => {
  const { menu, menuItem } = variants;
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
  }, [isOpen]);

  return (
    <motion.nav className="Navbar-mobile" initial="initial" animate={isOpen ? 'animate' : ''}>
      <h1>
        <Link to="/">
          <img src={logo} alt="logo" style={{ width: '30px' }} />
        </Link>
      </h1>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="Navbar-mobile__ul"
            variants={menu}
            exit={{
              opacity: 0,
              transition: {
                when: 'afterChildren',
              },
            }}>
            <motion.li key="1" variants={menuItem}>
              <Link className="NavbarMobile__link" to="/" onClick={() => toggle()}>
                Home
              </Link>
            </motion.li>
            <motion.li key="2" variants={menuItem}>
              <Link className="NavbarMobile__link" to="/menu" onClick={() => toggle()}>
                Menu
              </Link>
            </motion.li>
            <motion.li key="3" variants={menuItem}>
              <Link className="NavbarMobile__link" to="/order" onClick={() => toggle()}>
                Order
              </Link>
            </motion.li>
            <motion.li key="4" variants={menuItem}>
              <Link className="NavbarMobile__link" to="/shop" onClick={() => toggle()}>
                Shop
              </Link>
            </motion.li>
            <motion.li key="5" variants={menuItem}>
              <Link className="NavbarMobile__link" to="/story" onClick={() => toggle()}>
                Story
              </Link>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
      <Hamburger toggle={toggle} />
    </motion.nav>
  );
};

export default Navbar;
