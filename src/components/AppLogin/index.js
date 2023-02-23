import React from 'react'

import { useNavigate } from 'react-router'

import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap'

import { useUserAuth } from '../../context/userAuthContext'

import { log } from '../../utils/logger'

const AppLogin = () => {

  const { logOut, user } = useUserAuth()

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    try {
      e.preventDefault()
      navigate("/login")
    } catch (error) {
      log(error.message)
    }
  }

  const handleLogout = async (e) => {
    try {
      e.preventDefault()
      await logOut()
      navigate("/")
    } catch (error) {
      log(error.message)
    }
  }

  log('User - ', user);

  return (
    <>
      {user.loggedIn ?
        <>
          <Button variant="outline-dark" onClick={handleLogout}>Logout</Button>
        </>
        :
        <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip>Click to login</Tooltip>}>
          <Button variant="outline-dark" onClick={handleLogin}>Login</Button>
        </OverlayTrigger>
      }
    </>
  )
}

export default AppLogin