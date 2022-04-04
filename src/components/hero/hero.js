import React from "react";
import whiteBrick from '../../images/white-brick.jpeg'

const Hero = () => {
	return (
		<div>
			<h1>Philadelphia</h1>
			<h1>specialty coffee bar</h1>
			<h1>& roastery</h1>
      <img style={{maxWidth: "100%"}} src={whiteBrick} alt="hero"/>
		</div>
	);
};

export default Hero;
