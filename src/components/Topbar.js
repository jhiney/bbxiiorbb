import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';


//TODO:  is using the default NavBar from React-bootstrap. Need to update to be more personal.
export default class Topbar extends Component {
  static displayName = Topbar.name;

  render(){
    return(
      <div>
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Big XII Football, or Basketball?</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
