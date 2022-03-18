import logo from './logo.svg';
import './App.css';
import React from 'react';
import Greeting from './components/Greeting';
function App() {
  return <React.Fragment>
      <Greeting greetings='Hello' name='Elon Musk'/>
      <Greeting greetings='Hi' name='Elen' />
      <Greeting greetings='Merhaba' name='Tim Lee' />
  </React.Fragment>
}
export default App;
