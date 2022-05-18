import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DesktopNavbar from '../components/DesktopNavbar';
import '../styles/main.scss';
import { useIsMobile } from '../hooks/useIsMobile';

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
