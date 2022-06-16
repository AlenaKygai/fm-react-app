import './App.css';
import React  from 'react';
import SignInForm from './components/AlohaSection/SignInForm';
import {SIGN_UP_SCHEMA} from './utils/schemaValidation';

function App (){
  const userData = {
    fname: 'Elon',
    sname: 'Musk',
    email: 'elon@gmail.com',
    password: 'gr3at@3wdsG',
    age: 50,
  };
  console.log(SIGN_UP_SCHEMA.validate(userData)
    .then((respons)=>{console.log(respons)})
    .catch((err)=>{console.log(err)})
  );
  return(
    <>
    <SignInForm/>
    </>
  );
}

export default App;
