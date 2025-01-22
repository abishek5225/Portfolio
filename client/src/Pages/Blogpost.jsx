import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";


function Blogs() {
  
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch blog data from the server or API
    fetch("https://example.com/api/blogs") 
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch blogs.");
        }
        return response.json();
      })
      .then((data) => {
        setBlogs(data); // Assume data is an array of blog objects
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading blogs...</div>;
  }

  if (blogs.length === 0) {
    return <div className="text-center py-10">No blogs found.</div>;
  }

  return (
    <div>
      <Navbar />
    <div className="bg-gray-100 min-h-screen py-10">
      
      <div className="max-w-screen-lg mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-10">Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {blog.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {blog.excerpt} {/* Short description or preview of the blog */}
              </p>
              <Link
                to={`/blogs/${blog.id}`} // Link to the BlogDetails page
                className="mt-auto text-blue-600 hover:underline"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Blogs;
