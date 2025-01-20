import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="h-24 w-full bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-screen-lg mx-auto px-6 lg:px-16 flex justify-between items-center py-4">
          {/* Logo */}
          <a href="#" className="textxl font-bold text-gray-800">Personal blogs</a>

          {/* links (hidden in mobile) */}
          <div className="hidden lg:flex space-x-8">
            <a href="home" className="text-gray-600 hover:text-black">Home</a>
            <a href="home" className="text-gray-600 hover:text-black">Home</a>
            <a href="home" className="text-gray-600 hover:text-black">Home</a>
            <a href="home" className="text-gray-600 hover:text-black">Home</a>
          </div>
        </div>
      </nav>
    </div>
  );
}


export default Navbar;
