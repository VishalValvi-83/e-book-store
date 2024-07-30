import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
function Bookcards({
  _id,
  title,
  image_url,
  author,
  category,
  language,
  price,
  book_image
}) {



  let InvalidImage = image_url ? image_url : book_image;
  if (!InvalidImage || InvalidImage === "") {
    InvalidImage = 'https://thecharulathapublications.com/wp-content/uploads/2022/11/book-placeholder.png';
  }

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
      <div class="card p-1 shadow">
        <div class="  d-flex">
          <div class="col-6 d-flex">
            <Link to={`/books/${_id}`}>
              <img class="img-fluid rounded" src={InvalidImage} alt="" />
            </Link>
          </div>
          <div class="col-6 ps-2">
            <div class="mb-2">
              <h6 class="card-title">{shortenedTitle}</h6>
              <p class="font-size-13 m-0 author-publication lh-1 ">{shortendAuthor}</p>
              <p className="card-text genre">{language}</p>
            </div>
            <div class="price mx-2">
              <h6>₹{price}</h6>
            </div>
            <Link to={`/books/${_id}`} className="btn lh-1 btn-outline-danger">Borrow</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bookcards