import React, { Component } from 'react';
import './componentStyle/Scoreboard.css'
import Example from './SettingsModal';

// TODO: Visualize scoreboard. Will need a background of some kind and a way to display scores.
export default class Scoreboard extends Component {
  static displayName = Scoreboard.name;

  render(){
    return(
      <Example />
    );
  }
}
