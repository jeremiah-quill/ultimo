import React from "react";
import whiteBrick from "../../images/white-brick.jpeg";

const Hero = () => {
	return (
		<div className="Hero">
			<h1 className="Hero__title-1">Philadelphia</h1>
			<h1 className="Hero__title-2">specialty coffee bar</h1>
			<h1 className="Hero__title-3">& roastery</h1>
			<img className="Hero__img" src={whiteBrick} alt="hero" />
		</div>
	);
};

export default Hero;
