import {Component} from 'react';
import styles from './aloha.module.css';
import PropTypes from 'prop-types';

class Aloha extends Component{
  /**
   * 
   * @param {*} props 
   * @param {string} props.name 
   * @param {number} props.id 
   */
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
    if(typeof name !=='string'){
      console.error('Must be string! Component Aloha')
    }
    if(isHi){
      return <>
      <h2 className={styles.container}>{id}) Hi, {name}!</h2>
      <button onClick={this.handlerBtn} >Aloha</button>
      </>;
    }
    return <h2> Bye, {name} </h2>
  }
}

Aloha.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default Aloha;
