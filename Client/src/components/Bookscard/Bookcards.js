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
  price
}) {

  // if price null then random generate 2 digit value


  let InvalidImage = image_url ? image_url : "https://img.freepik.com/free-vector/red-text-book-closed-icon_18591-82397.jpg?size=626&ext=jpg&ga=GA1.1.1437855638.1705562597&semt=ais_hybrid";

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
          <div class="col-6 p-1">
            <div class="mb-2">
              <h6 class="card-title">{shortenedTitle}</h6>
              <p class="font-size-13 m-0 author-publication lh-1 ">{shortendAuthor}</p>
              <p className="card-text genre">{language}</p>
            </div>
            <div class="price">
              <h6>{price}</h6>
            </div>
            <Link to="/" className="btn lh-1 btn-outline-danger">Borrow</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bookcards