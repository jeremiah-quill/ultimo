import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Locations from "../components/locations";
import ShopAround from "../components/shopAround";
import GroupGraphic from "../components/groupGraphic";


const IndexPage = () => {
	return (
		// <div className="Landing">
			<Layout>
				<Hero />
				<Locations />
				<ShopAround />
				<GroupGraphic />
			</Layout>
		// </div>
	);
};

export default IndexPage;
