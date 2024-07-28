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

    <div class="card col-lg-3 col-md-4 col-sm-6 m-2" key={id} >
      <img src={image_url} class=" card-img img-fluid card-img-top" alt={title} />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text"> {author} | {publication_year}</p>
        <p class="card-text">{genre} | {language}</p>

        <a href="/" class="btn btn-primary">Borrow</a>
      </div>
    </div>
  )
}

export default Bookcards