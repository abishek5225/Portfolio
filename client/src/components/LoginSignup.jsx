import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function LoginSignup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy admin credentials (replace with API call later)
    const adminCredentials = { username: "admin", password: "admin123" };

    if (username === adminCredentials.username && password === adminCredentials.password) {
      localStorage.setItem("isLoggedIn", true); // Save login state
      navigate("/admin"); // Redirect to admin dashboard
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      <Navbar />
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="bg-white shadow-md rounded px-8 py-6 w-96"
        onSubmit={handleLogin}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Admin Login</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            className="w-full border rounded px-3 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          Login
        </button>
      </form>
    </div>
    </div>
  );
}

export default LoginSignup;
