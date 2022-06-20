import './App.css';
import React  from 'react';
import SignInForm from './components/forms/SignInForm';
import {SIGN_UP_SCHEMA} from './utils/schemaValidation';

function App (){
  return(
    <>
    <SignInForm/>
    </>
  );
}

export default App;
