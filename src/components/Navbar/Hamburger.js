import React from 'react';
import { motion } from 'framer-motion';

const Hamburger = ({ toggle }) => {
	return (
		<button className="Hamburger" onClick={toggle}>
			<svg
				width="23"
				height="23"
				viewBox="0 0 23 23"
				style={{ display: 'flex', alignItems: 'center' }}>
				<motion.path
					fill="transparent"
					strokeWidth="3"
					stroke="black"
					strokeLinecap="round"
					variants={{
						initial: { d: 'M 2 2.5 L 20 2.5' },
						animate: { d: 'M 3 16.5 L 17 2.5', stroke: 'white' },
					}}
					transition={{ duration: 0.3 }}
				/>
				<motion.path
					fill="transparent"
					strokeWidth="3"
					stroke="black"
					strokeLinecap="round"
					d="M 2 9.423 L 20 9.423"
					variants={{
						initial: { opacity: 1 },
						animate: { opacity: 0 },
					}}
					transition={{ duration: 0.3 }}
				/>
				<motion.path
					fill="transparent"
					strokeWidth="3"
					stroke="black"
					strokeLinecap="round"
					variants={{
						initial: { d: 'M 2 16.346 L 20 16.346' },
						animate: { d: 'M 3 2.5 L 17 16.346', stroke: 'white' },
					}}
					transition={{ duration: 0.3 }}
				/>
			</svg>
		</button>
	);
};

export default Hamburger;
