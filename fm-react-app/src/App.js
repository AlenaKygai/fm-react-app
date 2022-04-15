import './App.css';
import React from 'react';
// import Container from './components/Grid/Container';
// import Col from './components/Grid/Col';
// import Row from './components/Grid/Row';
import Aloha from './components/AlohaSection/Aloha';
import Calendar from './components/Calendar';
import FlexContainer from './components/FlexContainer';


function App (){
    return <>
      <FlexContainer 
        jc='space-between' 
        ai='left' 
        fd='column' 
        fw='wrap' 
        style={{border:'1px red solid'}}>
      <Aloha id={1} name='Elon' />
      <Aloha id={2} name='Elon' />
      <Aloha id={3} name='Elon' />
      <Aloha id={4} name='Elon' />
      </FlexContainer>
      <Calendar />
    </>
}
export default App;
