import { useState } from 'react';

const Goal = ({ set,goal,v,sv }) => {

  const handleChange = (e) => {
    var arr = [];
    arr.push(e.target.value);
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
        <p>What Is Your Goal?</p>
        <input type='radio' name='goal' id='r1' value='high-fiber' onChange={handleChange} checked={v === 'high-fiber'}/>
        <label className='radio' htmlFor='r1'><p>Lose Weight</p></label>
        <input type='radio' name='goal' id='r2' value='high-protein' onChange={handleChange} checked={v === 'high-protein'}/>
        <label className='radio' htmlFor='r2'><p>Gain Weight</p></label>
        <input type='radio' name='goal' id='r3' value='balanced' onChange={handleChange} checked={v === 'balanced'}/>
        <label className='radio' htmlFor='r3'><p>Learn To Cook</p></label>
      </div>
      <div className='buttons'>
        <button onClick={goPrev}>Previous</button>
        <button onClick={goNext}>Next</button>
      </div>
    </div>
  )
}

export default Goal;