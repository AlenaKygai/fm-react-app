import './App.css';
import React, { Component } from 'react';
import Tree from './components/Tree';
import {UserContext,ThemeContext} from './context';
import Header from './components/Header';
import CONSTANTS from './constants';
const {THEMES} = CONSTANTS;

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      theme:THEMES.LIGHT,
      user:{
        id:1,
        fname:'Elon',
        sname:'Musk',
        imgSrc:'https://www.presse-citron.net/app/uploads/2021/04/elonmusk.jpg',
      }
    }
  }
  
  render(){
    const {user,theme} = this.state;
      return <ThemeContext.Provider value={theme}>
      <UserContext.Provider value={user}>
        <Header />
        <Tree />
      </UserContext.Provider>
      </ThemeContext.Provider>;
  }

}

export default App;
