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

  // if price null then random generate 2 digit value

  let newPrice = price || Math.floor(Math.random() * 99) + 10;

  let InvalidImage = image_url ? image_url : "https://www.kindpng.com/picc/m/725-7251301_book-cover-placeholder-hd-png-download.png";
  console.log(newPrice)
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
          <div class="col-6 p-0">
            <Link to={`/books/${_id}`}>
              <img class="img-fluid rounded" src={InvalidImage} alt="" />
            </Link>
          </div>
          <div class="col-6 p-1">
            <div class="mb-2">
              <h6 class="card-title">{shortenedTitle}</h6>
              <p class="font-size-13 m-0 author-publication lh-1 ">{shortendAuthor}</p>
              <p className="card-text genre">{language}</p>
            </div>
            <div class="price">
              <h6>{newPrice}</h6>
            </div>
            <Link to="/" className="btn lh-1 btn-outline-danger">Borrow</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bookcards