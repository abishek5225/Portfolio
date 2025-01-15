
import {Link} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import Homebody from '../components/Homebody'

function home() {
  const [posts, setPosts] = useState([]);

 useEffect(() => {
    fetch("http://localhost:5000/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  
  return (
    
      
     <div className='w-full bg-stone-400 h-screen'>
     
      <div className=' h-18 w-25  p-6 float-right flex'>
       <Navbar/>
     </div>
       <div className='bg-white'>
        <Homebody/>
       </div>
     </div>
       
    
  )
}


export default home