
import {Link} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import Homebody from '../components/Homebody'
import About from '../Pages/About'

function home() {
  
  return (
      
     
     <div>
        <Navbar/>
        <Homebody/>
        <About/>
     </div>
     
  )
}


export default home