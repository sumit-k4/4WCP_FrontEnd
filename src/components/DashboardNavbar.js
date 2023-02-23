import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
// import { ReactDOM } from 'react';

function DashboardNavbar() {
  return (
    <Navbar fixed='top'  bg="dark" variant="dark" expand="lg">
      <Container className='container-fluid' >
        <Navbar.Brand href="/signup">Astor</Navbar.Brand>
        {/* <Navbar.Brand style={{paddingLeft:"500px"}}>Advisor Dashboard</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  className="justify-content-end" >
          <Nav className="ml-auto">
            <Nav.Link  href="/signup">Sign Out</Nav.Link >
            {/* <Nav.Link href="#link">Link</Nav.Link> */}
            {/* <NavDropdown className="justify-content-end" title="Sign In" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login/advisor"> Client </NavDropdown.Item>
              <NavDropdown.Item href="/login/client">Advisor </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='ml-auto' href="/login/advisor/dashboard">Dashboard</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default DashboardNavbar;