import './App.css';
import React, { useReducer, useState }  from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Homepage from './pages/HomePage';
import {UserContext, ThemeContext, AppContext} from './context';
import CONSTANTS  from './constants';
import SignUpForm from './components/forms/SignUpForm';
import Chat from './components/Chat';
import NavMenu from './components/NavMenu';
import reducer from './appReducer';
const {THEMES, ACTIONS} = CONSTANTS;


function App (){
  const [user,setUser] = useState({
    id:1,
    name:'Elon Musk',
  });
  const themeState = useState(THEMES.LIGHT);
  const [state, dispatch] = useReducer(reducer,{ isMenuOpen: false });
  const openMenu = () => dispatch({type: ACTIONS.MENU_OPEN});
  const closeMenu = () => dispatch({type: ACTIONS.MENU_CLOSE});
  return(
    <AppContext.Provider value={{state, closeMenu,openMenu}}>
    <ThemeContext.Provider value={themeState}>
    <UserContext.Provider value={user}>
    <BrowserRouter>
      <MenuOpenIcon onClick={openMenu} />
      <NavMenu />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/signup' element={<SignUpForm />}/>
        <Route path='/chat' element={<Chat />}/>
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
    </ThemeContext.Provider>
    </AppContext.Provider>
  );
}


export default App;
