import React from 'react';
import { Link } from 'gatsby';
import coffeeSealed from '../../images/coffee-sealed.jpeg';
import subscriptionCoffee from '../../images/subscription-coffee.jpeg';
import shirt from '../../images/shirt.jpeg';

const ShopAround = () => {
	return (
		<section className="ShopAround">
			<h2>Shop Around</h2>
			<div className="ShopAround__container">
				<Link to="/">
					<img src={coffeeSealed} alt="bag of coffee" />
				</Link>
				<Link to="/">
					<img src={subscriptionCoffee} alt="coffee subscription" />
				</Link>
				<Link to="/">
					<img src={shirt} alt="shirt" />
				</Link>
			</div>
		</section>
	);
};

export default ShopAround;
