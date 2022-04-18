import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import Hamburger from './Hamburger';
import { motion, AnimatePresence } from 'framer-motion';
import variants from './NavbarVariants';

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
			<h1>Logo</h1>
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
							<Link className="NavbarMobile__link" to="/">
								Home
							</Link>
						</motion.li>
						<motion.li key="2" variants={menuItem}>
							<Link className="NavbarMobile__link" to="/">
								Home
							</Link>
						</motion.li>
						<motion.li key="3" variants={menuItem}>
							<Link className="NavbarMobile__link" to="/">
								Home
							</Link>
						</motion.li>
						<motion.li key="4" variants={menuItem}>
							<Link className="NavbarMobile__link" to="/">
								Home
							</Link>
						</motion.li>
						<motion.li key="5" variants={menuItem}>
							<Link className="NavbarMobile__link" to="/">
								Home
							</Link>
						</motion.li>
						<motion.li key="6" variants={menuItem}>
							<Link className="NavbarMobile__link" to="/">
								Home
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
