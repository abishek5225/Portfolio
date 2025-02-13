
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
            Hi, I’m Abishek, a Full-Stack Developer from Dhulabari, Nepal. I
            specialize in building modern, fast, and scalable web applications
            using React.js, Node.js, Express.js, and MySQL. With 3+ years of
            experience, I have worked on front-end and back-end development,
            creating responsive UIs, secure APIs, and database-driven
            applications. I love problem-solving, optimizing performance, and
            delivering high-quality, user-friendly websites.
          </p>
          <br />
          <p className="text-justify ">
            Currently, I’m expanding my skills in blockchain and advanced
            back-end technologies. I’m always open to exciting projects,
            collaborations, and learning opportunities. Let’s connect and build
            something great together!
          </p>
        </div>
        <Button></Button>
      </div>
      <div></div>
      <div className="mt-20">
        <section className="py-10 bg-zinc-50 h-52 flex items-center justify-center">
          <div className="max-w-3xl mx-auto bg-stone-200 p-8 rounded-2xl shadow-lg text-center lg:w-full">
            
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
                href="https://www.facebook.com/abishek.chaulagain5225"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 text-4xl hover:text-blue-500"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/abishek_chaulagain/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fuchsia-500 text-4xl "
              >
                <FaInstagram />
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