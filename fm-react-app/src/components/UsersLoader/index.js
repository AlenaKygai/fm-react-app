import React, { Component } from 'react';
import PropTypes from 'prop-types';


class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state ={
      users: [],
      isError: false,
      isLoaded: false,
    }
  }
  componentDidMount(){
    this.setState({
      isLoaded: true,  
    })
    fetch('https://randomuser.me/api/?results=10&page=1&seed=users')
    .then(response => response.json())
    .then((data)=>this.setState({
      users:data.results,
    }))
    .catch(()=>this.setState({
      isError: true,
    }))
    .finally(()=>this.setState({
      isLoaded: false,
    }))
  }

  render() {
    const {users,isError,isLoaded} = this.state;
    if(isError){
      return  <div> Error</div>
    }
    if(isLoaded){
      return  <div> Loading ... </div>
    }
    return (
      <div>
        <h2>Users List</h2>
        <ul>
          {users.map((user)=>(
            <li key={user.login.uuid}>{JSON.stringify(user,null,7)}</li>
          ))}
        </ul>
      </div>
    )
}

}

UsersLoader.propTypes = {};

export default UsersLoader;
