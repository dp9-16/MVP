import React, { useState,useEffect } from 'react';
import AboutUs from './AboutUs.jsx';
import Header from './Header.jsx';
import { useLocation } from 'react-router-dom';
import SimpleCard from './Carousel/SimpleCard.jsx';
import Recipe from './Recipe.jsx';
import arr from './test.jsx';

const Recipes = () => {
  const location = useLocation();
  const [ ind,setInd ] = useState(0);
  var data;
  const obj = {
    recipe: {image: 'https://i.natgeofe.com/n/3ac79952-e41e-4726-b41c-b0e56f1dd38a/giraffe_01_3x4.JPG',label:''}
  }
  if (location.state) {
    data = location.state.recipes;
  }

  return (
    <div className='home'>
      <Header />
      <div className="div-element">
        <div className='recipegrid'>
          {data.map((recipe,index) => {
            return (<SimpleCard key={index} index={index} food= {recipe} set={setInd}/>)
          })}
          <div>
            <p>Scroll Down For Recipe</p>
            <p>&#8595;</p>
          </div>
          <SimpleCard className='giraffe' key='giraffe' food={obj}/>
        </div>
      </div>
      <div className="div-element second" id='recipediv'>
        {data ? (<Recipe recipe={data[ind]}/>) : (<h1>Loading</h1>)}
        {/* {arr ? (<Recipe recipe={arr[ind]}/>) : (<h1>Loading</h1>)} */}
      </div>
      <AboutUs />
    </div>
  )
}

export default Recipes;