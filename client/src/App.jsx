import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Pages/home"
import BlogPost from "./Pages/Blogpost"
import Admin from "./Pages/Adminpage"
import Aboutme from "./Pages/About"
import BlogDetails from "./Pages/Blogdetails"
import Login from "./components/LoginSignup"

function App() {
  
  return (
    <div>
      
      <Router>
        <Routes>
          
          <Route path = "/" element={<Home/>} />
          <Route path="/about" element={<Aboutme/>} />
          <Route path= "/blogs" element={<BlogPost/>} />
          <Route path="/blogs/:id" element={<BlogDetails/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/admin" element={<Admin/>} />
        </Routes>
      </Router>
      </div>
      
  )
}

export default App
