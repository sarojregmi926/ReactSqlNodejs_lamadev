import React from 'react'

const Book = (props) => { // {book:{id:1, title: "", description:"", cover: ""}}
    const { book } = props;
    // console.log(book);
    return (
        <div className='book'>
            {book.cover && <img src='{book.cover}' alt='' />}
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <span>{book.price}</span>
        </div>
    )
}

export default Book;

