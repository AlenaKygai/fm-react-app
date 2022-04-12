import './App.css';
import React, { useState } from 'react';
import Counter from './components/Counter';
import Step from './components/Step';

function App() {
  const [step,setStep] = useState(1);
  return <>
  <Counter step={step}/>
  <Step 
    handleChange = {eventtargetvalue => {
      setStep(eventtargetvalue) 
    }} 
    step={step}
  />
  </>
}

export default App;
