// import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Aloha from './components/Aloha';
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      isDirection: true,
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
  sortUsers = () => {
    const {users,isDirection} = this.state;
    const sortUsers = JSON.parse(JSON.stringify(users));
    //const sortUsers =[...users];
    sortUsers.sort((prev,next)=> isDirection? prev.id-next.id : next.id-prev.id)
    this.setState({
      isDirection:!isDirection,
      users:sortUsers
    })
  }
  render(){
    const {users, isDirection} = this.state;
    return <>
    <p>{isDirection? 'straight ': 'reverse '}
    <button onClick = {this.sortUsers} >SORT</button>
    </p>
    <ul>
      {users.map(({fname}, i)=><li key={i}> <Aloha name={fname} /></li> )}
    </ul>
    </>
}
}
export default App;
