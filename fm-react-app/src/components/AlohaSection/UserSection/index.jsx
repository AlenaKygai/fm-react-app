import React, { Component } from 'react';
import SelectedUsersList from '../SelectedUsersList';
import UsersList from '../UsersList';

const userDB = [
  {
    id:1,
    fname:'Dima'
  },
  {
    id:2,
    fname:'Elen'
  },
  {
    id:3,
    fname:'Alena'
  },
  {
    id:4,
    fname:'Bob'
  },
  {
    id:5,
    fname:'Chen'
  },
  {
    id:6,
    fname:'Rob'
  },
];

class UserSection extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      users:userDB.map((user)=>({...user, isSelected:false}))
    }
  }

  setUserSelector = (newUsers)=>{this.setState({users:newUsers})}

  render(){
    const {users} = this.state;
  return <>
    <header> <SelectedUsersList  users = {users} /> </header>
    <main><UsersList users = {users} setUserSelector = {this.setUserSelector} /></main>
  </>
  }
}

export default UserSection;
