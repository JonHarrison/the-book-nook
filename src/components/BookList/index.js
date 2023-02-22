import React, { useState } from 'react'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import Book from '../Book'

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
