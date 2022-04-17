import React from "react";
import Quote from "./Quote.js";

const quotes = [
	{
		quote: "This is hands-down one of my favorite coffee shops in the country",
		author: "Erin Meister, coffee writer",
	},
	{
		quote: "if you want some mind-bending espresso, this is where to find it.",
		author: "Philadelphia Inquirer",
	},
	{
		quote:
			"these coffee experts know how to pull a shot, and are among the best-trained baristas in the city.",
		author: "Philly.eater",
	},
];

const MediaQuotes = () => {
	return (
		<section className="MediaQuotes">
			<h2>What the community thinks</h2>
			<div className="MediaQuotes__container">
				{quotes.map((quote, idx) => (
					<Quote key={idx} quote={quote.quote} author={quote.author} />
				))}
			</div>
		</section>
	);
};

export default MediaQuotes;
