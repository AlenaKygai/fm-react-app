import './App.css';
import React from 'react';
import Aloha from './components/AlohaSection/Aloha'

function App (){
  const user ={
    id:1,
    name: 'Elon',
  }
    return <>
      <Aloha name={user.name} id={user.id}/>
    </>
}
export default App;
