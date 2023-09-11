import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Info from './Quiz/UserInfo.jsx';
import Goal from './Quiz/Goal.jsx';
import Restrictions from './Quiz/Restrictions.jsx';
import axios from 'axios';

const Quiz = () => {
  const [ goal,setGoal ] = useState([]);
  const [ cal,setCal ] = useState(0);
  const [ rest,setRest ] = useState([]);

  const navigate = useNavigate();

  const handleClick = () => {
    console.log('hi')
    axios.get('/results')
      .then((response) => {
        navigate("/recipes", {state: {recipes: response.slice(0, 7)}})
      })
  }

//QUIZ SHOULD HAVE OBJECT WITH DIET FOR GOALS HEALTH FOR RESTRICTIONS/ALLERGIES AND CALORIES FOR CALORIE INTAKE DEPENDING ON GOAL

  return (
    <div>
      <Info setCal={setCal}/>
      <Goal goal={setGoal}/>
      <Restrictions diet={setRest}/>
      <button onClick={handleClick}>test</button>
    </div>
  )
}

export default Quiz;