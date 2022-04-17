import React from "react";

const Locations = () => {
	return (
		<section className="Locations main-container">
			<h2>Start your day with us at 1 of 4 locations around Philadelphia</h2>
			<div className="Locations__grid">
				<div className="Locations__grid-item">
					<h3>Newbold</h3>
					<p>1900 S. 15th St.</p>
					<p>Philadelphia, PA 19145</p>
					<p>215-339-5177</p>
					<p>mon-fri: 7am-5pm</p>
					<p>sat-sun: 8am-5pm</p>
				</div>
				<div className="Locations__grid-item">
					<h3>Graduate Hospital</h3>
					<p>2149 Catharine St.</p>
					<p>Philadelphia, PA 19146</p>
					<p>215-545-3565</p>
					<p>mon-fri: 7am-5pm</p>
					<p>sat-sun: 8am-5pm</p>
				</div>
				<div className="Locations__grid-item">
					<h3>Rittenhouse</h3>
					<p>238 S. 20th St.</p>
					<p>Philadelphia, PA 19103</p>
					<p>267-804-7972</p>
					<p>mon-fri: 7am-5pm</p>
					<p>sat-sun: 8am-5pm</p>
				</div>
				<div className="Locations__grid-item">
					<h3>Germantown</h3>
					<p>5901 Wayne Ave.</p>
					<p>Philadelphia, PA 19144</p>
					<p>267-335-2285</p>
					<p>mon-fri: 7am-5pm</p>
					<p>sat-sun: 8am-5pm</p>
				</div>
			</div>
		</section>
	);
};

export default Locations;
