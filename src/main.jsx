import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './components/login.jsx'
import Dasboard from "./components/dasboard.jsx";
import '../src/assets/css/main.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/success",
    element: <Dasboard/>
  } 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
