
import {Link} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import Homebody from '../components/Homebody'
import cv from '../Pages/CV'
import Button from '../components/Button'



function home() {
  
  return (
      
     
     <div className='bg-stone-200'>
        <Navbar/>
        <Homebody/>
         <div className="h-[700px] bg-stone-350 text-gray-800">
      
      {/* Hero Section */}
      <div className="bg-yellow-300 flex mt-20 text-black items-center w-[300px] h-[90px]  lg:w-[700px] lg:h-[150px] lg:pl-14 ">
        <a href="about">
         <h1 className="text-5xl text-center justify-center items-center ">
          This is<span className="text-black font-bold"> me</span>
        </h1>
        </a>
      </div>
      

      {/* About Me Section */}
      <div className="py-12 px-6 max-w-4xl mx-auto">
        <p className="text-lg leading-relaxed text-justify">
        Hi! I'm Abishek, a passionate full-stack developer from Dhulabari, Nepal. I specialize in creating responsive, user-friendly
         websites using technologies like React.js and Tailwind CSS. I enjoy solving coding problems, fixing front-end issues, and 
         turning creative ideas into functional designs. 
          
        </p>
        
      <p className='text-justify '>I'm currently expanding my skills in back-end development with Node.js and exploring the 
         exciting world of blockchain. My goal is to deliver high-quality projects that leave a positive impact. Outside of coding, 
         I enjoy learning new concepts, exploring innovative ideas, and connecting with like-minded individuals.

Feel free to reach out—I’d love to collaborate or discuss new projects!</p>
      </div>
      <Button >
      </Button>
      
    </div>
   
     </div>
     
  )
}


export default home