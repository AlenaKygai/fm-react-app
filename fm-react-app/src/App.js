import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Aloha from './components/Aloha';
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      users: [
        {
          id:1,
          fname:'Elon'
        },
        {
          id:2,
          fname:'Elen'
        },
        {
          id:3,
          fname:'Tim'
        },
        {
          id:4,
          fname:'Bob'
        },
        {
          id:5,
          fname:'Sash'
        },
        {
          id:6,
          fname:'Rob'
        },
      ]
    }
  }
  render(){
    const {fname} = this.state;
    return <>
        <Aloha name={fname} />
        <Aloha name='Elen' />
        <Aloha name='Elen' />
        <Aloha name='Elen' />
        <Aloha name='Elen' />
        <Aloha name='Elen' />
    </>
  }
}
export default App;
