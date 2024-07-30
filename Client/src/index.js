import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './view/Home/Home';
import Books from './view/All Books/Books';
import Signup from './components/Signup/Signup';
import { Toaster } from 'react-hot-toast';
import ViewBook from './view/ViewBook/ViewBook';
import Login from './components/Login/Login';
import About from './view/About/About';
import Addbook from './components/Add Book/Addbook';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/books",
    element: <Books />
  },
  {
    path: "/add/book",
    element: <Addbook />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/books/:id",
    element: <ViewBook />
  },
  {
    path: "*",
    element: <h1>404 ERROR</h1>
  },

])

root.render(
  <>
<RouterProvider router={router} />
<Toaster/>
</>

);