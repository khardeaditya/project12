import React from 'react';
import ReactDOM from 'react-dom/client';
import About from "./views/About/about";
import Home from "./views/Home/home";

import Foot from "./component/footers/footer";
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Contact from './views/contact/contact';
import "./index.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
const cpath=window.location.pathname;

const router=createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
  {
    path:'/about',
    element: <About/>
  },
  {
    path:'/contact',
    element: <Contact/>
  }
])

root.render(<RouterProvider router={router}/>)


