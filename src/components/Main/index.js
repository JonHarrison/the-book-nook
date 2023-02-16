import React from 'react'
import logo from '../../assets/logo.png'

import './style.css'

const Main = () => {

  return (
    <div className="container">
      <div className="row">
        <div className="mx-auto my-5 col-lg-2 col-md-4 col-xs-12" >
          <img class="img-fluid rounded " src={logo} />
        </div>        
        <div className="mx-auto col" >
        <div className='headers'>
          <h1>The Book Nook</h1>
          <h2> the book galary </h2>
          </div>
          </div>
      </div>
    </div>
  );}


export default Main