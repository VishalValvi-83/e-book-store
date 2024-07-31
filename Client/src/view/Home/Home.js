import React, { useEffect, useState } from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import Bookcards from '../../components/Bookscard/Bookcards'
import Login from '../../components/Login/Login'
import toast from 'react-hot-toast'
import axios from 'axios'

function Home() {
  const [books, setBooks] = useState([])
  const [user, setUser] = useState('')
  const getBook = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}books`)
      setTimeout(() => {
        toast.dismiss()
        setBooks(response.data.data)
      }, 1000);

    }
    catch (err) {
      console.error(err)
    }
  }
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    if (currentUser) {
      setUser(currentUser)
      toast.success('Welcome Back'+ currentUser.name)
    }

    if (!currentUser) {
      window.location.href = '/signup'
    }

    getBook();
  }, []);

console.log(user);

  return (
    <>
      <Navbar />
      <Login />
      <Banner />
      <div className='container-fluid mt-4 home-book-cards p-3 '>
        <div className='container .container-bs'>
          <h1 className='p-2 text-center'>Favorite Reads</h1>
          <div className='row row-cols-1 row-cols-md-4 g-3'>
            {
              books.slice(40, 44).map((book, i) => (
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

export default Home