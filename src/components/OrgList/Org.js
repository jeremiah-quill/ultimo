import React from 'react';

const Org = ({ name, imgUrl }) => {
	return (
		<div className="Org">
			<img src={imgUrl} alt={name} />
			<h2>{name}</h2>
		</div>
	);
};

export default Org;
