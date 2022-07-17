import React,{useReducer} from 'react';

const reducer = (state,action) => {
  const {name, value} = action;
  const newState={
    ...state,
    [name]:value
  }
  return newState;
} 

const SignUpForm = () => {
  const [state,dispatch] = useReducer(reducer,{
    fname:'',
    sname:'',
    email:'',
    password:'',
    phone:'',
    age:0,
  });
  const handlerInput = ({target:{name, value}}) => {
    const action = {name, value};
    dispatch(action);
  }
  return(
    <div>
      <h2>Sign up</h2>
      <form>
        <input type='text' name='fname' value={state.fname} onChange={handlerInput} />
        <input type='text' name='sname' value={state.sname} onChange={handlerInput} />
        <input type='email' name='email' value={state.email} onChange={handlerInput} />
        <input type='password' name='password' value={state.password} onChange={handlerInput} />
        <input type='text' name='phone' value={state.phone} onChange={handlerInput} />
        <input type='number' name='age' value={state.age} onChange={handlerInput} />
      </form>
    </div>
  )
}

export default SignUpForm;