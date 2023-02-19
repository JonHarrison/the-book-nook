import { useState, useEffect } from "react"
import { useFetch } from '../../hooks/useFetch'

import { Spinner } from 'react-bootstrap'

import SearchFilter from '../../components/SearchFilter'
import BookList from '../../components/BookList'

import './style.css'

const Search = (props) => {

    const APIKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;

    const [url, setUrl] = useState()

    const { data: books, isPending, error } = useFetch(url) // the useEffect in the useFetch updates the hook when the url changes

    const updateSearch = e => {
        console.log('updateSearch', e);
        setUrl(`https://www.googleapis.com/books/v1/volumes?q=${e.fullSearch}&maxResults=40&key=${APIKey}`)
    }

    console.log('Books : ', books)

    return (
        <div className="App-search">
            <div className="App-search-book-list">
                {!url && <h1>Your favourite books or something different, search the library to add to your book nook! </h1>}
                {isPending && <div><Spinner animation="border" role="status" size="lg"></Spinner><span> Loading books...</span></div>}
                {error && <div>{error}</div>}
                <BookList books={books} />
            </div>
            <div className="App-search-filter">
                <SearchFilter updateSearch={updateSearch} />
            </div>
        </div>
    )
}

export default Search