import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import './componentStyle/picker.css'


export default class Picker extends Component {
  static displayName = Picker.name;

  render(){
    return(
      <div>
        <Container>
          <Row>
            <Col id="left">1 of 2</Col>
            <Col id="right">2 of 2</Col>
          </Row>
        </Container>
      </div>
    );
  }
}
