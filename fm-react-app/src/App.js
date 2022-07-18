import './App.css';
import React, { useState }  from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Homepage from './pages/HomePage';
import {UserContext,ThemeContext} from './context';
import CONSTANTS  from './constants';
import SignUpForm from './components/forms/SignUpForm';
import Chat from './components/Chat';
import NavMenu from './components/NavMenu';
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
      <NavMenu />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/signup' element={<SignUpForm />}/>
        <Route path='/chat' element={<Chat />}/>
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
    </ThemeContext.Provider>
  );
}


export default App;
