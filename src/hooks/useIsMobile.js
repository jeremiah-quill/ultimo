import { useEffect, useState } from 'react';

let width;
if (typeof window !== 'undefined') {
  width = window.innerWidth;
}

export default function useIsMobile() {
  const breakpoint = 760;

  const [isMobile, setIsMobile] = useState(width < breakpoint);

  useEffect(() => {
    const handleWindowResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return [isMobile];
}
