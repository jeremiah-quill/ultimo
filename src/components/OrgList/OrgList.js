import React, { useEffect, useState, useRef } from 'react';
import Org from './Org';
import phillyBailFund from '../../images/philly-bail-fund.png';
import blmPhilly from '../../images/blm-philly.png';
import ACLU from '../../images/ACLU.png';
import NAACP from '../../images/NAACP.png';
import asylumadvocacy from '../../images/asylumadvocacy.png';
import { motion } from 'framer-motion';

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
  // { name: 'Philadelphia Bail Fund', imgUrl: phillyBailFund },
  // { name: 'Philadelphia Bail Fund', imgUrl: phillyBailFund },
  // { name: 'Philadelphia Bail Fund', imgUrl: phillyBailFund },
  // { name: 'Philadelphia Bail Fund', imgUrl: phillyBailFund },
  // { name: 'Philadelphia Bail Fund', imgUrl: phillyBailFund },
];

const OrgList = () => {
	
  const marqueeVariants =  {
      animate: {
        x: ['0%', '-25%'],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 10,
            ease: 'linear',
          },
        },
      },
  };

	const marqueeVariants2 =  {
		animate: {
			x: ['-25%', '0%'],
			transition: {
				x: {
					repeat: Infinity,
					repeatType: 'loop',
					duration: 10,
					ease: 'linear',
				},
			},
		},
};

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
            variants={marqueeVariants2}
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

// .marquee {
//   position: relative;
//   width: 100vw;
//   max-width: 100%;
//   height: 206px;
//   overflow-x: hidden;
// }

// .track {
//   position: absolute;
//   white-space: nowrap;
//   will-change: transform;
// }

// .track > h1 {
//   display: flex;
//   margin: 20px 0;
//   font-size: 8rem;
//   font-family: Antonio;
//   -webkit-text-fill-color: rgba(255, 255, 255, 0);
//   -webkit-text-stroke-width: 2px;
//   -webkit-text-stroke-color: #f4955c;
//   text-transform: uppercase;
// }
