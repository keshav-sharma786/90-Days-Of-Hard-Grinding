import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        name,
        email,
        password,
      });

      setMessage("✅ Signup Successful! You can now login.");
      console.log(res.data);

      // Optionally redirect after signup
      setTimeout(() => {
        window.location.href = "/login";
      }, 1500);
    } catch (err) {
      console.error(err);
      setMessage("❌ Signup failed! Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-800 via-purple-800 to-purple-700">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-10 relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-purple-400 rounded-full opacity-30 blur-2xl animate-pulse"></div>
        <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-pink-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>

        <h2 className="text-3xl font-bold text-purple-900 text-center mb-8">
          Create your Medicino Account
        </h2>

        <form className="space-y-6" onSubmit={handleSignup}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 px-4 py-3 w-full border rounded-xl focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 px-4 py-3 w-full border rounded-xl focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 px-4 py-3 w-full border rounded-xl focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-xl font-semibold shadow-lg transition-transform hover:scale-105"
          >
            Sign Up
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-sm font-medium text-red-500">
            {message}
          </p>
        )}

        <div className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-purple-600 hover:text-purple-800 font-medium"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
