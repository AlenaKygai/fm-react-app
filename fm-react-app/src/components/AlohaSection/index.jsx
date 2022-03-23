import {Component}  from "react";
import AlohaList from "./AlohaList";

class AlohaSection extends Component{
  constructor(props){
    super(props);
    this.state = {
      isDirection: true,
      isAlphabet: true,
      users: [
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
      ]
    }
  }
  sortUsers = () => {
    const {users,isDirection} = this.state;
    const sortUsers = JSON.parse(JSON.stringify(users));
    //const sortUsers =[...users];
    sortUsers.sort((prev,next)=> isDirection? next.id-prev.id :prev.id-next.id )
    this.setState({
      isDirection:!isDirection,
      users:sortUsers
    })
  }
  sortUsersAlp = () =>{
    const {users,isAlphabet} = this.state;
    const sortUsersAlp = JSON.parse(JSON.stringify(users));
    //const sortUsers =[...users];
    sortUsersAlp.sort( (fw,sw)=>{
      if(fw.fname > sw.fname){
         return isAlphabet? 1 : -1; 
      }
      if(fw.fname < sw.fname){
        return isAlphabet? -1 : 1;
      }
      return 0;
    })
    this.setState({
      isAlphabet:!isAlphabet,
      users:sortUsersAlp
    })
  }
  render(){
    const {users, isDirection,isAlphabet} = this.state;
    return <>
    <p>
    <button onClick = {this.sortUsers} >SORT BY NUMBER {isDirection? 'straight ': 'reverse '} </button>
    <button onClick = {this.sortUsersAlp} >SORT BY NAME {isAlphabet? 'straight ': 'reverse '} </button>
    </p>
    <AlohaList users={users}/>
    </>
  }
}

export default AlohaSection;