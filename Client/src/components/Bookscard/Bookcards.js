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
      <div className="card shadow-sm" key={id} >
        <img src={image_url} className=" card-img img-fluid card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}  <span className="badge free-badge text-bg-success">{category}</span></h5>
          <p className="card-text author-publication"> <span className='fw-bold'>Author</span> : {author} <br/> <span className='fw-bold'>Published</span> : {publication_year}</p>
          <p className="card-text genre text-muted">Genre : {genre} | {language}</p>
         
          <a href="/" className="btn btn-outline-danger">Borrow</a> 
        </div>
      </div>
    </div>
  )
}

export default Bookcards