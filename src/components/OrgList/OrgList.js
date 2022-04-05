import React from "react";
import Org from "./Org";
import phillyBailFund from '../../images/philly-bail-fund.png'
import blmPhilly from '../../images/blm-philly.png'
import ACLU from '../../images/ACLU.png'
import NAACP from '../../images/NAACP.png'
import asylumadvocacy from '../../images/asylumadvocacy.png'


const orgs = [
	{ name: "Philadelphia Bail Fund", imgUrl:  phillyBailFund  },
	{ name: "Black Lives Matter Philly", imgUrl: blmPhilly  },
	{ name: "ACLU", imgUrl:  ACLU  },
	{ name: "NAACP", imgUrl:  NAACP  },
	{ name: "Asylum Advocacy", imgUrl:  asylumadvocacy  },
	{ name: "Philadelphia Bail Fund", imgUrl:  phillyBailFund  },
	{ name: "Philadelphia Bail Fund", imgUrl:  phillyBailFund  },
	{ name: "Philadelphia Bail Fund", imgUrl:  phillyBailFund  },
];

const OrgList = () => {
	return (
		<div className="OrgList">
			{orgs.map((org, idx) => (
				<Org key={idx} orgName={org.name} imgUrl={org.imgUrl} />
			))}
		</div>
	);
};

export default OrgList;
