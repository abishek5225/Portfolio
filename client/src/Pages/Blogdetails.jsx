import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Fetch blog details from an API or backend
    fetch(`https://example.com/api/blogs/${id}`)
      .then((response) => response.json())
      .then((data) => setBlog(data))
      .catch((error) => console.error("Error fetching blog data:", error));
  }, [id]);

  if (!blog) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-screen-lg mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">{blog.title}</h1>
        <p className="text-gray-700 leading-7">{blog.content}</p>
      </div>
    </div>
  );
}

export default BlogDetails;
