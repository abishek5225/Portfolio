import { Link } from "react-router-dom";
import React, { useState} from "react";


function Navbar() {

  const[isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    
      <nav className="bg-stone-400 shadow-md">
        <div className="max-w-screen-lg mx-auto px-6 lg:px-16 py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-xl font-bold text-gray-800 lg: ">Personal blogs</a>

          {/* links (hidden in mobile) */}
          <div className="hidden lg:flex space-x-8">
            <a href="home" className="text-gray-600 hover:text-black">Home</a>
            <a href="home" className="text-gray-600 hover:text-black">About me</a>
            <a href="home" className="text-gray-600 hover:text-black">Blogs</a>
          </div>
          {/* Mobile menu button */}
          <button 
          onClick={toggleMenu} 
          className="lg:hidden text-gray-600 focus:outline focus:ring-2 focus:ring-gray-400"
          >
             <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
        {/* Mobile menu */}
         {/* Mobile Menu */}
      <div
        className={`bg-gray-100 lg:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <Link to="/home" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">
          Home
        </Link>
        <Link to="/about" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">
          About Me
        </Link>
        <Link to="/blogs" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">
          Blogs
        </Link>
        <Link to="/contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">
          Contact
        </Link>
      </div>
      </nav>
    
  );
}



export default Navbar;
