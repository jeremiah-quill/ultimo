import React from 'react';
import shotPour from '../../images/shot-pour.jpeg';
import whiteMachine from '../../images/white-machine.jpeg';
import coolCup from '../../images/cool-cup.jpeg';
import Slide from './Slide';

const images = [
	{ src: shotPour, alt: 'espresso shot pour' },
	{ src: whiteMachine, alt: 'white coffee maker' },
	{ src: coolCup, alt: 'cup of coffee' },
];

const Slideshow = () => {
	return (
		<section className="Slideshow">
			{images.map((image, idx) => (
				<Slide key={idx} src={image.src} alt={image.alt} />
			))}
		</section>
	);
};

export default Slideshow;
