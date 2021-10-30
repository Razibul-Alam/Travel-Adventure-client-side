import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { NavLink,Link } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';

const Header = () => {
  const{user,logOut}=useAuth()
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">TRAVEL ADVENTURE</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link as ={Link} to='/home'>Home</Nav.Link>
      <Nav.Link as ={Link}  to ='/adventures'>Adventures</Nav.Link>
     {user.displayName&& <Nav>
      <Nav.Link as ={Link}  to ='/additem'>Add-Package</Nav.Link>
      <Nav.Link as ={Link}  to ='/manage-bookings'>Manage-Bookings</Nav.Link>
      <Nav.Link as ={Link}  to ='/mybookings'>My-Bookings</Nav.Link></Nav>}
      {user.displayName&&<Nav.Link as ={Link}  to ='/login'>{user.displayName}</Nav.Link>}
     { user.displayName?<Button onClick={logOut} >Logout</Button>:
     <Nav.Link as={Link} to ='/login'>Login</Nav.Link>}
      
      
     
     
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            
        </div>
    );
};

export default Header;