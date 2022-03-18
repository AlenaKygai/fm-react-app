import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Aloha from './components/Aloha';
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      fname: 'Elon',
      sname: 'Musk',
    }
  }
  render(){
    const {fname} = this.state;
    return <>
        <Aloha name={fname} />
        <Aloha name='Elen' />
    </>
  }
}
export default App;
