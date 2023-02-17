import { Navbar, Nav, NavLink, Container, OverlayTrigger, Tooltip, Badge } from "react-bootstrap";

import { LinkContainer } from 'react-router-bootstrap'

const AppNavbar = () => {
    return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top" id="navbar">
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand>The Book Nook</Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#personal">Personal library</Nav.Link>
            <Nav.Link href="#search">Search??</Nav.Link>
            <Nav.Link href="#contact">Contact us</Nav.Link>
            <NavDropdown title="Log in" id="basic-nav-dropdown">
              <LinkContainer to="/login">
                <NavDropdown.Item >
                  <Badge pill bg="primary">Login</Badge>
                </NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/signup">
                <NavDropdown.Item >Sign up</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default AppNavbar;




