import React, { useEffect, useState } from 'react'
import './Books.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Bookcards from '../../components/Bookscard/Bookcards'
import axios from 'axios'
import toast from 'react-hot-toast'

function Books() {
  const [books, setBooks] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredBooks, setFilteredBooks] = useState([])
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
  useEffect(() => {

    getBook();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-fluid mt-4">
        <div className='container p-4 shadow'>
          <h3 className='text-center mb-3'>Search Books By Category</h3>
          <div class="w-100 iq-search-filter">
            <ul class="list-inline p-0 gap-4 d-flex flex-wrap justify-content-center search-menu-options">
              <li class="search-menu-opt">
                <select class="form-control form-select form-search-control bg-white border-0" onChange={handleSearch}>
                  <option value="">All</option>
                  <option value="author">Author</option>
                  <option value="title">Title</option>
                </select>
              </li>
              <li class="search-menu-opt">
                <input type="text" class="form-control form-search-control bg-white border-0" onChange={handleSearch} placeholder="Search" />
              </li>
              <span type="submit" class="btn btn-outline-danger btn-search">Search</span>
            </ul>

          </div>
          <div className="books-list row-cols-1 row row-cols-xl-5 row-cols-md-4 g-4">
            {
              filteredBooks.map((book, i) => (
                <Bookcards key={i} {...book} getBook={getBook} />
              ))
            }
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Books