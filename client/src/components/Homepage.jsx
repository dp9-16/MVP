import React, { useRef, useEffect } from 'react';
import AboutUs from './AboutUs.jsx';
import Header from './Header.jsx';

const Homepage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleScroll = (e) => {
      const scrollAmount = e.deltaY;
      container.scrollBy({
        top: scrollAmount,
        behavior: "smooth",
      });
    };
    container.addEventListener("wheel", handleScroll);
    return () => {
      container.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <div className='test' ref={containerRef}>
        <div className="div-element">Div 1</div>
        <div className="div-element">Div 2</div>
        <div className="div-element">Div 3</div>
        <AboutUs/>
      </div>
    </>
  );
}

export default Homepage;
