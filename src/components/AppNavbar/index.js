import { Navbar, Nav, NavLink, Container, OverlayTrigger, Tooltip, Badge } from "react-bootstrap"

import { LinkContainer } from 'react-router-bootstrap'

import Logo from "../../assets/logos/BookStoreLogo.png"

import "./style.css"

const AppNavbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" id="navbar">
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img className="App-navbar-brand" src={Logo} alt="Brand logo" />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="App-navbar-links ms-auto">
              <Nav.Link href="Library">Your Book Nook</Nav.Link>
              <Nav.Link href="#contact">Contact us</Nav.Link>
              <LinkContainer to="/login">
                <NavLink>
                  <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip>Click to login</Tooltip>}>
                    <Badge pill bg="light" text="dark">Login</Badge>
                  </OverlayTrigger>
                </NavLink>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default AppNavbar
