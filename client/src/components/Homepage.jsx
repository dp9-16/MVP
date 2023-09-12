import React, { useRef, useEffect } from 'react';
import AboutUs from './AboutUs.jsx';
import Header from './Header.jsx';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

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
        <div className="div-element">
          <button onClick={()=>{navigate("/quiz")}}>QUIZ PAGE</button>
        </div>
        <div className="div-element">Div 3</div>
        <AboutUs/>
      </div>
    </>
  );
}

export default Homepage;
