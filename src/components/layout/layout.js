import React from 'react';
import Navbar from '../Navbar';
import Footer from '../footer';
import '../../styles/main.scss';

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
