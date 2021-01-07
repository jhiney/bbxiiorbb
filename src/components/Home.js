import React, { Component } from 'react';
import Picker from './Picker'

export default class Home extends Component {
  static displayName = Home.name;

  render(){
    return(
      <div>
        <Picker />
      </div>
    );
  }
}
