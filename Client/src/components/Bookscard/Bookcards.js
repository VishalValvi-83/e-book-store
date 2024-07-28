import React from 'react'
import './style.css'
function Bookcards({
  id,
  title,
  image_url,
  author,
  publication_year,
  genre,
  category,
  language,
}) {
  return (
    <div className="col" >
      <div className="card" key={id} >
        <img src={image_url} className=" card-img img-fluid card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}  <span className="badge text-bg-success">{category}</span></h5>
          <p className="card-text author-publication"> Author : {author} | Published : {publication_year}</p>
          <p className="card-text genre text-muted">Genre : {genre} | {language}</p>
         
          <a href="/" className="btn btn-primary">Borrow</a> 
        </div>
      </div>
    </div>
  )
}

export default Bookcards