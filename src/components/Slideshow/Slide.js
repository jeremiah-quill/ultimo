import React from "react";

const Slide = ({src, alt}) => {
	return (
		<div className="Slide">
			<img src={src} alt={alt}/>
		</div>
	);
};

export default Slide;
