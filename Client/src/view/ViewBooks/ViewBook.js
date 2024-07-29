import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ViewBook({ match }) {
  const [book, setBook] = useState({});
  const {id} = useParams()
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}${id}`)
      .then(response => {
        setBook(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className="view-book">
      <h1>{book.title}</h1>
      <img src={book.image_url} alt={book.title} />
      <p>By {book.author}</p>
      <p>{book.description}</p>
      <p>Price: ${book.price}</p>
    </div>
  );
}

export default ViewBook;