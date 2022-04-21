import React, {useState, useRef, useEffect} from 'react'

export default function useOnScreen(options) {
  const ref = useRef()
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);
    observer.observe(ref.current)
    
    return () => {
      if(ref) {
        observer.unobserve(ref.current)
      }
    };
  }, [ref, options])
  return [ref, visible]
}