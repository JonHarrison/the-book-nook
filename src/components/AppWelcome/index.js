import React from 'react'

import { useUserAuth } from '../../context/userAuthContext'

import './style.css'

const AppWelcome = () => {

  const { user } = useUserAuth()

  return (
        <div className="App-welcome">
          {user && user.loggedIn && <p>Welcome, {user.user.displayName} </p>}
        </div>
  )
}

export default AppWelcome