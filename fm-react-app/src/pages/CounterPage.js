import React, { Component } from 'react';
import Counter from '../components/Counter';

class CounterPage extends Component{
  state ={
    step:10,
  }
  handlerRange = ({target:{value,name}})=>{
    this.setState({[name]:Number(value)})
  }
  shouldComponentUpdate(nextProps, nextState){
    return (this.props.step===nextProps.step)
  }
  render(){
    const {step} = this.state;
      return (
    <div>
      <h2>Counter page</h2>
      <input type='range' name='step'
      onChange={this.handlerRange} 
      min='1' max='10' value={step}/>
      <Counter step={step}/>
    </div>
  );
  }

}

export default CounterPage;
