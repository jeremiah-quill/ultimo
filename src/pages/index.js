import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Locations from '../components/Locations';
import ShopAround from '../components/ShopAround';
import GroupGraphic from '../components/GroupGraphic';
import BigBlocks from '../components/BigBlocks';
import MediaQuotes from '../components/MediaQuotes';
import Slideshow from '../components/Slideshow';
import OrgList from '../components/OrgList';
import LoaderEntrance from '../components/LoaderEntrance';
import { motion } from 'framer-motion';

const IndexPage = () => {
  const [firstLoad, setFirstLoad] = useState(null);

  useEffect(() => { 
    window.scrollTo(0, 0);
    // * controls loading animation so it only runs once per browser session.
    if (window.sessionStorage.getItem('firstLoad') === null) {
      setFirstLoad(true);
      window.sessionStorage.setItem('firstLoad', 1);
    } else {
      setFirstLoad(false);
    }
  }, []);

  return (
    <Layout>
      {firstLoad !== null ? <LoaderEntrance firstLoad={firstLoad} /> : ''}
      <motion.div className="Home">
        <Hero />
        <Locations />
        <ShopAround />
        <GroupGraphic />
        <BigBlocks />
        <MediaQuotes />
        <OrgList />
      </motion.div>
    </Layout>
  );
};

export default IndexPage;
