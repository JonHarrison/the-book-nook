import React from 'react'

import { Navbar, Nav, NavLink, Container, OverlayTrigger, Tooltip, Badge, Button } from "react-bootstrap"

import { LinkContainer } from 'react-router-bootstrap'

import AppLogin from '../AppLogin'

import Logo from "../../assets/logos/BookStoreLogo.png"

import "./style.css"

const AppNavbar = () => {

  return (
    <div>
      <Navbar className="App-navbar" bg="dark" variant="dark" expand="lg" stick="top" id="navbar">
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
              <Nav.Link href="Search">Search</Nav.Link>
              <Nav.Link href="Contact">Contact us</Nav.Link>
              <AppLogin />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default AppNavbar
