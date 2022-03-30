import React, { Component } from 'react';

class StopWatch extends Component {
  constructor(props){
    super(props);
    this.state = {
      time: new Date(0,0,0,0,0,0,0),
    }
    this.intervalId = null;
  }
  tick = () => {
    // const {time} = this.state;
    // const newTime = new Date(time.getTime()+1000);
    // this.setState({time:newTime})
    this.setState((state,props) =>{
      const {time} = this.state;
      const newTime = new Date(time.getTime()+1000);
      return {time:newTime}
    })
  }
  // this.setState({count: this.state.time+1})
  
  start = () =>{
    if(this.intervalId===null){
      this.intervalId = setInterval(this.tick,1000);
    }
  }
  stop = () =>{
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
  reset = () =>{
    this.stop();
    this.setState({time: new Date(0,0,0,0,0,0,0)})
  }
  componentDidMount(){
    // this.start()
  }
  componentDidUpdate(){

  }
  componentWillUnmount(){
    this.stop();
  }
  render() {
    const {time} = this.state;
    return (
      <article>
        <h2>{time.toLocaleTimeString('en-GB')}</h2>
        <button onClick = {this.start}>Start</button>
        <button onClick = {this.stop}>Stop</button>
        <button onClick = {this.reset}>Reset</button>
      </article>
    );
  }
}

export default StopWatch;
