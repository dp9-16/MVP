import { useState } from 'react';

const Goal = ({ set,goal,v,sv,clicked }) => {

  const handleChange = (e) => {
    var arr = [];
    arr.push(e.target.value);
    console.log(e.target.value);
    clicked(true);
    sv(e.target.value);
    goal(arr);
  };

  const goNext = (e) => {
    e.preventDefault();
    set(3);
  }
  const goPrev = (e) => {
    e.preventDefault();
    set(1);
  }

  return (
    <div>
      <div className='radios'>
        <h3>What Is Your Goal?</h3>
        <input type='radio' name='goal' id='r1' value='low-carb' onChange={handleChange} checked={v === 'low-carb'}/>
        <label className='radio' htmlFor='r1'><p><i className="fa-solid fa-carrot"></i>&nbsp; Lose Weight &nbsp;<i className="fa-solid fa-carrot"></i></p></label>
        <input type='radio' name='goal' id='r2' value='high-protein' onChange={handleChange} checked={v === 'high-protein'}/>
        <label className='radio' htmlFor='r2'><p><i className="fa-solid fa-dumbbell"></i>&nbsp; Gain Weight&nbsp; <i className="fa-solid fa-dumbbell"></i></p></label>
        <input type='radio' name='goal' id='r3' value='balanced' onChange={handleChange} checked={v === 'balanced'}/>
        <label className='radio' htmlFor='r3'><p><i className="fa-solid fa-utensils"></i>&nbsp; Learn To Cook &nbsp;<i className="fa-solid fa-utensils"></i></p></label>
        <div className='buttons'>
        <button onClick={goPrev}>Previous</button>
        <button onClick={goNext}>Next</button>
      </div>
      </div>
    </div>
  )
}

export default Goal;