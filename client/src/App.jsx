import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home";
import Cv from "./Pages/CV";
import Contacts from "./Pages/Contacts"


function App() {
  
  return (
    <div>
      
      <Router>
        <Routes>
          
          <Route path = "/" element={<Home/>} />
          <Route path="/cv" element={<Cv/>} />
          <Route path="/contacts" element={<Contacts/>} />
        </Routes>
      </Router>
      </div>
      
  )
}

export default App
