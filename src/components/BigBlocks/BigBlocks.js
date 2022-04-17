import React from "react";
import beautyPour from "../../images/beauty-pour.jpeg";
import machinePour from "../../images/machine-pour.jpeg";

const BigBlocks = () => {
	return (
		<div className="BigBlocks">
			<div className="BigBlocks__flex-container">
				{/* <div> */}
				<img className="BigBlocks__img" src={beautyPour} alt="pouring coffee" />
				{/* </div> */}
				<div className="BigBlocks__text-container main-container">
				<p className="BigBlocks__text">
					We are committed to brewing the best coffee we can while serving and
					getting to know four really fantastic neighborhoods.
				</p>
				</div>
			</div>
			<div className="BigBlocks__flex-container">
				{/* <div> */}
				<img
					className="BigBlocks__img"
					src={machinePour}
					alt="coffee machine pour"
				/>
				{/* </div> */}
				<div className="BigBlocks__text-container main-container">
				<p className="BigBlocks__text">
					It’s about a good cup of coffee and a good atmosphere in which to
					enjoy it.
				</p>
				</div>
			</div>
		</div>
	);
};

export default BigBlocks;
