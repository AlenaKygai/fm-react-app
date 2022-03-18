import logo from './logo.svg';
import './App.css';
import React from 'react';
import Aloha from './components/Aloha';
function App() {
  const user= {
    fname: 'Elon',
    sname: 'Musk',
  }
  return <React.Fragment>
      <Aloha name={`${user.fname} ${user.sname}`} />
      <Aloha name='Elen' />
      <Aloha name='Tim Lee' />
  </React.Fragment>
}
export default App;
