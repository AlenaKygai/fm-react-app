import './App.css';
import React from 'react';

const List = (props)=>{
  const {title,children} = props;
  return (
    <ul title={title}>
      {children}
    </ul>
  );
}
function App (){

    return <>
      <List title="qwerty">
        <li>1</li>
       <li>2</li>
      </List>
    </>
}
export default App;
