import React, { useState } from 'react'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import Book from '../Book'

import './style.css'

const BookList = (props) => {

  return (
    <div className="book-list">
      {props.books && ((props.books.totalItems > 0)
        ?
        (<Row xs={1} md={4} className="book-list">
          {props.books.items.map((item, index) => {
            return (
              <Col key={index}>
                <Book item={item} />
              </Col>)
          })}
        </Row>)
        :
        <div>Whooops, it looks like all the books have been checked out!</div>
      )}
    </div>
  )

}

export default BookList;
