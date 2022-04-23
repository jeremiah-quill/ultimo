import { useEffect, useState } from 'react';

export default function useIsMobile() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 760;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const isMobile = width < breakpoint;

  return [isMobile];
}
