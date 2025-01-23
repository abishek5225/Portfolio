import React from "react";
import {Link} from 'react-router-dom'
import img1 from '../assets/images/img1.JPG'

export default function Home() {
  return (
    <div className="h-[800px] bg-white text-gray-800">
      {/* Hero Section */}
      <div className="bg-yellow-400  text-black items-center w-[300px] h-[90px] mt-7 lg: ">
        <h1 className="text-5xl text-center justify-center items-center ">
          This is<span className="text-black font-bold"> me</span>
        </h1>
      </div>
      

      {/* About Me Section */}
      <div className="py-12 px-6 max-w-4xl mx-auto">
        <p className="text-lg leading-relaxed">
        Hi! I'm Abishek, a passionate full-stack developer from Dhulabari, Nepal. I specialize in creating responsive, user-friendly
         websites using technologies like React.js and Tailwind CSS. I enjoy solving coding problems, fixing front-end issues, and 
         turning creative ideas into functional designs. 
          
        </p>
        
      <p>I'm currently expanding my skills in back-end development with Node.js and exploring the 
         exciting world of blockchain. My goal is to deliver high-quality projects that leave a positive impact. Outside of coding, 
         I enjoy learning new concepts, exploring innovative ideas, and connecting with like-minded individuals.

Feel free to reach out—I’d love to collaborate or discuss new projects!</p>
      </div>
      

      

      {/* CTA Section */}
      <div className=" bg-gray-200 text-center h-[100px]">
        
        <button className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-300">
          See Full CV
        </button>
      </div>
    </div>
  );
}
