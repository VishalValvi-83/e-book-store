import React from 'react'
import './Books.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import BookList from './../../BookList.json'
import Bookcards from '../../components/Bookscard/Bookcards'

function Books() {
  return (
    <>
      <Navbar />
      <div className="container-fluid mt-4">
        <div className='container p-4 shadow'>
          <h3 className='text-center mb-3'>Search Books By Category</h3>
          <div class="w-100 iq-search-filter">
            <ul class="list-inline p-0 gap-4 d-flex flex-wrap justify-content-center search-menu-options">
              <li class="search-menu-opt">
                <select class="form-control form-select form-search-control bg-white border-0" >
                  <option defaultValue="All">All</option>
                  <option>A Books</option>
                  <option>the Sun</option>
                  <option>Harsh book</option>
                  <option>People book</option>
                  <option>the Fog</option>
                </select>
              </li>
              <li class="search-menu-opt">
                <select class="form-control form-select form-search-control bg-white border-0">
                  <option defaultValue="Genres">Genres</option>
                  <option>General</option>
                  <option>History</option>
                  <option>Horror</option>
                  <option>Fantasy</option>
                  <option>Literary</option>
                  <option>Manga</option>
                </select>
              </li>
              <li class="search-menu-opt">
                <input type='number' class="form-control form-input bg-white border-0" placeholder='Search by year' />
              </li>
              <li class="search-menu-opt">
                <select class="form-control form-select bg-white border-0">
                  <option selected>Author</option>
                  <option>Milesiy Yor</option>
                  <option>Ira Membrit</option>
                  <option>Anna Mull</option>
                  <option>John Smith</option>
                  <option>David King</option>
                  <option>Kusti Franti</option>
                </select>
              </li>
              <span type="submit" class="btn btn-outline-danger btn-search">Search</span>
            </ul>

          </div>
          <div className="books-list row-cols-1 row row-cols-xl-5 row-cols-md-4 g-4">
            {
              BookList.ebooks.map((book, i) => (
                <Bookcards key={i} {...book} />
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