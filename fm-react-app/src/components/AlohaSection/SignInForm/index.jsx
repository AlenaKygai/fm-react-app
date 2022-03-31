import React, { Component } from 'react';
import cx from 'classnames';
import styles from './SignInForm.module.css';

const initialValues = {
  email:'',
  pwd: '',
  emailValid:true,
  pwdValid:true,
};
class SignInForm extends Component {
  constructor(props){
    super(props);
    this.state = {...initialValues}
}

  handleInput = ({target:{name,value}}) => this.setState({
    [name]: value,
    [`${name}Valid`]: !value.includes(' ')
  });

  handleForm = (event)=>{
    event.preventDefault();
    event.target.reset();
    this.setState({...initialValues});
  }
  render() {

    const {emailValid,pwdValid} = this.state;
    const emailCX = cx(styles.input,{
      [styles.invalid]:!emailValid
    })
    const pwdCX = cx(styles.input,{
      [styles.invalid]:!pwdValid
    })

    return (
      <form className={styles.container}
      onSubmit={this.handleForm}>
        <h2 className={styles.title}>Sign in form</h2>
        <input type='email' 
        name='email' 
        placeholder='email'
        onChange={this.handleInput}
        className={emailCX}/>
        <input type='password' 
        name='pwd' 
        placeholder='password'
        onChange={this.handleInput}
        className={pwdCX}/>
        <input type='submit' 
        value='Sign in' className={styles.btn}/>
      </form>
    );
  }
}

export default SignInForm;
