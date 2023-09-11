import { useState,useEffect } from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Homepage from './components/Homepage.jsx';
import Quiz from './components/Quiz.jsx';
import Recipes from './components/Recipes.jsx';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/quiz" element={<Quiz/>}/>
          <Route exact path="/recipes" element={<Recipes/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;