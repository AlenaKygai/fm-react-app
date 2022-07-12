import React,{useState} from 'react';

const LearnHooks = ()=>{
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const handlerClick = ()=>{
    setCount(count+step);
  }
  const handlerInput= ({target:{value}})=>{
    setStep(Number(value));
  }
  return(
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handlerClick}>Click</button>
      <p>
        <input type='number' value={step} onChange={handlerInput}/>
      </p>
    </div>
  )
}

export default LearnHooks;