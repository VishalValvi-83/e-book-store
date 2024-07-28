import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './view/Home/Home';
import Books from './view/All Books/Books';

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
    path: "*",
    element: <h1>404 ERROR</h1>
  },

])

root.render(<RouterProvider router={router} />);