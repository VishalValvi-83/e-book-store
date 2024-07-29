import React, { useState } from 'react'
import './Signup.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import axios from 'axios'
import toast from 'react-hot-toast'
function Signup() {

    const [user, setUser] = useState({
        name: '',
        email: '',
        age: '',
        mobile: '',
        password: ''
    })

    const signup = async () => {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/signup`, {
            name: user.name,
            email: user.email,
            age: user.age,
            mobile: user.mobile,
            password: user.password
        })
        if (response.data.success) {
            toast.success(response.data.message)
            setUser({
                name: '',
                mobile: '',
                age: '',
                email: '',
                password: ''
            })
            toast.loading("Redirecting to Login")
            setTimeout(() => {
                window.location.href = '/'
            }, 2000)
            localStorage.setItem("Users", JSON.stringify(response.data.data))

        }
        else {
            toast.error(response.data.message)
        }
    }

    return (
        <>
            <Navbar />
            <div className='container-fluid sigup-form-container'>
                <div className='container-md shadow border rounded signup-form mt-5 py-4'>
                    <h3>Signup</h3>
                    <div className='my-5 mx-3'>
                        <div className='form-group mb-3'>
                            <label for="full_name">Name </label>
                            <input type="text" class="form-control " id="full_name" placeholder="Enter name"
                                value={user.name}
                                onChange={(e) => {
                                    setUser({ ...user, name: e.target.value })
                                }} />
                        </div>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control " id="floatingInput" placeholder="name@example.com" value={user.email} onChange={(e) => {
                                setUser({ ...user, email: e.target.value })
                            }} />
                            <label className='label' for="floatingInput ">Email address</label>
                        </div>
                        <div className='d-flex justify-content-between gap-3'>
                            <div className='form-group mb-3 w-50'>
                                <label for="age">Age</label>
                                <input type="number" class="form-control " id="age" placeholder="Enter age" value={user.age} onChange={(e) => {
                                    setUser({ ...user, age: e.target.value })
                                }} />
                            </div>
                            <div className='form-group mb-3 w-50'>
                                <label for="number">Mobile</label>
                                <input type="number" class="form-control" id="number" placeholder="Enter Mobile" value={user.mobile} onChange={(e) => {
                                    setUser({ ...user, mobile: e.target.value })
                                }} />
                            </div>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" class="form-control" id="floatingInput" placeholder="Password" value={user.password} onChange={(e) => {
                                setUser({ ...user, password: e.target.value })
                            }} />
                            <label className='label' for="floatingInput">Password</label>
                        </div>
                        <button type='button' className='btn btn-warning' onClick={signup}>Sign Up</button>
                    </div>
                    <p className='text-center' >Already have an account?<a href='/login' className='link' data-bs-toggle="modal" data-bs-target="#exampleModal">login</a>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Signup