import React from "react";
// import shotPour from "../../images/shot-pour.jpeg";
// import whiteMachine from "../../images/white-machine.jpeg";
// import coolCup from "../../images/cool-cup.jpeg";
// import Slide from './Slide'

// const images = [{ src: shotPour, alt="espresso shot pour" }, { src: whiteMachine, alt: "white coffee maker" }, { src: coolCup, alt: "cup of coffee" }];

const Slide = ({src, alt}) => {
	return (
		<div className="Slide">
			<img src={src} alt={alt}/>
		</div>
	);
};

export default Slide;
