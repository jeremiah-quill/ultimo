import React, { useState, useContext, useEffect } from 'react';

export const IsMobileContext = React.createContext();

export const useIsMobileContext = () => useContext(IsMobileContext);

export default function IsMobileProvider({ children }) {
  let width;
  if (typeof window !== 'undefined') {
    width = window.innerWidth;
  }
  const breakpoint = 760;
  const [isMobile, setIsMobile] = useState(width < breakpoint);

  useEffect(() => {
    const handleWindowResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [width]);

  return <IsMobileContext.Provider value={{ isMobile }}>{children}</IsMobileContext.Provider>;
}
