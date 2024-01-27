import React, { useEffect,useState } from 'react';
import axios from 'axios';

function YourComponent() {
    const [books,setBooks] = useState([])
    useEffect(() => {
        axios.get("https://reactnd-books-api.udacity.com/books",{
            headers: {
                'Authorization': 'whatever-you-want'
            }
        })
            .then(response => {
                console.log(response.data.books);
                setBooks(response.data.books)
            })
            .catch(error => {
                if (error.response) {
                    console.error(`Status code: ${error.response.status}`);
                    console.error(error.response.data);
                } else if (error.request) {
                    console.error('No response received from the server');
                } else {
                    console.error('Error setting up the request:', error.message);
                }
            });
    }, []);

    return (
        <div>
            {books.map((book, index) => (
                <div className="books" key={index}>
                    <div className="title">
                   <h3 >{book.title} </h3>
                   </div>
                   <div className="imgNdetails">
                    <img  src={book.imageLinks.smallThumbnail} />
                    <p >{book.description}</p>
                   </div>
                   <div className="authorName">
                    <h5 >{book.authors}</h5>
                   </div>
                </div>
                ))}
        </div>
    );
}

export default YourComponent;
