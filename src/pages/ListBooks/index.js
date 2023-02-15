import { useState } from "react"
import { useFetch } from '../../hooks/useFetch'

import './style.css'

export default function ListBooks() {
    const [url, setUrl] = useState('https://gutendex.com/books/')
    const { data: books, isPending, error } = useFetch(url)

    console.log(books)

    return (
        <div>
            <h2>Book List</h2>
            {isPending && <div>Loading books...</div>}
            {error && <div>{error}</div>}
            <div className="book-page-nav">
                <button class="btn" onClick={() => setUrl(books.previous)}>Previous</button>
                <button class="btn" onClick={() => setUrl(books.next)}>Next</button>
            </div>
            <p>Count : {books && books.count}</p>
            <div className="book-list">
                {books && books.results.map(book => (
                    <div className="book" key={book.id}>
                        <h3 className="book-title">{book.title}</h3>
                        <img className="book-img" src={book.formats['image/jpeg']} alt={book.title}></img>
                    </div>
                ))}
            </div>
        </div>
    )
}
