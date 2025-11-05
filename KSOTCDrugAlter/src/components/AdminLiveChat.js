import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useAdmin } from "../AdminContext";

const socket = io("http://localhost:5000");

export default function AdminLiveChat() {
  const { admin } = useAdmin();
  const [activeUsers, setActiveUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (admin?.email) socket.emit("registerUser", admin.email);

    socket.on("receiveMessage", (data) => {
      setChat((prev) => [...prev, data]);
      if (
        !activeUsers.includes(data.sender) &&
        data.sender !== "admin@example.com"
      ) {
        setActiveUsers((prev) => [...prev, data.sender]);
      }
    });

    return () => socket.disconnect();
  }, [admin]);

  const sendMessage = () => {
    if (!selectedUser || !message.trim()) return;
    socket.emit("sendMessage", {
      sender: admin.email,
      receiver: selectedUser,
      message,
    });
    setChat((prev) => [...prev, { sender: "You", message }]);
    setMessage("");
  };

  const filteredChat = chat.filter(
    (msg) => msg.sender === selectedUser || msg.sender === "You"
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-700 p-8 text-white">
      <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          💼 Admin Live Chat
        </h1>

        <div className="grid grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="bg-white/20 p-4 rounded-2xl">
            <h2 className="text-lg font-semibold mb-4">Active Users</h2>
            {activeUsers.length === 0 && <p>No active users yet.</p>}
            {activeUsers.map((user, i) => (
              <button
                key={i}
                onClick={() => setSelectedUser(user)}
                className={`block w-full text-left px-4 py-2 mb-2 rounded-xl ${
                  selectedUser === user
                    ? "bg-purple-700 text-white"
                    : "bg-white text-purple-800"
                }`}
              >
                {user}
              </button>
            ))}
          </div>

          {/* Chat Section */}
          <div className="col-span-2 bg-white rounded-2xl p-4 text-black">
            {selectedUser ? (
              <>
                <h3 className="text-xl font-bold mb-3 border-b pb-2">
                  Chat with {selectedUser}
                </h3>

                <div className="h-80 overflow-y-auto border rounded-xl p-3 bg-gray-50 mb-4">
                  {filteredChat.map((msg, idx) => (
                    <div
                      key={idx}
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
                    placeholder="Type message..."
                    className="border rounded-xl flex-1 p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    onClick={sendMessage}
                    className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-xl transition-transform hover:scale-105"
                  >
                    Send
                  </button>
                </div>
              </>
            ) : (
              <p className="text-gray-700 text-center mt-32">
                Select a user to start chatting 💬
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
