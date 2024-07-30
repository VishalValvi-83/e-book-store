import React, { useEffect, useState } from 'react'
import './Books.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Bookcards from '../../components/Bookscard/Bookcards'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

function Books() {
  const [books, setBooks] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredBooks, setFilteredBooks] = useState([])
  const [visibleBooks, setVisibleBooks] = useState(10)
  const user = localStorage.getItem('currentUser');
  
  const getBook = async () => {
    try {
      toast.loading("Loading Books")

      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/books`)
      setTimeout(() => {
        toast.dismiss()
        toast.success("Books fetched successfully")
        setBooks(response.data.data)
        setFilteredBooks(response.data.data)
      }, 1000);

    }
    catch (err) {
      console.error(err)
    }
  }

  const handleSearch = (e) => {
    const searchTerm = e.target.value
    setSearchTerm(searchTerm)
    const filteredBooks = books.filter((book) => {
      return (book.author && book.author.toLowerCase().includes(searchTerm)) ||
        (book.title && book.title.toLowerCase().includes(searchTerm))
    })
    setFilteredBooks(filteredBooks)
  }

  const loadMore = () => {
    setVisibleBooks(visibleBooks + 10)
  }

  useEffect(() => {

    getBook();
  }, []);
  console.log(searchTerm)
  return (
    <>
      <Navbar />
      <div className="container-fluid mt-4">
        <div className='search-field mt-5 pt-2'>
          <h3 className='text-center mb-3'>Search Books By Category</h3>
          <div className="w-100">
            <ul className="list-inline p-0 gap-4 d-flex flex-wrap justify-content-center search-menu-options">
              <li className="search-menu-opt">
                <select className="form-control form-select form-search-control bg-white border-0" onChange={handleSearch}>
                  <option value="">All</option>
                  <option value="author">Author</option>
                  <option value="title">Title</option>
                </select>
              </li>
              <li className="search-menu-opt">
                <input type="text" className="form-control form-search-control bg-white border-0" onChange={handleSearch} placeholder="Search" />
              </li>
              <li className="search-menu-opt">
              <Link to='/book' className="btn btn-danger">Add New Book</Link>
              </li>
            </ul> 
          </div>
        </div>
        <div className='container p-4 shadow'>
          <div className="books-list row-cols-1 row row-cols-xl-5 row-cols-md-4 g-4">
            {
              filteredBooks.slice(0, visibleBooks).map((book, i) => (
                <Bookcards key={i} {...book} getBook={getBook} />
              ))
            }
          </div>
          <div className='d-flex mt-4 justify-content-center'>
            {visibleBooks < filteredBooks.length && (
              <button className="btn btn-danger" onClick={loadMore}>
                Load More
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Books