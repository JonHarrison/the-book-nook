import { useState, useEffect } from "react"
import { useFetch } from '../../hooks/useFetch'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './style.css'
const SearchArea = () => {
  return (
    <Row xs={1} md={4} className="g-4 book-list">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
          <Card.Title>volumeInfo</Card.Title>
            <Card.Img className="book-img" variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Text>
                <p>Author</p>
                <p>Published Date</p>
                <p>ISBN</p>
              </Card.Text>
            </Card.Body>
            <Button variant="primary">Go somewhere</Button>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default SearchArea;
