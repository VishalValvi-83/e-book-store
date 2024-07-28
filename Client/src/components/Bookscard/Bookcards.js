import React from 'react'
import './style.css'
function Bookcards({
  id,
  title,
  image_url,
  author,
  publication_year,
  genre,
  language,
}) {
  return (
    <div className="col">
      <div class="card" key={id} >
        <img src={image_url} class=" card-img img-fluid card-img-top" alt={title} />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text"> {author} | {publication_year}</p>
          <p class="card-text">{genre} | {language}</p>
          <a href="/" class="btn btn-primary">Borrow</a>
        </div>
      </div>
    </div>
  )
}

export default Bookcards