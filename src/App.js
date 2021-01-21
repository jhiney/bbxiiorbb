import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'

export default class App extends Component {
  static displayName = App.name;
//I am testing out Git Kraken
  render(){
    return(
      <div>
      <Home />
      </div>
    )
  }
}
