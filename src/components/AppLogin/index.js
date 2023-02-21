import React from 'react'

import { useNavigate } from 'react-router'

import { NavLink, OverlayTrigger, Tooltip, Badge, Button } from 'react-bootstrap'

import { LinkContainer } from 'react-router-bootstrap'

import { useUserAuth } from '../../context/userAuthContext'

const AppLogin = () => {

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

  console.log('User - ', user);

  return (
    <>
      {user.loggedIn ?
        <>
          {user.user && <p>Welcome {user.user.displayName} </p>}
          <Button variant="primary" onClick={handleLogout}>Logout</Button>
        </>
        :
        <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip>Click to login</Tooltip>}>
          <Button onClick={handleLogin}>Login</Button>
        </OverlayTrigger>
      }
    </>
  )
}

export default AppLogin