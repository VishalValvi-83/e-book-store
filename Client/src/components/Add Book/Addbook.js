import React, { useState } from 'react'
import './Addbook.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
function Addbook() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publisher, setPublisher] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [image_url, setImageUrl] = useState('');
    const [language, setLanguage] = useState('');
    const [description, setDescription] = useState('');

    const addBooks = async () => {
        const newBook = {
            title:title,
            author:author,
            publisher:publisher,
            category:category,
            price:price,
            image_url:image_url,
            language:language,
            description:description,
        };

        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/book`, newBook);
            setTitle('');
            setAuthor('');
            setPublisher('');
            setCategory('');
            setPrice(0);
            setImageUrl('');
            setLanguage('');
            setDescription('');
            toast.success(response.data.message);
        } catch (error) {
            toast.error('Error adding book: ' + error.message);
        }
    };
    return (
        <>
            <Navbar />
            <div className='container-md add-form-container shadow'>
                <div class="mb-3">
                    <label for="title" class="form-label">Book Title</label>
                    <input type="text" class="form-control" id="title" value={title} onChange={(event) => setTitle(event.target.value)} />
                </div>
                <div className='row mb-3'>
                    <div className='col-lg-6 col-md-6 mb-2'>
                        <label for="author" class="form-label">Author</label>
                        <input type="text" class="form-control" id="author" value={author} onChange={(event) => setAuthor(event.target.value)} />
                    </div>
                    <div className='col-lg-6 col-md-6 mb-2'>
                        <label for="publisher" class="form-label">Publisher</label>
                        <input type="text" class="form-control" id="publisher" value={publisher} onChange={(event) => setPublisher(event.target.value)} />
                    </div>
                    <div className='col-lg-6 col-md-6 mb-2'>
                        <label for="Categoryr" class="form-label">Category</label>
                        <input type="text" class="form-control" id="Categoryr" value={category} onChange={(event) => setCategory(event.target.value)} />
                    </div>
                    <div class="col-lg-6 col-md-6 mb-2">
                        <label for="Price" class="form-label">Book Price</label>
                        <input type="number" class="form-control" id="Price" value={price} onChange={(event) => setPrice(event.target.value)} />
                    </div>
                </div>
                <div class="mb-3">
                    <label for="Language" class="form-label">Book Language</label>
                    <input type="text" class="form-control" id="Language"
                        value={language}
                        onChange={(event) => setLanguage(event.target.value)}
                    />
                </div>
                <div class="mb-3">
                    <label for="ImageURL" class="form-label">Book ImageURL:</label>
                    <input type="text" class="form-control" id="ImageURL" value={image_url} onChange={(event) => setImageUrl(event.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="Description" class="form-label">Book Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1"
                        rows="3"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    ></textarea>
                </div>
                <button type="submit" className='btn btn-danger' onClick={addBooks}>Add Book</button>
                <Link type="button"  to='/books' className='btn btn-danger ms-3'>Visit All Books</Link>
            </div >
            <Footer />
        </>
    )
}

export default Addbook