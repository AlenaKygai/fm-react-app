import './App.css';
import React, { Component } from 'react';
// import Tree from './components/Tree';
import {UserContext,ThemeContext} from './context';
import HeaderWithTheme from './components/Header';
import CONSTANTS from './constants';
import TreeWithTheme from './components/Tree';
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
  setTheme = (theme) => {this.setState({theme:theme})}
  render(){
    const {user,theme} = this.state;
      return <ThemeContext.Provider value={[theme,this.setTheme]}>
      <UserContext.Provider value={user}>
        <HeaderWithTheme />
        <TreeWithTheme />
      </UserContext.Provider>
      </ThemeContext.Provider>;
  }

}

export default App;
