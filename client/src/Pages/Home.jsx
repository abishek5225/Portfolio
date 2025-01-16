
import {Link} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import Homebody from '../components/Homebody'

function home() {
  
  return (
      
     <div className='w-full bg-stone-400 h-screen'>
     
      <div className='w-full bg-stone-400 h-[90px]'>
        <div className=' h-[90px] float-right bg-gray-300 p-6 flex'>
         <Navbar/>
     </div>
      </div>
       <div className='bg-white mt-6'>
        <Homebody/>
       </div>
     </div>
  )
}
export default home