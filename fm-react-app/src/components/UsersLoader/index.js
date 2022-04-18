import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { getUsers } from '../../api/getUsers';
import Spinner from '../Spinner';
import config from '../../config';


class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state ={
      users: [],
      isError: false,
      isLoaded: false,
      currentPage:1,
      currentResults: config.DEFAULT_AMOUNT,
      currentNat:'gb',
    }
  }
  load = () => {
    const {currentPage,currentResults,currentNat} = this.state;
    getUsers({page:currentPage, results:currentResults, nat:currentNat})
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
    const {currentPage,currentResults,currentNat} = this.state;
    const isUpdate = 
          currentPage!== prevState.currentPage || 
          currentResults!==prevState.currentResults ||
          currentNat!==prevState.currentNat;
    if(isUpdate){
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
    <li key={user.login.uuid}>{user.name.first}({user.nat})</li>
  )
  radioHandler = (event) =>{
    this.setState({currentResults:event.target.value})
  }
  selectHandler = (event) =>{
    this.setState({currentNat:event.target.value})
  }
  render() {
    const {users,isError,isLoaded,currentPage,currentResults,currentNat} = this.state;
    return <div>

        {isError && <div> Error</div>}
        {isLoaded && <div><Spinner /></div>}

        <h2>Users List</h2>
        <button onClick={this.prevPage}>&lt;</button>
        <button onClick={this.nexPage}>&gt;</button>
        <p>Current page: {currentPage}</p>
        <div>
          <label >
            <input onChange={this.radioHandler}
            type='radio' name='results' value={5} checked={currentResults==='5'}/> 5
          </label>
          <label>
            <input onChange={this.radioHandler}
            type='radio' name='results' value={10} checked={currentResults==='10'}/> 10
          </label>
          <label>
            <input onChange={this.radioHandler}
            type='radio' name='results' value={15} checked={currentResults==='15'}/> 15
          </label>
        </div>
        <select value={currentNat} onChange={this.selectHandler}>
            <option value="br">BR</option>
            <option value="us">US</option>
            <option value="fr">FR</option>
            <option value="gb">GB</option>
          </select>
        <ul>
          {users.map(this.createUser)}
        </ul>
      </div>
}

}

UsersLoader.propTypes = {};

export default UsersLoader;
