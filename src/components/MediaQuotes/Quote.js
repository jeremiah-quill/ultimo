import React from 'react';
import {motion} from 'framer-motion'

const Quote = ({ quote, author }) => {
	const quoteVariant = {
		hide: {
			opacity: 0,
			y: 100
		},
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1
			}
		}
	}
	return (
		<motion.div variants={quoteVariant} className="Quote">
			<p>{quote}</p>
			<div className="Quote__author">
				<span>~ </span>
				{author}
			</div>
		</motion.div>
	);
};

export default Quote;
