import React, { Component } from 'react';
import Picker from './Picker'
import Topbar from './Topbar'

export default class Home extends Component {
  static displayName = Home.name;

  render(){
    return(
      <div>
      <Topbar />
      <Picker />
      </div>
    );
  }
}
