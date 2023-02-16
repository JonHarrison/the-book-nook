import React from 'react'

import './style.css'

import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <footer className="App-footer" id="footer">
      <div className= "row">
      <div className = "col-lg-12 col-md-12 col-sm-12">&copy; Copyright <strong>Created by Jon, Ansar, Jade & Iain</strong> Contact Us: <SocialIcon url="https://github.com/JonHarrison/the-book-nook.git" /></div>
      </div>
    </footer>
  )
}

export default Footer