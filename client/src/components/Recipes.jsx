import React, { useState } from 'react';
import AboutUs from './AboutUs.jsx';
import Header from './Header.jsx';
import { useLocation } from 'react-router-dom'

const Recipes = () => {
  const location = useLocation();
  var data;
  if (location.state) {
    data = location.state;
    console.log(data)
  }
  //material ui carousel?
  return (
    <div>
      <Header />
      <div className="div-element">
        {console.log(data)}
      </div>
      <AboutUs />
    </div>
  )
}

export default Recipes;