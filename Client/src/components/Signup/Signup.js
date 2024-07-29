import React from 'react'
import './Signup.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
function Signup() {

    return (
        <>
            <Navbar />
            <div className='container-fluid sigup-form-container'>
                <div className='container-md shadow border rounded signup-form mt-5 py-4'>
                    <h3>Signup</h3>
                    <div className='my-5 mx-3'>
                        <div className='form-group mb-3'>
                            <label for="full_name">Name </label>
                            <input type="text" class="form-control " id="full_name" placeholder="Enter name" />
                        </div>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control " id="floatingInput" placeholder="name@example.com" />
                            <label className='label' for="floatingInput ">Email address</label>
                        </div>
                        <div className='d-flex justify-content-between gap-3'>
                            <div className='form-group mb-3 w-50'>
                                <label for="age">Age</label>
                                <input type="number" class="form-control " id="age" placeholder="Enter age" />
                            </div>
                            <div className='form-group mb-3 w-50'>
                                <label for="number">Mobile</label>
                                <input type="number" class="form-control" id="number" placeholder="Enter Mobile" />
                            </div>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" class="form-control" id="floatingInput" placeholder="Password" />
                            <label className='label' for="floatingInput">Password</label>
                        </div>
                        <button type='button' className='btn btn-warning' >Sign Up</button>
                    </div>
                    <p className='text-center' >Already have an account?<a href='/signup' className='link' data-bs-toggle="modal" data-bs-target="#exampleModal">login</a>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Signup