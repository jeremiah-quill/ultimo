import React from "react";

const GraphicItem = ({ src, title, text, alt }) => {
	return (
		<div className="GraphicItem">
			<img className="GraphicItem__img" src={src} alt={alt} />
			<h3 className="GraphicItem__title">{title}</h3>
			<p className="GraphicItem__text">{text}</p>
		</div>
	);
};

export default GraphicItem;
