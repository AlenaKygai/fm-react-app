import React,{useEffect, useState} from 'react';
import {format,addMilliseconds}  from 'date-fns';

const FuncStopWatch = ()=>{
  const [time, setTime] = useState(new Date(0,0,0,0,0,0,0));
  const [isRuning, setIsRuning] = useState(false);

  const handlerBtn = ()=>{
    setIsRuning(!isRuning);
  }
  const resetBtn = ()=>{
    setTime(new Date(0,0,0,0,0,0,0));
    // setIsRuning(false);
  }
  useEffect(()=>{
    if(isRuning){
      const idInterval = setInterval(()=>{
        setTime(time=>addMilliseconds(time,1000));
      },1000)
      return()=>{
      clearInterval(idInterval);
      }
    }
  }, [isRuning])

  return(
    <div>
      <h2>StopWatch</h2>
      <p>Time: {format(time, 'HH:mm:ss')}</p>
      <button onClick={handlerBtn}>{isRuning? 'Stop': 'Start'}</button>
      <button onClick={resetBtn}>Reset</button>
    </div>
  )
}

export default FuncStopWatch;