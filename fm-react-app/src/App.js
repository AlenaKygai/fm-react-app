import './App.css';
import React from 'react';



function App (){
    return <>
      <button onClick={()=>{window.close()}}>Close window</button>
      <button onClick={()=>{window.open('https://webpack.js.org/')}}>Open window</button>
      <button onClick={()=>{window.location.assign('https://webpack.js.org/')}}>Open assign</button>
    </>
}
export default App;
