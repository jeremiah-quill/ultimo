import React, { useState, useEffect } from 'react';

export default function useOnScreen(options, ref) {
  const [visible, setVisible] = useState(false);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
      if (entry.isIntersecting === true) {
        setTriggered(true);
      }
    }, options);
    observer.observe(ref.current);

    return () => {
      if (!ref) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [triggered];
}
