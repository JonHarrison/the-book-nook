import { useState, useEffect } from "react"
import { useFetch } from '../../hooks/useFetch'

import './style.css'

export default function ListBooks() {

    const [searchResults, setSearchResults] = useState(32);
    const [searchIndex, setSearchIndex] = useState(0);

    function generateURL() { return ( `https://www.googleapis.com/books/v1/volumes?q=all&maxResults=${searchResults}&startIndex=${searchIndex}` ); }

    const [url, setUrl] = useState(generateURL())
    const { data: books, isPending, error } = useFetch(generateURL())

    useEffect(() => {
            console.log(`calling setURL with searchIndex=${searchIndex}`)
            setUrl(generateURL())
    }, [searchIndex]) // useEffect updates when searchIndex is changed

    console.log(books)

    const prev = () => {
        console.log(`prev searchIndex=${searchIndex} searchResults=${searchResults}`)
        if (searchIndex >= searchResults)
        {
            let newIndex = searchIndex - searchResults;
            setSearchIndex(newIndex);
        }
    }

    const next = (total) => {
        console.log(`next total=${total} searchIndex=${searchIndex} searchResults=${searchResults}`)
        if (searchIndex <= total-searchResults)
        {
            let newIndex = searchIndex + searchResults;
            setSearchIndex(newIndex)
        }
    }

    return (
        <div>
            <h2>Book List</h2>
            {isPending && <div>Loading books...</div>}
            {error && <div>{error}</div>}
            <div className="book-page-nav">
                <button className="btn" onClick={() => prev()}>Previous</button>
                <button className="btn" onClick={() => next(books.totalItems)}>Next</button>
            </div>
            <p>Count : {books && books.totalItems}</p>
            <div className="book-list">
                {books && books.items.map(book => (
                    <div className="book" key={book.id}>
                        <h3 className="book-title">{book.volumeInfo.title}</h3>
                        <img className="book-img" src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}></img>
                    </div>
                ))}
            </div>
        </div>
    )
}
