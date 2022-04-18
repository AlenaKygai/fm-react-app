import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getUsers } from '../../api/getUsers';
import Spinner from '../Spinner';


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
    getUsers({page:currentPage, res:3})
      .then((data)=>{
        return (data.error)?
        this.setState({isError:true}):
        this.setState({users:data.results})
      })
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
  componentDidUpdate(prevProps,prevState){
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
  createUser = (user)=>(
    <li key={user.login.uuid}>{JSON.stringify(user)}</li>
  )
  render() {
    const {users,isError,isLoaded,currentPage,user} = this.state;
    return <div>

        {isError && <div> Error</div>}
        {isLoaded && <div><Spinner /></div>}

        <h2>Users List</h2>
        <button onClick={this.prevPage}>&lt;</button>
        <button onClick={this.nexPage}>&gt;</button>
        <p>Current page: {currentPage}</p>
        <ul>
          {users.map(this.createUser)}
        </ul>
      </div>
}

}

UsersLoader.propTypes = {};

export default UsersLoader;
