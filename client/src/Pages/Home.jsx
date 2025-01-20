
import {Link} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import Homebody from '../components/Homebody'

function home() {
  
  return (
      
     <div className='w-full bg-stone-400 h-screen'>
     
      <div className='w-full bg-stone-400 h-[90px]'>
        <div >
         <Navbar/>
     </div>
      </div>
       <div className='bg-white mt-6 h-[660px]'>
        <Homebody/>
       </div>
     </div>
  )
}
export default home