import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../../assets/logos/BookNook.png"

import NavDropdown from 'react-bootstrap/NavDropdown';

import "./style.css"

const AppNavbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg bg-primary">
      <Navbar sticky="top" />
        <Container>
          <Navbar.Brand className='logo' href="/">
            <img src={Logo} alt="Brand logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="links ms-auto">
              
            <NavDropdown title="Options" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Log in</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sign up</NavDropdown.Item>
            </NavDropdown>

              <Nav.Link href="#personal">Personal library</Nav.Link>
              <Nav.Link href="#contact">Contact us</Nav.Link>
              <Nav.Link href="/test">test</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AppNavbar;