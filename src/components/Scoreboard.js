import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'


export default class Scoreboard extends Component {
  static displayName = Scoreboard.name;

  render(){
    return(
      <div>
        <Button variant="outline-primary">Primary</Button>{' '}
      </div>
    );
  }
}
