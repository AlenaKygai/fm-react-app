import React, { Component } from 'react';

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
    }
  }
  add = () =>{
    this.setState({count: this.state.count+1})
  }

  render() {
    const {count} = this.state;
    return (
      <div>
          <h2>{count}</h2>
          <button onClick={this.add}>Add</button>
      </div>
    );
  }
}

export default Counter;
