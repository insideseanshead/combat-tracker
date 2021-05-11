import React from "react";
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from "react-bootstrap";
import {Link} from 'react-router-dom'
const NavigationBar = (props) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Warhammer 2E Combat Tracker</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {props.profile.isLoggedIn?<Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Campaigns</Nav.Link>
          <Nav.Link href="/beastiary">Beastiary</Nav.Link>
          <Nav.Link href='/' onClick={props.logout} >Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>: null}
    </Navbar>
  );
};

export default NavigationBar;
