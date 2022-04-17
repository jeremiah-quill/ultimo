import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Locations from "../components/Locations";
import ShopAround from "../components/ShopAround";
import GroupGraphic from "../components/GroupGraphic";
import BigBlocks from "../components/BigBlocks";
import MediaQuotes from "../components/MediaQuotes";
import Slideshow from "../components/Slideshow";
import OrgList from "../components/OrgList";

const IndexPage = () => {
	return (
		<Layout>
			<Hero />
			<Locations />
			<ShopAround />
			<GroupGraphic />
			<BigBlocks />
			<MediaQuotes />
			{/* <Slideshow /> */}
			<OrgList />
		</Layout>
	);
};

export default IndexPage;
