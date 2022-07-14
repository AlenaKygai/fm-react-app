import React,{useState,useContext,useCallback} from 'react';
import UserProfile from '../components/UserProfile';
import { ThemeContext } from '../context';
import CONSTANTS  from '../constants';
const {THEMES} = CONSTANTS;
const styleMap = {
  [THEMES.LIGHT]:{
    background:'#eee', color:'#333', height:'100vh'
  },
  [THEMES.DARK]:{
    background:'#333', color:'#eee', height:'100vh'
  }
 }

const Homepage = ()=>{
  const [value,setValue] = useState(0);
  const [theme, setTheme] = useContext(ThemeContext);

  const handlerTheme = useCallback(()=>{
    setTheme(theme===THEMES.LIGHT? THEMES.DARK:THEMES.LIGHT);
  },[theme, setTheme]);

  const handlerInput = useCallback(
    ({target:{value}})=>{setValue(Number(value));}
    ,[])
  const handlerLog = useCallback(
    ()=>{ console.log(value); }
    ,[value]
  );
  return (
    <div style={styleMap[theme]}>
      <h2>Value: {value}</h2>
      <input type='number' value={value} onChange={handlerInput}/>
      <button onClick={handlerTheme}>Switch theme</button>
      <button onClick={handlerLog}>Log value</button>
      <UserProfile />
    </div>
  );
}

export default Homepage;