import React from 'react'

import { SocialIcon } from 'react-social-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

import './style.css'

const AppFooter = () => {
  return (
    <footer className="App-footer" id="footer" sticky="bottom">
      <div>&copy; Copyright<strong>Created by Jon, Ansar, Jade & Iain.</strong></div>
      <div><SocialIcon url="https://github.com/JonHarrison/the-book-nook.git" style={{ height: 32, width: 32 }} /></div>
      <div><a href="" className="iconLinks"><FontAwesomeIcon icon={faLinkedin} className="fa-2x "/></a></div>
      <div><a href="" className="iconLinks"><FontAwesomeIcon icon={faFacebook} className="fa-2x "/></a></div>
    </footer>
  )
}

export default AppFooter
