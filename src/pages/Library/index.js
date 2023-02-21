import React from 'react'

import 'holderjs';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Carousel from 'react-bootstrap/Carousel';

import './style.css'

function CarouselFade() {
  return (
    <div>
      <div style="overflow-y:auto;">
      <h1>Your Book Nook</h1>
      <p className="firstLibraryText">Want to know what books your already own at home? Or find the books you want to add to your collection?<br/>
        Your Book Nook easily allows you to view the books you have; those you desire and those that you have read.</p>
      <div className="libraryCard">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
      </div>
      <h2>Recommendations</h2>
      <div className="libraryCarousel">
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  );
}

export default CarouselFade;