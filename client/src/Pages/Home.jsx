
import {Link} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import Homebody from '../components/Homebody'
import Button from '../components/Button'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";



function home() {
  
  return (
    <div className="bg-stone-200">
      <Navbar />
      <Homebody />
      <div className="h-[700px] bg-stone-350 text-gray-800">
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
            Hi! I'm Abishek, a passionate full-stack developer from Dhulabari,
            Nepal. I specialize in creating responsive, user-friendly websites
            using technologies like React.js and Tailwind CSS. I enjoy solving
            coding problems, fixing front-end issues, and turning creative ideas
            into functional designs.
          </p>

          <p className="text-justify ">
            I'm currently expanding my skills in back-end development with
            Node.js and exploring the exciting world of blockchain. My goal is
            to deliver high-quality projects that leave a positive impact.
            Outside of coding, I enjoy learning new concepts, exploring
            innovative ideas, and connecting with like-minded individuals. Feel
            free to reach out—I’d love to collaborate or discuss new projects!
          </p>
        </div>
        <Button></Button>
      </div>
      <div></div>
      <div className="mt-20">
        <section className="py-10 bg-gray-100 h-52 flex items-center justify-center">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg text-center lg:w-full">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Contact Me
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Feel free to connect with me on social media!
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/abishek5225"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 text-4xl hover:text-gray-600"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/yourlinkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 text-4xl hover:text-blue-500"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/Abishek_098"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-4xl hover:text-blue-400"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}


export default home