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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    // if (window.sessionStorage.getItem('firstLoad') === null) {
    // 	setLoading(true);
    // 	window.sessionStorage.setItem('firstLoad', 1);
    // } else {
    // 	setLoading(false);
    // }
  }, []);

  return (
    <Layout loading={loading}>
      {/* {loading ? ( */}
      <LoaderEntrance setLoading={setLoading} />
      {/* ) : ( */}
      <motion.div className="Home">
				<Hero />
        <Locations />
        <ShopAround />
        <GroupGraphic />
        <BigBlocks />
        <MediaQuotes />
        {/* <Slideshow /> */}
        <OrgList />
      </motion.div>
      {/* )} */}
    </Layout>
  );
};

export default IndexPage;
