import React from "react";

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-pink-700">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-10 relative overflow-hidden">
        {/* Decorative gradient circles */}
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-purple-400 rounded-full opacity-30 blur-2xl animate-pulse"></div>
        <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-pink-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>

        {/* Form Heading */}
        <h2 className="text-3xl font-bold text-purple-900 text-center mb-8">Create Account</h2>

        {/* Form */}
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" id="name" placeholder="John Doe" className="mt-2 px-4 py-3 w-full border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" placeholder="you@example.com" className="mt-2 px-4 py-3 w-full border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent" />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" placeholder="Enter your password" className="mt-2 px-4 py-3 w-full border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent" />
          </div>

          <button type="submit" className="w-full py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-xl font-semibold shadow-lg transition-transform hover:scale-105">Sign Up</button>
        </form>

        {/* Footer Links */}
        <div className="mt-6 text-center text-sm text-gray-500">
          Already have an account? <a href="/login" className="text-purple-600 hover:text-purple-800 font-medium">Login</a>
        </div>
      </div>
    </div>
  );
}