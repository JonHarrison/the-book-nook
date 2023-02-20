import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router'

import { Navbar, Nav, NavLink, Container, OverlayTrigger, Tooltip, Badge, Button } from "react-bootstrap"

import { LinkContainer } from 'react-router-bootstrap'

import { useUserAuth } from '../../context/userAuthContext'

import Logo from "../../assets/logos/BookStoreLogo.png"

import "./style.css"

const AppNavbar = () => {

  const { logOut, user } = useUserAuth()

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    try {
      e.preventDefault()
      navigate("/login")
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleLogout = async (e) => {
    try {
      e.preventDefault()
      await logOut()
      navigate("/")
    } catch (error) {
      console.log(error.message)
    }
  }

  const [isLoggedIn, setLoggedIn] = useState(false);

  console.log('User - ', user);

  useEffect(() => {
    console.log("useEffect for user")
    setLoggedIn(user != null);
  }, [user])

  console.log('User - ', user);

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" stick="top" id="navbar">
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
              {isLoggedIn ?
                <>
                  {user && <p>Welcome {user.displayName} </p>}
                  <Button variant="primary" onClick={handleLogout}>Logout</Button>
                </>
                :
                  <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip>Click to login</Tooltip>}>
                    <Button onClick={handleLogin}>Login</Button>
                  </OverlayTrigger>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
  )
}

export default AppNavbar
