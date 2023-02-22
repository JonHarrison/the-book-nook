import React, { useState, useEffect } from 'react'

import { Button, Form, FormGroup, FormControl, InputGroup, Accordion } from 'react-bootstrap'

import './style.css';

const SearchFilter = ({ updateSearch }) => {

    const [formData, setFormData] = useState({
        fullSearch: ''
    });

    const handleChange = e => {
        const { name, value = e.target.type === 'checkbox' ? e.target.checked : e.target.value } = e.target;
        console.log('handleChange - ', name, value);
        setFormData({[name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        updateSearch(formData);
    }

    return (
        <div className="App-search-filter">
            <h2>Search</h2>
            <hr />
            <div className="container">
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="fullSearch">
                        <Form.Label>Full search</Form.Label>
                        <Form.Control type="text" placeholder="Search for a book" name="fullSearch" onChange={handleChange} />
                    </Form.Group>
                    <hr />
                    <Button variant="primary" type="submit" onSubmit={handleSubmit} >
                        Search
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default SearchFilter