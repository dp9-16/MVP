import { useState } from 'react';

const Info = ({ lvl,cal,weight,height,age,gen,page,scal,sweight,sheight,sage,sgen,set,slvl }) => {

  const femaleCal = (weightKg, heightCm, ageYears) => {
    return 655.1 + (9.563 * weightKg) + (1.850 * heightCm) - (4.676 * ageYears);
  }
  const maleCal = (weightKg, heightCm, ageYears) => {
    return 66.47 + (13.75 * weightKg) + (5.003 * heightCm) - (6.755 * ageYears);
  }

  const recCal = (bmr, activityLevel) => {
    if (activityLevel === 'Sedentary') {
      return bmr * 1.2;
    } else if (activityLevel === 'Lightly Active') {
      return bmr * 1.375;
    } else if (activityLevel === 'Moderately Active') {
      return bmr * 1.55;
    } else if (activityLevel === 'Active') {
      return bmr * 1.725;
    } else if (activityLevel === 'Very active') {
      return bmr * 1.9;
    }
  }
//#region handling
  const handleWeight = (e) => {
    e.preventDefault();
    sweight(e.target.value);
  }
  const handleHeight = (e) => {
    e.preventDefault();
    sheight(e.target.value);
  }
  const handleAge = (e) => {
    e.preventDefault();
    sage(e.target.value);
  }
  const handleGen = (e) => {
    e.preventDefault();
    const el = document.getElementById('gen');
    if (el.value !== 'Select An Option') {
      sgen(el.value);
    }
  }
  const handleLvl = (e) => {
    e.preventDefault();
    const el = document.getElementById('lvl');
    if (el.value !== 'Select An Option') {
      slvl(el.value);
    }
  }
//#endregion
  const goNext = (e) => {
    e.preventDefault();
    if (weight !== 0 && height !== 0 && age !== 0 && gen !== '' && lvl !== '') {
      if (gen === 'M') {
        cal(recCal(maleCal(weight,height,age), lvl));
      } else {
        cal(recCal(femaleCal(weight,height,age), lvl));
      }
    }
    set(2);
  }
  return (
    <div className='quiz-cont'>
      <form>
        <label>Gender<select className='dropdown' id='gen' value={gen} onChange={handleGen}><option>Select An Option</option><option>M</option><option>F</option></select></label>
        <label>Weight (in Kg)<input type='number' value={weight} onChange={handleWeight}/></label>
        <label>Height (in cm)<input type='number' value={height} onChange={handleHeight}/></label>
        <label>Age<input type='number' value={age} onChange={handleAge}/></label>
        <label>Activity Level
          <select className='dropdown' id='lvl' value={lvl} onChange={handleLvl}>
            <option>Select An Option</option>
            <option>Sedentary</option>
            <option>Lightly Active</option>
            <option>Moderately Active</option>
            <option>Active</option>
            <option>Very Active</option>
          </select>
        </label>
      </form>
      <div className='nextButton'>
        <button onClick={goNext}>Next</button>
      </div>
    </div>
  )
}

export default Info;