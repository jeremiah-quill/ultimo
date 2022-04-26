import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import DesktopNavbar from '../DesktopNavbar';
import useIsMobile from '../../hooks/useIsMobile';
import '../../styles/main.scss';

const Layout = ({ children }) => {
  const [isMobile] = useIsMobile();

  return (
    <>
      {isMobile ? <Navbar /> : <DesktopNavbar />}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
