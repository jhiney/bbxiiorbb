import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import './componentStyle/picker.css'

const leftID = "left";
const rightID = "right";
export default class Picker extends Component {

static displayName = Picker.name;



  render(){
    return(
      <div>
        <Container>
          <Row>
            <Col onClick = {() => {this.alertTest(leftID)}} id={leftID}>1 of 2</Col>
            <Col onClick = {() => {this.alertTest(rightID)}} id={rightID}>2 of 2</Col>
          </Row>
        </Container>
      </div>
    );
  }
  alertTest(e) {
  alert(e);
}
}
