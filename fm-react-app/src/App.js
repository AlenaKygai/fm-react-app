import './App.css';
import React, { useState }  from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Homepage from './pages/HomePage';
import {UserContext,ThemeContext} from './context';
import CONSTANTS  from './constants';
const {THEMES} = CONSTANTS;


function App (){
  const [user,setUser] = useState({
    id:1,
    name:'Elon Musk',
  });
  const themeState = useState(THEMES.LIGHT);
  return(
    <ThemeContext.Provider value={themeState}>
    <UserContext.Provider value={user}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}/>
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
    </ThemeContext.Provider>
  );
}


export default App;
