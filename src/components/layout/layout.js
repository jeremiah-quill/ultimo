import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../footer';
import DesktopNavbar from '../DesktopNavbar';
import '../../styles/main.scss';

const Layout = ({ children, loading }) => {
	const [width, setWidth] = useState(window.innerWidth);
	const breakpoint = 760;

	useEffect(() => {
		const handleWindowResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleWindowResize);
		return () => window.removeEventListener('resize', handleWindowResize);
	}, []);

	return (
		<>
			{width < breakpoint ? <Navbar /> : <DesktopNavbar loading={loading} />}
			{children}
			<Footer />
		</>
	);
};

export default Layout;
