import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchAllBooks();
    }, [])

    const fetchAllBooks = async () => {
        try {
            const res = await axios.get("http://localhost:4000/books");
            setBooks(res.data);
            console.log("res", res);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>D Book Shops</h1>
            {/* {books.map((book) => (
                <div className='book' key={book.id}>
                    {book.cover && <img src='{book.cover' alt='' />}
                    <h2>{book.title}</h2>
                    <p>{book.description}</p>
                    <span>{book.price}</span>
                </div>
            ))} */}
            {books.map((book)=>(
                <Book key={"book.id"} book={book}  />
            ))}

        </div>
    )
}

export default Books