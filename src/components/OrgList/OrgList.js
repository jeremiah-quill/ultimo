import React from 'react';
import Org from './Org';
import phillyBailFund from '../../images/philly-bail-fund.png';
import blmPhilly from '../../images/blm-philly.png';
import ACLU from '../../images/ACLU.png';
import NAACP from '../../images/NAACP.png';
import asylumadvocacy from '../../images/asylumadvocacy.png';
import { motion } from 'framer-motion';
import { marqueeVariants } from './OrgListAnimations';

const orgs = [
  { name: 'Philadelphia Bail Fund', imgUrl: phillyBailFund },
  { name: 'Black Lives Matter Philly', imgUrl: blmPhilly },
  { name: 'ACLU', imgUrl: ACLU },
  { name: 'NAACP', imgUrl: NAACP },
  { name: 'Asylum Advocacy', imgUrl: asylumadvocacy },
  { name: 'Philadelphia Bail Fund', imgUrl: phillyBailFund },
  { name: 'Philadelphia Bail Fund', imgUrl: phillyBailFund },
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
      <div>
        <div
          className="marquee"
          style={{
            position: 'relative',
            width: '100vw',
            maxWidth: '100%',
            height: '200px',
            overflowX: 'hidden',
          }}>
          <motion.div
            style={{ position: 'absolute' }}
            className="track"
            variants={marqueeVariants}
            animate="animate">
            <div style={{ display: 'flex' }}>
              {orgs.map((org, idx) => (
                <Org key={idx} orgName={org.name} imgUrl={org.imgUrl} />
              ))}
              {orgs.map((org, idx) => (
                <Org key={idx} orgName={org.name} imgUrl={org.imgUrl} />
              ))}
              {orgs.map((org, idx) => (
                <Org key={idx} orgName={org.name} imgUrl={org.imgUrl} />
              ))}
              {orgs.map((org, idx) => (
                <Org key={idx} orgName={org.name} imgUrl={org.imgUrl} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OrgList;
