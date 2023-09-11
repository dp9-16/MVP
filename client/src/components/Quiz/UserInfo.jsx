import { useState } from 'react';

const Info = () => {
  const [ gender,setGender ] = useState('');

  const maleCal = (weight, heightCm, ageYears) => {
    return 88.362 + (13.397 * weight) + (4.799 * heightCm) - (5.677 * ageYears);
  }
  const femaleCal = (weight, heightCm, ageYears) => {
    return 447.593 + (9.247 * weight) + (3.098 * heightCm) - (4.330 * ageYears);
  }
  return (
    <div>
      <div>Weight Kgs</div>
      <div>Age</div>
      <div>Height</div>
      <div>Activity Level</div>
    </div>
  )
}

export default Info;