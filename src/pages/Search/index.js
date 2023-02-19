import { useState, useEffect } from "react"
import { useFetch } from '../../hooks/useFetch'

import SearchFilter from '../../components/SearchFilter'
import BookList from '../../components/BookList'

import './style.css'

const Search = (props) => {

    const APIKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;

    const [url, setUrl] = useState()

    const { data: books, isPending, error } = useFetch(url) // the useEffect in the useFetch updates the hook when the url changes

    const updateSearch = e => {
        console.log('updateSearch', e);
        setUrl(`https://www.googleapis.com/books/v1/volumes?q=${e.fullSearch}&key=${APIKey}`)
    }

    console.log('Books : ', books)

    return (
        <div className="App-search">
            <div className="App-search-book-list">
                {isPending && <div>Loading books...</div>}
                {!url && <h1>Start your book search here >>></h1>}
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