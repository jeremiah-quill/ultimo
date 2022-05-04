import { useState, useEffect } from 'react';

export function useIsMobile() {
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

  return [isMobile];
}
