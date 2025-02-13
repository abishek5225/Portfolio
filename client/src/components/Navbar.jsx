import {  Link } from "react-router-dom";
import React, { useState} from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


function Navbar() {

  const[isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <nav className="bg-zinc-100 shadow-md relative h-28 w-full">
      {/* Logo at the far left corner */}

      <div className="absolute left-4 top-9 text-xl font-bold text-gray-800 lg:text-4xl"></div>
      <div className="absolute left-5 top-9 flex space-x-4 text-2xl lg:text-4xl">
        <a
          href="https://github.com/abishek5225"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 text-4xl hover:text-gray-600"
        >
          <FaGithub />
        </a>
      </div>

      {/* Navbar container for links */}
      <div className="max-w-screen-lg mx-auto px-6 lg:px-16 py-4 flex items-center justify-between ">
        {/* Spacer for the logo */}
        <div></div>

        {/* Links (hidden in mobile) */}
        <div className="hidden lg:flex space-x-8 mt-8 text-xl ">
          <a href="/" className="text-gray-600 hover:text-black">
            Home
          </a>

          <a href="/cv" className="text-gray-600 hover:text-black">
            CV
          </a>
          <a href="/contacts" className="text-gray-600 hover:text-black">
            My Socials
          </a>
        </div>
        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-600 focus:outline focus:ring-2 focus:ring-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-11"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`bg-gray-100 lg:hidden ${isMenuOpen ? "block" : "hidden"}`}
      >
        <Link
          to="/"
          className="block px-4 py-2 text-gray-600 hover:bg-gray-200"
        >
          Home
        </Link>

        <Link
          to="/cv"
          className="block px-4 py-2 text-gray-600 hover:bg-gray-200"
        >
          CV
        </Link>
        <Link
          to="/contacts"
          className="block px-4 py-2 text-gray-600 hover:bg-gray-200"
        >
          My Socials
        </Link>
      </div>
    </nav>
  );
}



export default Navbar;
