import React from 'react'
import '../styles/scss/header.scss';
import styled from 'styled-components';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const styles = {
  navBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red', // changing navbar color
  },
  navTitle: {
    color: 'white', // changing navbar title color
  },
}

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>      
        <head><title>Go</title></head>
          <Navbar primary color="dark" light expand="md">
            <NavbarBrand href="/"><p>Home</p></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/schedule"><p>Schedule</p></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/add"><p>Add</p></NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
      </div>
    );
  }
}