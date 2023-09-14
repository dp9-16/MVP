import React, { useState } from 'react';
import $ from 'jquery';
const SimpleCard = ({ food,set,index }) => {
  const [ clicked,setC ] = useState(false);

  const handleClick = (e) => {
    setC(!clicked);
  }
  const handleSet = (e,index) => {
    set(index)
  }
  // $(".stile").on('click',() => {
  //   // $('html,body').animate({
  //   //     scrollTop: $(".second").offset().top},
  //   //     'slow');
  //   console.log('hi')
  // });
  return (
    <div className='tilecont'>
      <div className='stile' onClick={(e)=>{handleSet(e,index)}}>
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