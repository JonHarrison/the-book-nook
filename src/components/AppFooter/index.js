import React from 'react'

import './style.css'

import { SocialIcon } from 'react-social-icons';

const AppFooter = () => {
  return (
    <footer className="App-footer" id="footer">
      <div className= "row">
      <div className = "col-lg-12 col-md-12 col-sm-12 copyright">&copy; Copyright </div>
      <p><strong>Created by Jon, Ansar, Jade & Iain</strong></p> 
      <p>Contact Us: <SocialIcon url="https://github.com/JonHarrison/the-book-nook.git" /></p>
      </div>
    </footer>
  )
}

export default AppFooter