import './App.css';
import React, { Component } from 'react';
import Tree from './components/Tree';
import {UserContext} from './context';
import Header from './components/Header';



class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      user:{
        id:1,
        fname:'Elon',
        sname:'Musk',
        imgSrc:'https://www.presse-citron.net/app/uploads/2021/04/elonmusk.jpg',
      }
    }
  }
  
  render(){
    const {user} = this.state;
      return <UserContext.Provider value={user}>
        <Header />
        <Tree />
      </UserContext.Provider>;
  }

}

export default App;
