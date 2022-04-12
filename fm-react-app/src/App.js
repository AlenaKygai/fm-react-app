import './App.css';
import React from 'react';
import Aloha from './components/AlohaSection/Aloha'
import UserCard from './components/AlohaSection/UserCard';
import UsersList from './components/AlohaSection/UsersList';

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
    fname: 'Musk',
  }
    return <>
      <Aloha name={user.name} id={user.id}/>
      <UserCard user={user2}/>
      <UsersList users={[user2,user3]} />
    </>
}
export default App;
