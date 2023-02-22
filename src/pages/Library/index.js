import React, { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../utils/firestore'
import { useUserAuth } from "../../context/userAuthContext"
import 'holderjs'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Book from '../../components/Book'

import './style.css'

const Library = () => {

  const [books, setBooks] = useState()

  const { user } = useUserAuth()
  const { user: { uid } } = user;

  const fetchBooks = async () => {
    console.log('[Library] fetchBooks')
    const collectionRef = collection(db, 'library', uid, 'books')

    const booksSnapshot = await getDocs(collectionRef)
    let items = [];
    if (booksSnapshot.docs.length > 0) {
      booksSnapshot.forEach((doc) => {
        console.log('[Library] booksRef - doc ', doc.id, doc.data())
        items.push(doc.data().item)
      })
    }

    setBooks({ items: items });
    console.log('[Library] books - ', books)
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  console.log('[Library] books - ', books)

  return (
    <div className="App-library">
      <div >
        <h1>Your Book Nook</h1>
        <p className="firstLibraryText">Want to know what books your already own at home? Or find the books you want to add to your collection?<br />
          Your Book Nook easily allows you to view the books you have; those you desire and those that you have read.</p>
        <div className="App-library-book-list">
          <Row xs={1} md={4} className="g-0">
            {books && books.items.map((item, index) => {
              return (
                <Col key={index}>
                  <Book item={item} libraryDisplay={true} />
                </Col>
              )
            })}
          </Row>
  </div>
    </div>
    </div>
  );
}

export default Library;