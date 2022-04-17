import React from "react";
import beans from "../../images/icon-beans.png";
import house from "../../images/icon-house.png";
import chemex from "../../images/icon-chemex.png";

import GraphicItem from "./GraphicItem";

const graphics = [
	{
		src: beans,
		title: "Freshly roasted, freshly served",
		text: "Our Newbold roastery and lab allow us to select and roast our favorite beans, then pour you the resulting freshly made coffee.",
		alt: "beans icon",
	},
	{
		src: chemex,
		title: "Knowledgeable baristas",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
		alt: "chemex icon",
	},
	{
		src: house,
		title: "A home away from home",
		text: "Our inviting spaces around the city serve as hubs of togetherness. Find your neighbors studying, chatting, or just grabbing their daily espresso.",
		alt: "house icon",
	},
];

const GroupGraphic = () => {
	return (
		<div className="GroupGraphic main-container">
			{graphics.map((graphic, idx) => (
				<GraphicItem
					key={idx}
					src={graphic.src}
					title={graphic.title}
					text={graphic.text}
					alt={graphic.alt}
				/>
			))}
		</div>
	);
};

export default GroupGraphic;
