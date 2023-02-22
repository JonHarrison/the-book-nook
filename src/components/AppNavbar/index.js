import React from 'react'

import { Navbar, Nav, NavLink, Container, OverlayTrigger, Tooltip, Badge, Button } from "react-bootstrap"

import { LinkContainer } from 'react-router-bootstrap'

import AppLogin from '../AppLogin'

import Logo from "../../assets/logos/BookStoreLogo.png"

import "./style.css"

const AppNavbar = () => {

  return (
    <div>
      <Navbar  className="App-navbar" expand="lg" sticky="top" id="navbar">
      <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img className="App-navbar-brand" src={Logo} alt="Brand logo" />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="App-navbar-links ms-auto">
              <Nav.Link className='txt' href="Library">Your Book Nook</Nav.Link>
              <Nav.Link className='txt' href="Search">Search</Nav.Link>
              <Nav.Link className='txt' href="Contact">Contact us</Nav.Link>
              <AppLogin />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default AppNavbar