import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Pages/home"
import BlogPost from "./Pages/Blogpost"
import CretePost from "./Pages/CreatePost"
import Navbar from "./components/Navbar"

function App() {
  
  return (
    <div>

      <Router>
        <Routes>
          
          <Route path = "/" element={<Home/>} />
          <Route path="/blog" element={<BlogPost/>} />
          <Route path= "/create" element={<CretePost/>} />
        </Routes>
      </Router>
      </div>
      
  )
}

export default App
