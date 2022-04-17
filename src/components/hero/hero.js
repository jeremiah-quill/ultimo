import React from 'react';
import whiteBrick from '../../images/white-brick.jpeg';

const Hero = () => {
	return (
		<div className="Hero">
			<div className="Hero__container">
				<div className="Hero__title-group-container">
					<div className="Hero__title-group">
						<h1 className="Hero__title">Philadelphia</h1>
						<h1 className="Hero__title">specialty coffee bar</h1>
						<h1 className="Hero__title">& roastery</h1>
					</div>
				</div>
				<div className="Hero__img-container">
					<img className="Hero__img" src={whiteBrick} alt="hero" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
