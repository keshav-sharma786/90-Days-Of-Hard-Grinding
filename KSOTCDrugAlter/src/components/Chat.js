import React, { useState } from "react";
import { Pencil, Trash2, Check } from "lucide-react"; // icons

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "admin", text: "Hello 👋, how can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = {
      id: Date.now(),
      sender: "user",
      text: input,
    };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    // Fake admin reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: "admin",
          text: "Thanks for your message! I'll get back to you shortly.",
        },
      ]);
    }, 1200);
  };

  const handleDelete = (id) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  };

  const handleEdit = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const handleSaveEdit = (id) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === id ? { ...msg, text: editText } : msg
      )
    );
    setEditingId(null);
    setEditText("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-700">
      <div className="w-full max-w-4xl h-[80vh] bg-[#1a0b2e] rounded-3xl shadow-2xl flex flex-col">
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-purple-700 to-pink-600 text-white rounded-t-3xl font-bold text-xl shadow-md flex items-center">
          💬 Chat with Admin
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-end ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              } group`}
            >
              {/* Avatar */}
              {msg.sender === "admin" && (
                <div className="w-9 h-9 mr-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold shadow-md">
                  A
                </div>
              )}

              {/* Message Bubble */}
              <div className="relative max-w-[70%] px-5 py-3 rounded-2xl text-base shadow-md">
                {editingId === msg.id ? (
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="flex-1 px-3 py-1 rounded-lg text-purple-900"
                    />
                    <button
                      onClick={() => handleSaveEdit(msg.id)}
                      className="text-green-400 hover:text-green-600"
                    >
                      <Check size={20} />
                    </button>
                  </div>
                ) : (
                  <p
                    className={`${
                      msg.sender === "user"
                        ? "bg-purple-600 text-white rounded-br-none"
                        : "bg-purple-200 text-purple-900 rounded-bl-none"
                    } px-4 py-2 rounded-2xl`}
                  >
                    {msg.text}
                  </p>
                )}

                {/* Edit/Delete Icons - only for user */}
                {msg.sender === "user" && editingId !== msg.id && (
                  <div className="absolute -top-6 right-0 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => handleEdit(msg.id, msg.text)}
                      className="text-yellow-400 hover:text-yellow-600"
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(msg.id)}
                      className="text-red-400 hover:text-red-600"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                )}
              </div>

              {msg.sender === "user" && (
                <div className="w-9 h-9 ml-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-md">
                  U
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input */}
        <form
          onSubmit={handleSend}
          className="p-4 flex items-center space-x-3 border-t border-purple-500/30 bg-[#150825] rounded-b-3xl"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-5 py-3 rounded-full bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-700 to-pink-600 text-white px-6 py-2.5 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            ➤
          </button>
        </form>
      </div>
    </div>
  );
}
