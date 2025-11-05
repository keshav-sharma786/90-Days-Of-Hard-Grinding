import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useAdmin } from "../AdminContext";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { loginAdmin } = useAdmin();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = loginAdmin(email, password);

    if (success) {
      navigate("/admin/chat");
    } else {
      setError("Invalid credentials! Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-pink-700">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-10 relative overflow-hidden">
        <h2 className="text-3xl font-bold text-purple-900 text-center mb-8">
          Admin Login
        </h2>

        {error && (
          <p className="text-red-500 text-center font-medium mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              className="mt-2 px-4 py-3 w-full border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-2 px-4 py-3 w-full border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-xl font-semibold shadow-lg transition-transform hover:scale-105"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
