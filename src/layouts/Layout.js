import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DesktopNavbar from '../components/DesktopNavbar';
import '../styles/main.scss';
import { useIsMobile } from '../hooks/useIsMobile';

const Layout = ({ children }) => {
  const [isMobile] = useIsMobile();

  const width = typeof window !== 'undefined' ? window.innerWidth : '';

  return (
    <div className="layout">
      {width < 760 ? <Navbar /> : <DesktopNavbar />}
      <div className="layout-children">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
