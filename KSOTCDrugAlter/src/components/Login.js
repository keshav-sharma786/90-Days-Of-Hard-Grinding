import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router"; // ✅ parcel-compatible import
import axios from "axios";
import { AuthContext } from "../AuthContext"; // ✅ import context

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // ✅ Access login function from AuthContext
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      // ✅ Save token
      localStorage.setItem("token", res.data.token);

      // ✅ Update auth state globally (Header updates instantly)
      login(res.data.token);

      // ✅ Show success message
      setMessage("✅ Login Successful!");

      // ✅ Redirect after short delay
      setTimeout(() => {
        navigate("/searchmedicines");
      }, 800);
    } catch (err) {
      console.error(err);
      setMessage("❌ Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-pink-700">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-10 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-purple-400 rounded-full opacity-30 blur-2xl animate-pulse"></div>
        <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-pink-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-purple-900 text-center mb-8">
          Login to Medicino
        </h2>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 px-4 py-3 w-full border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 px-4 py-3 w-full border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-xl font-semibold shadow-lg transition-transform hover:scale-105"
          >
            Login
          </button>
        </form>

        {/* Message */}
        {message && (
          <p
            className={`mt-4 text-center text-sm font-medium ${
              message.includes("✅") ? "text-green-600" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <Link
            to="/signUp"
            className="text-purple-600 hover:text-purple-800 font-medium"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
