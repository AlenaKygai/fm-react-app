import React, { Component } from 'react';
import { format, add } from 'date-fns'

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: new Date()
    }
  }
  bthHandler = (options)=>{
    const {day} = this.state;
    const newDate = add(day,options);
    this.setState({day: newDate});
  }
  render() {
    const {day} = this.state;
    return (
      <div>
        <p>{format(day,"dd LLLL yy 'year ,' EEEE")}</p>
        <button onClick = {()=>{this.bthHandler({days:1})}}>Add 1 day</button>
        <button onClick = {()=>{this.bthHandler({weeks:1})}}>Add 1 week</button>
        <button onClick = {()=>{this.bthHandler({months:1})}}>Add 1 month</button>
      </div>
    );
  }
}

export default Calendar;
