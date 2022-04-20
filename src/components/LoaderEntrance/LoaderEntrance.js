import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import logo from '../../images/black-logo-2.svg';

const LoaderEntrance = ({ setLoading }) => {
	return (
		<div className="Loader">
			<motion.div
				initial={{ opacity: 1, y: 0 }}
				animate={{ opacity: 0, y: 100 }}
				transition={{ delay: 4, duration: 1 }}
				onAnimationComplete={() => setLoading(false)}
				className="TestLogoContainer">
				<svg className="svg" viewBox="0 0 500 250" fill="none">
					<motion.rect
						x="0"
						y="0"
						width="500"
						height="250"
						stroke="black"
						style={{ strokeWidth: '10px' }}
						initial={{ pathLength: 0 }}
						animate={{ pathLength: 1 }}
						transition={{ duration: 2, delay: 1 }}></motion.rect>
				</svg>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 2.75 }}
					className="logo-container-2">
					<img className="logo-2" src={logo} alt="logo" />
					<h1 className="logo-text-2">Ultimo Coffee</h1>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default LoaderEntrance;
