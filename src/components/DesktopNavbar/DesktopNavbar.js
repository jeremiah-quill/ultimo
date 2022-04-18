import React from 'react';
import { Link } from 'gatsby';

const DesktopNavbar = () => {
	return (
		<nav className="DesktopNavbar">
			<h1>Logo</h1>
			<ul className="DesktopNavbar__ul">
				<li>
					<Link className="DesktopNavbar__link" to="/">Home</Link>
				</li>
				<li>
					<Link className="DesktopNavbar__link" to="/">Menu</Link>
				</li>
				<li>
					<Link className="DesktopNavbar__link" to="/">Order</Link>
				</li>
				<li>
					<Link className="DesktopNavbar__link" to="/">Shop</Link>
				</li>
				<li>
					<Link className="DesktopNavbar__link" to="/">Story</Link>
				</li>
			</ul>
		</nav>
	);
};

export default DesktopNavbar;
