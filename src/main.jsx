import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/assets/css/main.css'
import { Routes, Route, BrowserRouter} from "react-router-dom";
import Login from "./components/login.jsx"
import Dasboard from './components/dasboard.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dasboard/>}></Route>
        <Route path="/" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
