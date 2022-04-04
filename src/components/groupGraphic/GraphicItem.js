import React from "react";

const GraphicItem = ({ src, title, text, alt }) => {
	return (
		<div className="GraphicItem">
			<img src={src} alt={alt} />
			<h3>{title}</h3>
			<p>{text}</p>
		</div>
	);
};

export default GraphicItem;
