import React, { useState, useEffect } from 'react';

// TODO: options isn't doing anything here, currently hardcoded .3 threshold for all
export default function useOnScreen(options, ref) {
  const [visible, setVisible] = useState(false);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        if (entry.isIntersecting === true) {
          setTriggered(true);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);

    return () => {
      if (!ref) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return [triggered];
}
