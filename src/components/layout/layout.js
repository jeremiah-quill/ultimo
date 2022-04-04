import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import "../../styles/main.scss"

const layout = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default layout;
