import React from "react";

// Very long and attractive Footer component with dark background and visual enhancements
export default function Footer() {
  return (
    <footer className="w-full bg-[#121212] text-white py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 opacity-50 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* About Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">About Medicino</h3>
          <p className="text-sm text-gray-300">
            Medicino helps you find trusted OTC alternatives, compare options,
            and make confident health decisions with clear guidance.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                Alternatives
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Subscribe</h3>
          <p className="text-sm text-gray-300">
            Get the latest updates on new OTC alternatives and health tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-xl border-none focus:outline-none text-gray-900 w-full sm:w-auto"
            />
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-r-xl font-medium transition-transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>

        {/* Social & Contact */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-indigo-400 transition-colors">
              🌐
            </a>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              🐦
            </a>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              📘
            </a>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              📸
            </a>
          </div>
          <p className="text-sm text-gray-300 mt-4"></p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
        © 2025 Medicino. Designed with ❤️ for your health. All rights reserved.
      </div>

      {/* Decorative Shapes */}
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-700 rounded-full opacity-30 blur-3xl animate-pulse"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-pink-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
    </footer>
  );
}
