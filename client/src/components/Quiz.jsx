import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import AboutUs from './AboutUs.jsx';
import Header from './Header.jsx';
import Info from './Survey/Info.jsx';
import Goal from './Survey/Goal.jsx';
import Restriction from './Survey/Restriction.jsx';

//REFACTOR SINCE YOU SHOULD ONLY HAVE ONE GOAL


const Quiz = () => {
  const [ goal,setGoal ] = useState(['balanced']);
  const [ cal,setCal ] = useState(0);
  const [ rest,setRest ] = useState([]);
  const [ page,setPage ] = useState(1);

  //#region info
  const [ weight,setWeight ] = useState(0);
  const [ height,setHeight ] = useState(0);
  const [ gen,setGen ] = useState('');
  const [ age,setAge ] = useState(0);
  const [ lvl,setLvl ] = useState('');
  //#endregion
  //#region restrictions
  const [ k,setK ] = useState(false);
  const [ ko,setKo ] = useState(false);
  const [ v,setV ] = useState(false);
  const [ ve,setVe ] = useState(false);
  const [ g,setG ] = useState(false);
  const [ p,setP ] = useState(false);
  const [ sh,setSh ] = useState(false);
  const [ s,setS ] = useState(false);
  //#endregion
  //#region useEffects
  useEffect(() => {
    if (k) {
      console.log(rest)
      setRest(prev => {
        const prevData = [...prev]
        if (!prevData.includes('keto-friendly')) {
          prevData.push('keto-friendly')
        }
        return prevData;
      })
    } else {
        if (rest.includes('keto-friendly')) {
          setRest((prev) => prev.filter((item) => item !== 'keto-friendly'));
        }
      }
  },[k])
  useEffect(() => {
    if (ko) {
      setRest(prev => {
        const prevData = [...prev]
        if (!prevData.includes('kosher')) {
          prevData.push('kosher')
        }
        return prevData;
      })
    } else {
        if (rest.includes('kosher')) {
          setRest((prev) => prev.filter((item) => item !== 'kosher'));
        }
      }
  },[ko])
  useEffect(() => {
    if (v) {
      setRest(prev => {
        const prevData = [...prev]
        if (!prevData.includes('vegan')) {
          prevData.push('vegan')
        }
        return prevData;
      })
    } else {
        if (rest.includes('vegan')) {
          setRest((prev) => prev.filter((item) => item !== 'vegan'));
        }
      }
  },[v])
  useEffect(() => {
    if (ve) {
      setRest(prev => {
        const prevData = [...prev]
        if (!prevData.includes('vegetarian')) {
          prevData.push('vegetarian')
        }
        return prevData;
      })
    } else {
        if (rest.includes('vegetarian')) {
          setRest((prev) => prev.filter((item) => item !== 'vegetarian'));
        }
      }
  },[ve])
  useEffect(() => {
    if (g) {
      setRest(prev => {
        const prevData = [...prev]
        if (!prevData.includes('gluten-free')) {
          prevData.push('gluten-free')
        }
        return prevData;
      })
    } else {
        if (rest.includes('gluten-free')) {
          setRest((prev) => prev.filter((item) => item !== 'gluten-free'));
        }
      }
  },[g])
  useEffect(() => {
    if (p) {
      setRest(prev => {
        const prevData = [...prev]
        if (!prevData.includes('peanut-free')) {
          prevData.push('peanut-free')
        }
        return prevData;
      })
    } else {
        if (rest.includes('peanut-free')) {
          setRest((prev) => prev.filter((item) => item !== 'peanut-free'));
        }
      }
  },[p])
  useEffect(() => {
    if (sh) {
      setRest(prev => {
        const prevData = [...prev]
        if (!prevData.includes('shellfish-free')) {
          prevData.push('shellfish-free')
        }
        return prevData;
      })
    } else {
        if (rest.includes('shellfish-free')) {
          setRest((prev) => prev.filter((item) => item !== 'shellfish-free'));
        }
      }
  },[sh])
  useEffect(() => {
    if (s) {
      setRest(prev => {
        const prevData = [...prev]
        if (!prevData.includes('soy-free')) {
          prevData.push('soy-free')
        }
        return prevData;
      })
    } else {
        if (rest.includes('soy-free')) {
          setRest((prev) => prev.filter((item) => item !== 'soy-free'));
        }
      }
  },[s])
  //#endregion
  //#region goal
  const [ val,setVal ] = useState('');
  const [ clicked,setClicked ] = useState(false);
  //#endregion
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (clicked || cal === 0) {
      alert('Please Finish Filling Out The Forms')
    } else {
      if (goal === 'balanced' || goal === 'low-carb') {
        var obj = {
          diet: goal,
          health: rest,
          calories: (cal/3).toString(),
          count: 7
        }
      } else {
        var obj = {
          diet: goal,
          health: rest,
          calories: (cal/2).toString(),
          count: 7
        }
      }
      axios.get('/results', {params:obj})
        .then((response) => {
          return response.data
        })
        .then((result)=>{
          navigate("/recipes", {state: {recipes: result}})
        })
    }
  }

//QUIZ SHOULD HAVE OBJECT WITH DIET FOR GOALS HEALTH FOR RESTRICTIONS/ALLERGIES AND CALORIES FOR CALORIE INTAKE DEPENDING ON GOAL
  if (page === 1) {
    return (
      <div className='quiz'>
        <Header />
        <div className="div-element">
        <Info set={setPage} scal={setCal} slvl={setLvl} sweight={setWeight} sheight={setHeight} sage={setAge} sgen={setGen} cal={setCal} weight={weight} height={height} age={age} gen={gen} lvl={lvl}/>
        </div>
        <AboutUs />
      </div>
    )
  } else if (page === 2) {
    return (
      <div className='quiz'>
        <Header />
        <div className="div-element">
        <Goal set={setPage} goal={setGoal} v={val} sv={setVal} clicked={setClicked}/>
        </div>
        <AboutUs />
      </div>
    )
  } else {
    return (
      <div className='quiz'>
        <Header />
        <div className="div-element">
        <Restriction set={setPage} click={handleClick} k={k} sk={setK} ko={ko} sko={setKo} v={v} sv={setV} ve={ve} sve={setVe} g={g} sg={setG} p={p} sp={setP} sh={sh} ssh={setSh} s={s} ss={setS}/>
        </div>
        <AboutUs />
      </div>
    )
  }
}

export default Quiz;