import * as React from "react";
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Stores from '../components/stores';


// markup
const IndexPage = () => {
	return (
		<div className="landing">
			<Navbar />
			<Hero />
			<Stores />
		</div>
	);
};

export default IndexPage;
