import React, { Component } from 'react';

class Step extends Component {
  // state = { step: '' };
  // handleChange = (event)=> this.setState( {step : event.target.value});
  render() {
    const {step,handleChange} = this.props;
    return (
      <input 
        type='text' 
        className={step > 10? 'inputInValid' : ''}
        placeholder ='Enter counter'
        onChange={({target:{value}})=>handleChange(value)} 
      />
    );
  }
}
export default Step;
