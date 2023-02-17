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
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#personal">Personal library</Nav.Link>
              <Nav.Link href="#search">Search??</Nav.Link>
              <Nav.Link href="#contact">Contact us</Nav.Link>
              <LinkContainer to="/login">
                <NavLink>
                  <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip>Click to login</Tooltip>}>
                    <Badge pill bg="light" text="dark">Login</Badge>
                  </OverlayTrigger>
                </NavLink>
              </LinkContainer>
            </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default AppNavbar;
