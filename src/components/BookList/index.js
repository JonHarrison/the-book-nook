import { useState, useEffect } from "react"
import { useFetch } from '../../hooks/useFetch'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBook} from '@fortawesome/free-solid-svg-icons'
import {faHeart} from '@fortawesome/free-regular-svg-icons'
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";


import bookImg from '../../assets/images/book.png'

import './style.css'

const BookList = (props) => {

  return (
    <div className="book-list">
      <Row xs={1} md={4} className="book-list">
          {props.books && props.books.items.map((item, index) => {
            const { id, title, imageLinks, authors, publishedDate, industryIdentifiers, infoLink } = item.volumeInfo;
            const getISBN = (industryIdentifiers) => {
              console.log('industryIdentifiers - ', industryIdentifiers)
              if (industryIdentifiers) {
                console.log("Found identifiers");
                let hasISBN13 = industryIdentifiers.find(id => id.type === "ISBN_13");
                let hasISBN10 = industryIdentifiers.find(id => id.type === "ISBN_10");
                console.log('ISBNs', hasISBN13, hasISBN10);
                if (hasISBN13 && hasISBN13.identifier) { console.log(hasISBN13); return hasISBN13.identifier; }
                else if (hasISBN10 && hasISBN10.identifier) { console.log(hasISBN10); return hasISBN10.identifier; }
                else return "ISBN 0000000000";
              }
              else return null;
            }
            return (
              <Col >
              <Card className="card-book-list">
                <Card.Title>{title}</Card.Title>
                <Card.Img className="card-book-img" variant="top" src={imageLinks !== undefined && imageLinks.thumbnail ? imageLinks.thumbnail : {bookImg}} alt={title} />
                <Card.Body className="card-book-body">
                  <Card.Text>
                    {authors && authors.map((author) => {
                      return (
                        <p><strong>Author: </strong>{author}</p>
                      )
                    })}
                    <p><strong>Published Date: </strong>{publishedDate}</p>
                    <p><strong>ISBN: </strong>{getISBN(industryIdentifiers)}</p>
                  </Card.Text>
                </Card.Body>
                <Button variant="primary" text="white" key={id} href={infoLink} target="_blank" rel="noopener"><FontAwesomeIcon icon={faBook} /></Button>
                <Button variant="primary" text="white" key={id} href={infoLink} target="_blank" rel="noopener"><FontAwesomeIcon icon={faHeart} /></Button>
                <Button variant="primary" text="white" key={id} href={infoLink} target="_blank" rel="noopener"><FontAwesomeIcon icon={faBookOpen} /></Button>
                <div className="card-book-selectors">
                </div>
              </Card>
              </Col>)
          })}

      </Row>
    </div>
  );
}

export default BookList;
