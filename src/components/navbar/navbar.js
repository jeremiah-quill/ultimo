import React, { useState } from "react";
import Hamburger from "./hamburger";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	const menu = {
		open: {
			opacity: 1,
			transition: {
				staggerChildren: 0.07,
				delayChidlren: 0.2,
			},
		},
		closed: {
			opacity: 0,
			transition: {
				staggerChildren: 0.07,
				delayChidlren: 0.2,
			},
		},
	};

	// const listItem = {
	// 	open: {
	// 		y: 0,
	// 		opacity: 1,
	// 	},
	// 	// closed: {
	// 	// 	y: -30,
	// 	// 	opacity: 0,
	// 	// },
	// 	transition: 1,
  //   exit: {
  //     x: 100
  //   }
	// };

  const listItem = {
    open: {
      y: 0,
      marginBottom: "2em",
      opacity: 1,
      // transition: {
      //   y: { stiffness: 1000, velocity: -100 }
      // }
    },
    closed: {
      y: -50,
      opacity: 0,
      marginBottom: "2em",

      // transition: {
      //   y: { stiffness: 1000 }
      // }
    }
  };

	return (
		<motion.nav
			className="Navbar__mobile"
			initial={false}
			animate={isOpen ? "open" : "closed"}
		>
			<h1 style={{ margin: "0" }}>Logo</h1>
			<motion.div
				style={{
					position: "absolute",
					top: "0",
					bottom: "0",
					left: "0",
					right: "0",
					zIndex: "5",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					backdropFilter: "blur(6px)",
				}}
				variants={menu}
			>
				<ul
					className="Navbar__large-menu"
					style={{ listStyle: "none", padding: "0" }}
				>
					<AnimatePresence>
						<motion.li variants={listItem}>Home</motion.li>
						<motion.li variants={listItem}>Order</motion.li>
						<motion.li variants={listItem}>Shop</motion.li>
						<motion.li variants={listItem}>Menu</motion.li>
						<motion.li variants={listItem}>Story</motion.li>
						<motion.li variants={listItem}>Team</motion.li>
					</AnimatePresence>
				</ul>
			</motion.div>
			<Hamburger toggle={toggle} />
		</motion.nav>
	);
};

export default Navbar;
