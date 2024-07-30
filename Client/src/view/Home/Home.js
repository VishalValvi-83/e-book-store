import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import Bookcards from '../../components/Bookscard/Bookcards'
import Login from '../../components/Login/Login'
import toast from 'react-hot-toast'
import axios from 'axios'

function Home() {
  const [books, setBooks] = useState([])
  const getBook = async () => {
    try {
      toast.loading("Loading Books")

      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/books`)
      setTimeout(() => {
        toast.dismiss()
        toast.success("Books fetched successfully")
        setBooks(response.data.data)
      }, 1000);

    }
    catch (err) {
      console.error(err)
    }
  }
  useEffect(() => {

    getBook();
  }, []);


  return (
    <>
      <Navbar />
      <Login />
      <Banner />
      <div className='container p-3 shadow'>
        <h3 className='my-3'>Recently published</h3>
        <div className='row row-cols-1 row-cols-md-4 g-4'>
          {
            books.slice(0, 4).map((book, i) => (
              <Bookcards key={i} {...book} />
            ))
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home