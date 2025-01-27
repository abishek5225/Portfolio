import { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({ title: "", content: "" });

  // Fetch blogs from backend
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("/api/blogs");
      setBlogs(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setBlogs([]); // Handle error case
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

  const handlePostBlog = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/blogs", newBlog);
      setBlogs([...blogs, response.data]);
      setNewBlog({ title: "", content: "" });
    } catch (error) {
      console.error("Error posting blog:", error);
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Panel</h1>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Post a New Blog</h2>
        <form onSubmit={handlePostBlog} className="space-y-4">
          <input
            type="text"
            name="title"
            value={newBlog.title}
            onChange={handleInputChange}
            placeholder="Blog Title"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
          <textarea
            name="content"
            value={newBlog.content}
            onChange={handleInputChange}
            placeholder="Blog Content"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Post Blog
          </button>
        </form>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Existing Blogs</h2>
        {Array.isArray(blogs) && blogs.length > 0 ? (
          <table className="w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Title</th>
                <th className="border border-gray-300 px-4 py-2">Views</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">{blog.title}</td>
                  <td className="border border-gray-300 px-4 py-2">{blog.views}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500">No blogs yet.</p>
        )}
      </div>
    </div>
  );
}

export default Admin;
