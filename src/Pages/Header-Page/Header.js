import React from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <NavLink to ='/home'>Home</NavLink>
      <NavLink to ='/additem'>Add Item</NavLink>
      <NavLink to ='/travels'>Adventures</NavLink>
      <NavLink to ='/manage-events'>Manage-Events</NavLink>
      <NavLink to ='/login'>Login</NavLink>
     
     
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            
        </div>
    );
};

export default Header;