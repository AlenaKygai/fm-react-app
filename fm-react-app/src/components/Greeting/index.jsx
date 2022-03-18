import {Component} from 'react';

class Greeting extends Component{
  render(){
    const {name,greetings} = this.props;
    return <h2>{greetings}, {name}!</h2>;
  }
}

export default Greeting;