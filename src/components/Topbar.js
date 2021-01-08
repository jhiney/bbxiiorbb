import React, { Component } from 'react';
import {Navbar, Nav, Form, FormControl} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'


export default class Topbar extends Component {
  static displayName = Topbar.name;

  render(){
    return(
      <div>
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </div>
    );
  }
}
