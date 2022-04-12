import './App.css';
import React from 'react';
// import Aloha from './components/AlohaSection/Aloha'
// import UserCard from './components/AlohaSection/UserCard';
// import UsersList from './components/AlohaSection/UsersList';
import AlohaList from './components/AlohaSection/AlohaList';

function App (){
  const user ={
    id:1,
    name: 'Elon',
  }
  const user2 ={
    id:2,
    fname: 'Musk',
  }
  const user3 ={
    id:3,
    fname: 'Noname',
  }
    return <>
      <AlohaList users={[user2,user3]}/>

    </>
}
export default App;
