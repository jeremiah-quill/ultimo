import React from "react";
// import Quote from "./Quote.js";

const Quote = ({ quote, author }) => {
	return (
		<div className="Quote">
			<p>{quote}</p>
			<div className="Quote__author">
				<span>~ </span>
				{author}
			</div>
		</div>
	);
};

export default Quote;
