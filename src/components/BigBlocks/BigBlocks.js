import React from 'react';
import beautyPour from '../../images/beauty-pour.jpeg';
import machinePour from '../../images/machine-pour.jpeg';

const BigBlocks = () => {
	return (
		<section className="BigBlocks">
			<div className="BigBlocks__flex-container">
				<img className="BigBlocks__img" src={beautyPour} alt="pouring coffee" />
				<div className="BigBlocks__text-container main-container">
					<p className="BigBlocks__text">
						We are committed to brewing the best coffee we can while serving and getting to know
						four really fantastic neighborhoods.
					</p>
				</div>
			</div>
			<div className="BigBlocks__flex-container">
				<img className="BigBlocks__img" src={machinePour} alt="coffee machine pour" />
				<div className="BigBlocks__text-container main-container">
					<p className="BigBlocks__text">
						It’s about a good cup of coffee and a good atmosphere in which to enjoy it.
					</p>
				</div>
			</div>
		</section>
	);
};

export default BigBlocks;
