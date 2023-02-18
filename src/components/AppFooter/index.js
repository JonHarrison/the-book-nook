import React from 'react'

import { SocialIcon } from 'react-social-icons';

import './style.css'

const AppFooter = () => {
  return (
    <footer className="App-footer" id="footer" sticky="bottom">
      <div>&copy; Copyright<strong>Created by Jon, Ansar, Jade & Iain</strong></div>
      <div>Contact Us:<SocialIcon url="https://github.com/JonHarrison/the-book-nook.git" style={{ height: 32, width: 32 }} /></div>
    </footer>
  )
}

export default AppFooter