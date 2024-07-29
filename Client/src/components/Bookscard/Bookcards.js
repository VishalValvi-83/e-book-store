import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
function Bookcards({
  _id,
  title,
  image_url,
  author,
  publication_year,
  genre,
  category,
  language,
  price
}) {
  let shortenedTitle = title;
  let shortendAuthor = author;

  if (title && title.length > 20) {
    shortenedTitle = title.substr(0, 20) + "...";
  }

  if (author && author.length > 15) {
    shortendAuthor = author.substr(0, 15) + "...";
  }
  return (
    <div className="col" >
      {/* <div className={`card shadow-sm`} key={id}  >
        <div className='img-container'>
          <img src={image_url} className=" card-img img-fluid card-img-top" alt={title} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}  <span className="badge free-badge text-bg-success">{category}</span></h5>
          <p className="card-text author-publication"> <span className='fw-bold'>Author</span> : {author} <br /> <span className='fw-bold'>Published</span> : {publication_year}</p>
          <p className="card-text genre">Genre : {genre} | {language}</p>
          <a href="/" className="btn btn-outline-danger">Borrow</a>
        </div>
      </div> */}
      <div class="card p-1 shadow">
        <div class="  d-flex">
          <div class="col-6 p-0">
            <Link to={`/books/view-book/${_id}`}>
              <img class="img-fluid rounded" src={image_url} alt="" />
            </Link>
          </div>
          <div class="col-6 p-1">
            <div class="mb-2">
              <h6 class="card-title">{shortenedTitle}</h6>
              <p class="font-size-13 m-0 author-publication lh-1 ">{shortendAuthor}</p>
              <p className="card-text genre">{language}</p>
            </div>
            <div class="price">
              <h6>{price}</h6>
            </div>
            <a href="/" className="btn lh-1 btn-outline-danger">Borrow</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bookcards