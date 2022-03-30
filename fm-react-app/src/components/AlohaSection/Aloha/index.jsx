import {Component} from 'react';
import styles from './aloha.module.css';

class Aloha extends Component{
  constructor(props){
    super(props);
    this.state ={
      isHi:true,
    }
  }
  handlerBtn = ()=>{
    const {isHi} = this.state;
    this.setState({
      isHi:!isHi
    })
  }
  render(){
    const {name, id} = this.props;
    const {isHi} = this.state;
    if(isHi){
      return <>
      <h2 className={styles.container}>{id}) Hi, {name}!</h2>
      <button onClick={this.handlerBtn} >Aloha</button>
      </>;
    }
    return <h2> Bye, {name} </h2>
  }
}
export default Aloha;