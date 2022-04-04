import * as React from "react";
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Stores from '../components/stores';
import Footer from '../components/footer'
import Layout from '../components/layout'
// update this?
// import '../../styles/main.scss'


// update to use Layout component for Navbar and Footer
const IndexPage = () => {
	return (
		<div className="landing">
			{/* <Navbar /> */}
			<Layout>

			<Hero />
			<Stores />
			</Layout>
			{/* <Footer /> */}
		</div>
	);
};

export default IndexPage;
