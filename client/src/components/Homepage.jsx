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
      <div className='home' ref={containerRef}>
        <div className="div-element first">
          <div className="txtDiv">
          <p style={{'fontSize':'70px', 'textAlign':'left','margin':' 0  0 5px 5vw'}}>Fuel Your Journey With Flavor:</p>
          <p style={{'fontSize':'40px', 'textAlign':'left','margin':'5px 0 0 5vw'}}><i> Your Path To Healthy Eating</i></p>
          </div>
          <div className='imgdiv'>
            <img src={'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'}/>
          </div>
        </div>
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
