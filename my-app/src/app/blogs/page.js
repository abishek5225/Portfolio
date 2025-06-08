
import React from "react";
import Navbar from "../../components/Navbar";

export const metadata = {
  title: "Blogs - Abishek Chaulagain",
  description: "Read my latest blogs and articles about web development and technology.",
};

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Blogs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A space for sharing thoughts, stories, and insights on whatever sparks my curiosity.
          </p>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* You can add blog posts here later */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <p className="text-indigo-600 font-medium mb-2">Coming Soon</p>
              <h3 className="text-xl font-bold mb-2">Blog posts will appear here</h3>
              <p className="text-gray-600">Check back later.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}