// src/components/AdminDashboard.jsx
import React from "react";
import { useNavigate } from "react-router";
import { useAdmin } from "../AdminContext";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { admin, logoutAdmin } = useAdmin();

  const handleLogout = () => {
    logoutAdmin();
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-700 p-8 text-white">
      <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-10 shadow-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          👨‍💼 Admin Dashboard
        </h1>

        <div className="text-center mb-8">
          <p className="text-lg">
            Welcome, <b>{admin?.email || "Admin"}</b> 👋
          </p>
        </div>

        {/* Admin Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <button
            onClick={() => navigate("/chat")}
            className="bg-purple-700 hover:bg-purple-800 text-white py-4 rounded-2xl shadow-lg transition-transform hover:scale-105"
          >
            💬 Live Chat with Users
          </button>

          <button
            onClick={() => navigate("/medicinoBot2")}
            className="bg-pink-700 hover:bg-pink-800 text-white py-4 rounded-2xl shadow-lg transition-transform hover:scale-105"
          >
            🤖 Open Medicino Bot 2.0
          </button>

          <button
            onClick={() => navigate("/searchMedicines")}
            className="bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-2xl shadow-lg transition-transform hover:scale-105"
          >
            🔍 Search Medicines
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-700 hover:bg-red-800 text-white py-4 rounded-2xl shadow-lg transition-transform hover:scale-105"
          >
            🚪 Logout
          </button>
        </div>
      </div>
    </div>
  );
}
