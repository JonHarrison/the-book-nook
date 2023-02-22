import React from 'react'

import { Navbar, Nav, NavLink, Container, OverlayTrigger, Tooltip, Badge, Button } from "react-bootstrap"

import { LinkContainer } from 'react-router-bootstrap'

import AppLogin from '../AppLogin'
import AppWelcome from '../AppWelcome'

import Logo from "../../assets/logos/BookStoreLogo.png"

import "./style.css"

const AppNavbar = () => {

  return (
    <div>
      <Navbar className="App-navbar" expand="lg" sticky="top" id="navbar">
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img className="App-navbar-brand" src={Logo} alt="Brand logo" />
            </Navbar.Brand>
          </LinkContainer>
          <div className="me-auto">
            <AppWelcome />
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="App-navbar-links ms-auto">
              <LinkContainer to="/library">
                <Nav.Link className='App-navbar-txt'>Your Book Nook</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/search">
                <Nav.Link className='App-navbar-txt' >Search</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link className='App-navbar-txt' >Contact us</Nav.Link>
              </LinkContainer>
              <AppLogin />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default AppNavbar