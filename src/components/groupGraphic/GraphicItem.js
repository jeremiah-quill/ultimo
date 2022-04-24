import React from 'react';
import {motion} from 'framer-motion'

const GraphicItem = ({ src, title, text, alt }) => {
	const itemVariant = {
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: .5
			}
		},
		hide: {
			opacity: 0,
			y: 100
		}
	}

	return (
		<motion.div variants={itemVariant} className="GraphicItem">
			<img className="GraphicItem__img" src={src} alt={alt} />
			<h3 className="GraphicItem__title">{title}</h3>
			<p className="GraphicItem__text">{text}</p>
		</motion.div>
	);
};

export default GraphicItem;
