import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'; // or your preferred HTTP client
import toast from 'react-hot-toast';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './ViewBook.css'
import Bookcards from '../../components/Bookscard/Bookcards';

function ViewBook() {
    const { id } = useParams();
    const [book, setBook] = useState({});
    const [similarBooks, setSimilarBooks] = useState([]);

    useEffect(() => {
        const bData = async () => {
            await axios.get(`${process.env.REACT_APP_BACKEND_URL}/books`)

                .then(response => {
                    const book = response.data.data.find(b => b._id === id);
                    const similarBooks = response.data.data.filter(b => b.category === book.category);
                    toast.loading("Loading...")
                    setTimeout(() => {
                        toast.dismiss();
                        toast.success("Book loaded ")
                        setBook(book);
                        setSimilarBooks(similarBooks);
                    }, 1000);
                })
                .catch(error => {
                    console.error(error);
                });
        }
        bData();
    }, [id]);

    return (
        <>
            <Navbar />
            <div className='container-fluid view-book-container'>
                <div className='container book-detail-container shadow'>
                    <h4 className='book-detail-heading'>Book Details</h4>
                    <hr />
                    <div className='row p-4'>
                        <div className='col-4 col-md-4 d-flex justify-content-center align-item-center'>
                            <img src={book.image_url ? book.image_url : book.book_image} alt={book.title} className='img-fluid book-detail-image rounded' />
                        </div>
                        <div className='col-lg-8 col-md-8'>
                            <h2>{book.title}</h2>
                            <small>{book.language}</small>
                            <p><span><small>{book.contributor}</small></span></p>
                            <p className='description'>{book.description}</p>

                            <div className='footer-container py-4'>

                                <small> <span className='author-name'>Author</span> : {book.author}</small>
                                <p className='text-warning'>{book.category}</p>

                                <h5 className='price'>Price: ₹{book.price}</h5>
                                <a href="/" className="btn mt-3 btn-outline-danger">Borrow</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container position-relative mt-5 p-4 shadow'>
                <h4 className='book-detail-heading'>Similar Books</h4>
                <Link to="/books" className="btn btn-outline-danger  view-more-btn">View More</Link>
                <hr/>
                <div className='row books-list'>
                    {
                        similarBooks.slice(0, 4).map((book, i) => (
                            <Bookcards key={i} {...book} />
                        ))
                    }
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ViewBook;