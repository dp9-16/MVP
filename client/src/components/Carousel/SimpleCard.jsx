import React, { useState } from 'react';

const SimpleCard = ({ food }) => {
  const [ clicked,setC ] = useState(false);

  const handleClick = (e) => {
    setC(!clicked);
  }

  return (
    <div className='tilecont'>
    <div className='stile'>
      <div className='imgtile'>
        <img src={food.recipe.image} alt='Food Image'/>
      </div>
      <p className='recipename'>{food.recipe.label}</p>
      <i className={`${clicked ? 'fa-solid' : 'fa-regular'} fa-heart favorite`} onClick={handleClick}></i>
    </div>
    </div>
  )
}

export default SimpleCard;