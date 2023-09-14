import React, { useState } from 'react';
const Card = ({ food,ind }) => {
  const [ clicked,setC ] = useState(false);

  //#region Mock Data
  const names = ["Alisa Bondar", "Amelia LI", "Beck Baimouradov", "Ben Trimpi", "Jonathan Andrews", "Khurram Ali", "Kurt Vardeman", "Michael Cuellar", "Victor Acosta", "Vinny Colano"];
  const reviewSummaries = [
    "The food was excellent!",
    "The flavors were amazing!",
    "I thoroughly enjoyed the meal!",
    "The dishes were delicious!",
    "The dining experience was outstanding!",
    "The food quality was top-notch!",
    "Everything was simply fantastic!",
    "The taste was unforgettable!",
    "I had a wonderful culinary experience!",
    "The meal was a real treat!",
    "I highly recommend this place!",
    "The food exceeded my expectations!",
    "The flavors were a delightful surprise!",
    "I can't wait to come back for more!",
  ];
  //#endregion

  const handleClick = (e) => {
    setC(!clicked);
  }

  return (
    <div className='tilecont'>
    <div className='tile'>
      <div className='imgtile'>
        <img src={food.recipe.image} alt='Food Image'/>
      </div>
      <p className='recipename'>{food.recipe.label}</p>
      <div className='rating'>
        <p>★★★★★</p>
        <span>{names[ind]}</span>
      </div>
      <p className='review'>{reviewSummaries[ind]}</p>
      <i className={`${clicked ? 'fa-solid' : 'fa-regular'} fa-heart favorite`} onClick={handleClick}></i>
    </div>
    </div>
  )
}

export default Card;