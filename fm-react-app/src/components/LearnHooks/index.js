import React,{useState} from 'react';

const LearnHooks = ()=>{
const [coords, setCoords] = useState({
  x:0,
  y:0,
})

const [count, setCount] = useState(0);

const handlerMove = (event)=>{
  setCoords({
    x:event.clientX,
    y:event.clientY,
  })
}
const handlerClick = ()=>{
  setCount(count+1);
}
  return(
    <div style={{height:'80vh'}}
    onMouseMove={handlerMove} onClick={handlerClick}>
      <p>x:{coords.x}</p>
      <p>y:{stcoordsate.y}</p>
      <p>count:{count}</p>  
    </div>
  )
}

export default LearnHooks;