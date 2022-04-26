import {useState, useEffect} from 'react'

export default function useParallax() {
	const [offsetY, setOffsetY] = useState(0)
	const handleScroll = () => setOffsetY(window.pageYOffset);
  
  useEffect(() => {
		window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
    }, []);
    
    return [offsetY]
}