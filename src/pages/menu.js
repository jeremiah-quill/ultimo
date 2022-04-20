import * as React from 'react';
import Layout from '../components/Layout';

const newboldMenu = {
  Drinks: {
    hot: [{name: "Black Coffee", price: 10}, {name: "Black Coffee", price: 10},{name: "Black Coffee", price: 10},{name: "Black Coffee", price: 10},{name: "Black Coffee", price: 10}],
    cold: 
[{name: "Black Coffee", price: 10}, {name: "Black Coffee", price: 10},{name: "Black Coffee", price: 10},{name: "Black Coffee", price: 10},{name: "Black Coffee", price: 10}],


    tea: 
[{name: "Black Coffee", price: 10}, {name: "Black Coffee", price: 10},{name: "Black Coffee", price: 10},{name: "Black Coffee", price: 10},{name: "Black Coffee", price: 10}],

    
  }
}

const MenuPage = () => {
	return (
		<Layout>
			<div className="MenuPage">
				<nav className="LocationNav">
					<ul className="MenuLocations">
						<li>Newbold</li>
						<li>Grad Hospital</li>
						<li>Rittenhouse</li>
						<li>Germantown</li>
					</ul>
				</nav>
				<div>
					<nav className="CategoryNav">
						<ul>
							<li>Drinks</li>
							<li>Bites</li>
							<li>Merch</li>
						</ul>
					</nav>
					<div className="Menu">
						<div className="Menu__subcategory">
							<h3>Hot</h3>
							<ul>
								<li>Black coffee</li>
								<li>Black coffee</li>
								<li>Black coffee</li>
								<li>Black coffee</li>
								<li>Black coffee</li>
							</ul>
						</div>
						<div className="Menu__subcategory">
							<h3>Cold</h3>
							<ul>
								<li>Black coffee</li>
								<li>Black coffee</li>
								<li>Black coffee</li>
								<li>Black coffee</li>
								<li>Black coffee</li>
							</ul>
						</div>
						<div className="Menu__subcategory">
							<h3>Tea</h3>
							<ul>
								<li>Black coffee</li>
								<li>Black coffee</li>
								<li>Black coffee</li>
								<li>Black coffee</li>
								<li>Black coffee</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default MenuPage;
