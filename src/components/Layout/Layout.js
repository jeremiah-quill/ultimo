import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import DesktopNavbar from '../DesktopNavbar';
import '../../styles/main.scss';
import { useIsMobileContext } from '../../contexts/IsMobileContext';

const Layout = ({ children }) => {
  const { isMobile } = useIsMobileContext();

  return (
    <>
      {isMobile ? <Navbar /> : <DesktopNavbar />}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
