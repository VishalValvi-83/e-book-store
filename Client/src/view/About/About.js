import React from 'react'
import './About.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
function About() {
    return (
        <>
            <Navbar />
            <section class="content-header">
                <div className='container-fluid about-us-heading'>
                    <h1 className='text-dark fw-bold'>ABOUT US</h1>
                </div>
            </section>
            <nav className='container mt-2' aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li class="breadcrumb-item about-active" aria-current="page">Library</li>
                </ol>
            </nav>
            <section class="content-fluid">
                <div class="container-md my-5">
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 '>
                            <div className='row'>
                                <div className='col-lg-6 col-md-6 '>
                                    <img className='img-fluid rounded w-100' src='https://bookland.dexignzone.com/xhtml/images/about/about1.jpg' alt='' />
                                </div>
                                <div className='col-lg-6 col-md-6 '>
                                    <img className='img-fluid rounded w-100' src='https://bookland.dexignzone.com/xhtml/images/about/about2.jpg' alt='' />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 d-flew align-item-center'>
                            <h2 className='text-danger about-heading text-center'>OUR MISSION</h2>
                            <div className='my-0 mx-auto'>
                                <p className='about-text fs-5'>Bookland is a leading e-book company dedicated to providing exceptional customer service, excellent customer satisfaction, and unparalleled book quality.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="content-fluid my-5 about-mission-container">
                <div class="container-md ">
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="mission-card mb-3">
                                <div class="icon-lg mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-book-half" viewBox="0 0 16 16">
                                        <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                                    </svg>
                                </div>
                                <div class="icon-content">
                                    <h4 class="title">Best Bookstore</h4>
                                    <p class="text">Bookland offers the highest quality books at the best prices in the market.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="mission-card mb-3">
                                <div class="mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="80" fill="currentColor" class="bi bi-award" viewBox="0 0 16 16">
                                        <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z" />
                                        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
                                    </svg>
                                </div>
                                <div class="icon-content">
                                    <h4 class="title">Trusted Seller</h4>
                                    <p class="text">We sell the best books from around the world. Our team of experts is committed to providing you with the best possible books.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12">
                            <div class="mission-card mb-3">
                                <div class="mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-shop-window" viewBox="0 0 16 16">
                                        <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5m2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5" />
                                    </svg>
                                </div>
                                <div class="icon-content">
                                    <h4 class="title">Expand Store</h4>
                                    <p class="text">Bookland is growing its store, and we're excited to announce that we're opening a new location in our city.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default About