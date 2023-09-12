import { useState } from 'react';

const Restriction = ({ set,click,k,sk,ko,sko,v,sv,ve,sve,g,sg,p,sp,sh,ssh,s,ss }) => {
  const goPrev = (e) => {
    e.preventDefault();
    set(2);
  }

  //#region handlers
  const handleKeto = (e) => {
    e.preventDefault();
    sk(!k);
  }
  const handleKosher = (e) => {
    e.preventDefault();
    sko(!ko);
  }
  const handleVegan = (e) => {
    e.preventDefault();
    sv(!v);
  }
  const handleVege = (e) => {
    e.preventDefault();
    sve(!ve);
  }
  const handleGluten = (e) => {
    e.preventDefault();
    sg(!g);
  }
  const handlePeanut = (e) => {
    e.preventDefault();
    sp(!p);
  }
  const handleShellfish = (e) => {
    e.preventDefault();
    ssh(!sh);
  }
  const handleSoy = (e) => {
    e.preventDefault();
    ss(!s);
  }
  //#endregion
  return (
    <div className='c'>
      <div className='cont'>
        <div className='container'>
          <p>Dietary Restrictions:</p>
          <span><i>Select Any/All That Apply</i></span>
          {k ? (<div className='div-butt' value={k} style={{'backgroundColor':'green'}} onClick={handleKeto}>Keto</div>):(<div className='div-butt' value={k} onClick={handleKeto}>Keto</div>)}
          {ko ? (<div className='div-butt' value={ko} onClick={handleKosher} style={{'backgroundColor':'green'}}>Kosher</div>):(<div className='div-butt' value={ko} onClick={handleKosher}>Kosher</div>)}
          {v ? (<div className='div-butt' value={v} onClick={handleVegan} style={{'backgroundColor':'green'}}>Vegan</div>):(<div className='div-butt' value={v} onClick={handleVegan}>Vegan</div>)}
          {ve ? (<div className='div-butt' value={ve} onClick={handleVege} style={{'backgroundColor':'green'}}>Vegetarian</div>):(<div className='div-butt' value={ve} onClick={handleVege}>Vegetarian</div>)}
        </div>
        <div className='container'>
          <p>Food Allergies:</p>
          <span><i>Select Any/All That Apply</i></span>
          {g ? (<div className='div-butt' value={g} onClick={handleGluten} style={{'backgroundColor':'green'}}>Gluten</div>):(<div className='div-butt' value={g} onClick={handleGluten}>Gluten</div>)}
          {p ? (<div className='div-butt' value={p} onClick={handlePeanut} style={{'backgroundColor':'green'}}>Peanut</div>):(<div className='div-butt' value={p} onClick={handlePeanut}>Peanut</div>)}
          {sh ? (<div className='div-butt' value={sh} onClick={handleShellfish} style={{'backgroundColor':'green'}}>Shellfish</div>):(<div className='div-butt' value={sh} onClick={handleShellfish}>Shellfish</div>)}
          {s ? (<div className='div-butt' value={s} onClick={handleSoy} style={{'backgroundColor':'green'}}>Soy</div>):(<div className='div-butt' value={s} onClick={handleSoy}>Soy</div>)}
        </div>
      </div>
      <div className='buttons-last'>
        <button onClick={goPrev}>Previous</button>
        <button onClick={click}>Submit</button>
      </div>
    </div>
  )
}

export default Restriction;