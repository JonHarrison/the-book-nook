import React, { useState, useEffect } from 'react'
import { doc, setDoc, collection, getDoc, getDocs, getCountFromServer, query, documentId, where } from 'firebase/firestore'
import { db, getUserLibrary, getBookCollection } from '../../utils/firestore'
import { useUserAuth } from "../../context/userAuthContext"

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

// Import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faBookOpen } from "@fortawesome/free-solid-svg-icons"
import { faCheck as faTick } from '@fortawesome/free-solid-svg-icons'
import { faXmark as faCross } from '@fortawesome/free-solid-svg-icons'

import bookImg from '../../assets/images/book.png'

import './style.css'

const Book = ({item}) => {

    console.log('[Book] item - ', item )

    const { id, volumeInfo: { title, imageLinks, authors, publishedDate, industryIdentifiers, infoLink } } = item;

    const [ inLibrary, setinLibrary ] = useState()
    const [ inWishList, setinWishList ] = useState()
    const [ hasRead, sethasRead ] = useState()

    const { user } = useUserAuth()
    const { user : { uid } } = user;

    const checkBook = async () => {
        console.log('[Book] uid - ', uid)
        const booksRef = collection(db, 'library', uid, 'books')
        // const booksRef = doc(db, 'library', uid, 'books')
        const q = query(booksRef, where(documentId(), '==', id))
        const snapshot = await getCountFromServer(q)
        const count = snapshot.data().count
        console.log('[Book] count - ', count)
        if (count > 0) {
            setinLibrary(true)
        } else {
            setinLibrary(false)
        }
    }

    useEffect(() => {
        checkBook();
    }, [])

    const addBook = async (item) => {
        try {
            console.log('[Book] addBook - ', item, uid, id)
            await setDoc(doc(db, 'library', uid, 'books', id), {
                id,
                item
            })
            setinLibrary(true)
        } catch (err) {
            console.error('Error adding book - ', err)
        }
    }

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
        <Card className="card-book-list">
            <Card.Title>{title}</Card.Title>
            <Card.Img className="card-book-img" variant="top" src={imageLinks !== undefined && imageLinks.thumbnail ? imageLinks.thumbnail : { bookImg }} alt={title} />
            <Card.Body className="card-book-body">
                <Card.Text>
                    {authors && (authors.length > 1 ? (<p><strong>Authors: </strong>{authors.join(', ')}</p>) : (<p><strong>Author: </strong>{authors.join()}</p>))}
                    <p><strong>Published Date: </strong>{publishedDate}</p>
                    <p><strong>ISBN: </strong>{getISBN(industryIdentifiers)}</p>
                </Card.Text>
            </Card.Body>
            <div className="card-book-selectors">
                <div onClick={() => addBook(item)}>
                    <FontAwesomeIcon icon={faBook} />
                    {inLibrary !== undefined && (<FontAwesomeIcon icon={inLibrary ? faTick : faCross} />)}
                </div>
                <Button key='want'><FontAwesomeIcon icon={faHeart} /></Button>
                <Button key='read'><FontAwesomeIcon icon={faBookOpen} /></Button>
            </div>
            <Button variant="primary" text="white" key={id} href={infoLink} target="_blank" rel="noopener">More information</Button>
        </Card>
    )

}

export default Book
