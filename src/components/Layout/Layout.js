import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import DesktopNavbar from '../DesktopNavbar';
import '../../styles/main.scss';
import { useIsMobile } from '../../hooks/useIsMobile';

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
