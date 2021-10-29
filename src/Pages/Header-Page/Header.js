import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';

const Header = () => {
  const{user,logOut}=useAuth()
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
      <NavLink to ='/manage-bookings'>Manage-Events</NavLink>
      <NavLink to ='/mybookings'>My-Bookings</NavLink>
      {user.displayName&&<NavLink to ='/login'>{user.displayName}</NavLink>}
     { user.displayName?<Button onClick={logOut} >Logout</Button>:
     <NavLink to ='/login'>Login</NavLink>}
      
      
     
     
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            
        </div>
    );
};

export default Header;