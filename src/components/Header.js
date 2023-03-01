import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
// import { ReactDOM } from 'react';

function Header() {
  return (
    <Navbar fixed='top'  bg="dark" variant="dark" expand="lg">
      <Container className='container-fluid' >
        <Navbar.Brand href="/signup">Astor</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav" >
          <Nav className="ms-auto">
            <Nav.Link  href="/signup">Sign Up</Nav.Link >
            {/* <Nav.Link href="#link">Link</Nav.Link> */}
            <NavDropdown className="justify-content-end" title="Sign In" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login/advisor"> Advisor </NavDropdown.Item>
              <NavDropdown.Item href="/login/client">Client </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='ml-auto' href="/login/advisor/dashboard">Dashboard</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;