import React, { useState } from 'react'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import Book from '../Book'
// Import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faBookOpen } from "@fortawesome/free-solid-svg-icons"


//Import Framer Motion

import bookImg from '../../assets/images/book.png'

import './style.css'

const BookList = (props) => {

  return (
    <div className="book-list">
      <Row xs={1} md={4} className="book-list">
        {props.books && props.books.items.map((item, index) => {
          return (
            <Col key={index}>
              <Book item={item}/>
            </Col>)
        })}
      </Row>
    </div>
  )

}

export default BookList;
