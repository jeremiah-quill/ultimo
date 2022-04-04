import React from "react";
import beautyPour from "../../images/beauty-pour.jpeg";
import machinePour from "../../images/machine-pour.jpeg";

const BigBlocks = () => {
	return (
		<div>
			<div>
				{/* <div> */}
					<img src={beautyPour} alt="pouring coffee"/>
				{/* </div> */}
				{/* <div> */}
					<p>
						We are committed to brewing the best coffee we can while serving and
						getting to know four really fantastic neighborhoods.
					</p>
				{/* </div> */}
			</div>
			<div>
				{/* <div> */}
					<p>
						It’s about a good cup of coffee and a good atmosphere in which to
						enjoy it.
					</p>
				{/* </div> */}
				<div>
					<img src={machinePour} alt="coffee machine pour"/>
				</div>
			</div>
		</div>
	);
};

export default BigBlocks;
