import React from 'react';
import Org from './Org';
import phillyBailFund from '../../images/philly-bail-fund.png';
import blmPhilly from '../../images/blm-philly.png';
import ACLU from '../../images/ACLU.png';
import NAACP from '../../images/NAACP.png';
import asylumadvocacy from '../../images/asylumadvocacy.png';

const orgs = [
	{ name: 'Philadelphia Bail Fund', imgUrl: phillyBailFund },
	{ name: 'Black Lives Matter Philly', imgUrl: blmPhilly },
	{ name: 'ACLU', imgUrl: ACLU },
	{ name: 'NAACP', imgUrl: NAACP },
	{ name: 'Asylum Advocacy', imgUrl: asylumadvocacy },
	{ name: 'Philadelphia Bail Fund', imgUrl: phillyBailFund },
	{ name: 'Philadelphia Bail Fund', imgUrl: phillyBailFund },
	{ name: 'Philadelphia Bail Fund', imgUrl: phillyBailFund },
];

const OrgList = () => {
	return (
		<section className="OrgList main-container">
			<p>
				We preach community and togetherness, and we mean it. Each quarter of the year, we donate 5%
				of our net profits to organizations/ causes that are important to us, and that we recognize
				to be doing important work in our region and in the world.
			</p>
			{orgs.map((org, idx) => (
				<Org key={idx} orgName={org.name} imgUrl={org.imgUrl} />
			))}
		</section>
	);
};

export default OrgList;
