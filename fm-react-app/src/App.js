import './App.css';
import React from 'react';
import Container from './components/Grid/Container';
import Col from './components/Grid/Col';
import Row from './components/Grid/Row';
import Aloha from './components/AlohaSection/Aloha';
import Calendar from './components/Calendar';


function App (){
    return <>
      <Container >
        <Row>
          <Col colNum='6'>
            <Aloha  id={2} name="Elon"/>
          </Col>
          <Col colNum='6'>
            <Aloha  id={2} name="Elen"/>
          </Col>
        </Row>
        <Row>
          <Col colNum='6'>
            <Aloha  id={2} name="Elon"/>
          </Col>
          <Col colNum='6'>
            <Aloha  id={2} name="Elen"/>
          </Col>
        </Row>
      </Container>
      <Calendar />
    </>
}
export default App;
