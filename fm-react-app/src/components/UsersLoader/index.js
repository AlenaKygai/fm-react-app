import React, { Component } from 'react';
import PropTypes from 'prop-types';


class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state ={
      users: [],
      isError: false,
      isLoaded: false,
      currentPage:1,
    }
  }
  load = () => {
    const {currentPage} = this.state;
    fetch(`https://randomuser.me/api/?results=2&page=${currentPage}&seed=users`)
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
  componentDidMount(){
    this.setState({
      isLoaded: true,  
    })
    this.load();
  }
  componentDidUpdate(prevState){
    const {currentPage} = this.state;
    if(currentPage!== prevState.currentPage){
      this.load();
    }
  }
  prevPage = () => {
    if(this.state.currentPage>1){
      this.setState((state,props)=>(
        {currentPage:state.currentPage-1}
      ))
    }
  }
  nexPage = () => this.setState((state,props)=>(
    {currentPage:state.currentPage+1}
  ))

  render() {
    const {users,isError,isLoaded,currentPage} = this.state;
    if(isError){
      return  <div> Error</div>
    }
    if(isLoaded){
      return  <div> Loading ... </div>
    }
    return (
      <div>
        <h2>Users List</h2>
        <button onClick={this.prevPage}>&lt;</button>
        <button onClick={this.nexPage}>&gt;</button>
        <p>Current page: {currentPage}</p>
        <ul>
          {users.map((user)=>(
            <li key={user.login.uuid}>{JSON.stringify(user)}</li>
          ))}
        </ul>
      </div>
    )
}

}

UsersLoader.propTypes = {};

export default UsersLoader;
