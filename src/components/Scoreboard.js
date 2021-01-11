import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import './componentStyle/Scoreboard.css'

// TODO: Visualize scoreboard. Will need a background of some kind and a way to display scores.
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
