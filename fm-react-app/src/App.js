import './App.css';
import React from 'react';
import Aloha from './components/AlohaSection/Aloha';
import Calendar from './components/Calendar';
function App (){

    return <>
      <Calendar />
      <Aloha id={1} name="Elon"/>
    </>
}
export default App;
