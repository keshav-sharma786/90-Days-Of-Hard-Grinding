import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useAuth } from "../AuthContext";

const socket = io("http://localhost:5000");

export default function ChatWithAdmin() {
  const { user } = useAuth();
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    if (user?.email) socket.emit("registerUser", user.email);

    socket.on("receiveMessage", (data) => {
      setChat((prev) => [...prev, data]);
    });

    return () => socket.disconnect();
  }, [user]);

  const sendMessage = () => {
    if (!message.trim()) return;
    const msgData = {
      sender: user.email,
      receiver: "admin@example.com",
      message,
    };
    socket.emit("sendMessage", msgData);
    setChat((prev) => [...prev, { sender: "You", message }]);
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-700 flex justify-center items-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-purple-800 mb-4">
          💬 Chat with Admin
        </h2>

        <div className="border h-80 overflow-y-auto rounded-xl p-3 bg-gray-50 mb-4">
          {chat.map((msg, i) => (
            <div
              key={i}
              className={`mb-2 ${
                msg.sender === "You" ? "text-right" : "text-left"
              }`}
            >
              <span
                className={`inline-block px-3 py-2 rounded-xl ${
                  msg.sender === "You"
                    ? "bg-purple-700 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                <b>{msg.sender}:</b> {msg.message}
              </span>
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="border rounded-xl flex-1 p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={sendMessage}
            className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-xl transition-transform hover:scale-105"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
