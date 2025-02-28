
import {Link} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import Homebody from '../components/Homebody'
import Button from '../components/Button'
import { FaGithub, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";



function home() {
  
  return (
    <div className="bg-zinc-50">
      <Navbar />
      <Homebody />  
      
    </div>
  );
}


export default home