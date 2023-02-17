import { useState, useEffect } from "react"
import { useFetch } from '../../hooks/useFetch'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './style.css'

const SearchArea = () => {

  // just use an example query URL for now
  function generateURL() { return ('https://www.googleapis.com/books/v1/volumes?q=all&maxResults=32&startIndex=0'); }

  const [url, setUrl] = useState(generateURL())
  const { data: books, isPending, error } = useFetch(generateURL())

  useEffect(() => {
    setUrl(generateURL())
  }, [])

  console.log('Books : ', books)

  return (
    <div className="searchArea">
      {isPending && <div>Loading books...</div>}
      {error && <div>{error}</div>}
          {books && books.items.map((item) => {
            const { title, imageLinks, authors, publishedDate, industryIdentifiers } = item.volumeInfo;
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
              <div className="container">
                <div class="row" >
                  <div class="App-searchArea col-lg-12 col-md-12 col-sm-12">
                    <Card style={{ width: '18rem' }}>
                      <Card.Title>{title}</Card.Title>
                      <Card.Img className="book-img" variant="top" src={imageLinks && imageLinks.thumbnail} alt={title} />
                      <Card.Body>

                        <Card.Text>
                          {authors && authors.map((author) => {
                            return (
                              <p>{author}</p>
                            )
                          })}
                          <p>{publishedDate}</p>
                          {getISBN(industryIdentifiers)}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>
          );
                        }
            )
  }
  </div>
  )};

export default SearchArea;
