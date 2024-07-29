import React, { useState } from 'react'
import './Login.css'
import toast from 'react-hot-toast'
import axios from 'axios'
function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = async () => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, {
                email: email,
                password: password
            })
            if (response.data.message) {
                toast.success(response.data.message)
                localStorage.setItem('currentUser', JSON.stringify(response.data.data))
                toast.loading("Redireting to Home")
                setTimeout(() => {
                    toast.dismiss()
                    window.location.href = '/'
                }, 2000)
            }
        } catch (err) {
            toast.error("Invalid Credentials")
            console.log("this error occur", err);
        }
    }

    return (
        <div>
            <div class="modal fade text-dark" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Login Now</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className='form-group mb-3 p-2'>
                                <label for="email">Email address</label>
                                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className='form-group p-2'>
                                <label for="password">Password</label>
                                <input type="password" class="form-control" id="password" placeholder="Password" value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <button type="button" class="btn mb-2 my-0 mx-auto btn-warning" onClick={login} >Login</button>
                        <div class="modal-footer ">
                            <p className='my-0 mx-auto'>Don't have an account? <a href="/signup">Signup</a></p>
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login