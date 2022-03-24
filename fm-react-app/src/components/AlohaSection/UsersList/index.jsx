import React, { Component } from 'react';
import UserCard from '../UserCard';

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

class UsersList extends Component {
  constructor(props){
    super(props);
    this.state = {
      users:userDB.map((user)=>({...user, isSelected:false})),
    }
  }
  userSelector = (id) => {
    const {users} = this.state;
    // const newUsers = JSON.parse(JSON.stringify(users));
    this.setState({
      users: users.map((user)=>({...user,
        isSelected: user.id===id? !user.isSelected : user.isSelected
      }))
    })
  }
  mapUsers = (user)=>{return ( 
    <UserCard key ={user.id} user={user}
    userSelector={this.userSelector}/>
  )}
  render() {
    const {users} = this.state;
    return (
      <section>
        <h1>List of Users:</h1>
        {users.map(this.mapUsers)}
      </section>
    );
  }
}

export default UsersList;
