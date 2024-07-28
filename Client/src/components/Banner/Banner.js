import React from 'react'
import './Banner.css';
import BannerImg from './Ebook.svg'
function Banner() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 order-1  left d-flex justify-content-center flex-column'>
                    <h1 className='my-3'>Discover Your Next <br /> <span className=' text-danger'>Favorite Read</span></h1>
                    <p className='sub-heading'>Explore our vast collection of eBooks across various genres, from timeless classics to contemporary bestsellers.</p>
                <div className='d-flex'>
                <a href='/' className='btn w-25 btn-danger'>Read</a>
                <a href='/' className='btn w-25 ms-3 btn-danger'>Write</a>
                </div>
                </div>
                <div className='col-md-6 order-sm-1 right'>
                    <img className='banner-img img-fluid' src={BannerImg} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Banner