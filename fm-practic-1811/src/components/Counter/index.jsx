import React, { Component } from 'react';

class Counter extends Component {
    state = {
      count: 0,
      isAdd: true,
    }
  addSub = () =>{
    this.setState((state,props)=>{
      return {count: state.isAdd?
        state.count+Number(props.step) :
        state.count-Number(props.step)
      }
    })
  }
  changeBtn = () =>{
    this.setState({isAdd: !this.state.isAdd})
  }
  render() {
    const {count} = this.state;
    return (
      <div>
          <h2>{count}</h2>
          <button onClick={this.addSub}>{this.state.isAdd?"Add":"Sub"}</button>
          <button onClick={this.changeBtn}>Change</button>
      </div>
    );
  }
}

export default Counter;
