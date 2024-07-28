import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import Bookcards from '../../components/Bookscard/Bookcards'
import BookList from './../../BookList.json'

function Home() {
  // Fetch data from the API or local JSON file and map it to Bookcards component.
  // Use useEffect hook to fetch data when the component mounts.
  const freeBooks = BookList.ebooks.filter((data)=> data.category === "free")
  return (
    <>
      <Navbar />
      <Banner />
      <div className='container'>
      <h1>Books Available at free</h1>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        {
          freeBooks.map((book, i) => {
            const {
              id,
              title,
              image_url,
              author,
              publication_year,
              genre,
              language,
              category,
              publisher,
              description
            } = book
            return (<Bookcards
              key={i}
              id={id}
              title={title}
              image_url={image_url}
              author={author}
              publication_year={publication_year}
              genre={genre}
              language={language}
              category={category}
              publisher={publisher}
              description={description}
            />
            )
          })
        }
      </div></div>
      <Footer />
    </>
  )
}

export default Home