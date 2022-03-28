import React, { Component } from 'react';
import UserCard from '../UserCard';

class UsersList extends Component {

  userSelector = (id)=>{
    const {users, setUserSelector} = this.props;
    // const newUsers = JSON.parse(JSON.stringify(users));
    setUserSelector(
      users.map((user)=>({...user,
        isSelected: user.id===id? !user.isSelected : user.isSelected
      }))
    )
  }
  mapUsers = (user)=>{return ( 
    <UserCard key ={user.id} user={user}
    userSelector={this.userSelector}/>
  )}
  render() {
    const {users} = this.props;
    return (
      <section>
        <h1>List of Users:</h1>
        {users.map(this.mapUsers)}
      </section>
    );
  }
}

export default UsersList;
