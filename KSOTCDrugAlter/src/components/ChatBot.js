// src/components/ChatMedicines.jsx
import React, { useState, useRef, useEffect } from "react";
import medList from "../utils/mockData";

const ChatBot = () => {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! Ask me about any medicine or disease." },
  ]);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!query.trim()) return;

    const userMsg = { from: "user", text: query };
    const queryWords = query.toLowerCase().split(" "); // split into words

    // Free-form search using includes() for each word
    const results = medList.filter((med) => {
      return queryWords.some((word) => {
        const nameMatch = med.name?.toLowerCase().includes(word);
        const genericMatch = med.generic?.toLowerCase().includes(word);
        const diseaseMatch = med.disease_tags
          ? med.disease_tags.some((tag) => tag.toLowerCase().includes(word))
          : false;

        return nameMatch || genericMatch || diseaseMatch;
      });
    });

    const botMsg =
      results.length > 0
        ? {
            from: "bot",

            text: results.map((med, idx) => (
              <div key={idx} style={{ marginBottom: "15px" }}>
                <h3 style={{ color: "#ffb3ff", margin: "5px 0" }}>
                  {med.name || "N/A"}
                </h3>
                {med.generic && (
                  <p>
                    <strong>Generic:</strong> {med.generic}
                  </p>
                )}
                {med.disease_tags && (
                  <p>
                    <strong>Diseases:</strong> {med.disease_tags.join(", ")}
                  </p>
                )}
                {med.price_in_inr && (
                  <p>
                    <strong>Price:</strong> ₹{med.price_in_inr}
                  </p>
                )}
                {med.description && (
                  <p>
                    <strong>Description:</strong> {med.description}
                  </p>
                )}
                {med.alternatives && (
                  <p>
                    <strong>Alternatives:</strong> {med.alternatives.join(", ")}
                  </p>
                )}
                {med.advantages && (
                  <p>
                    <strong>Advantages:</strong> {med.advantages.join(", ")}
                  </p>
                )}
                {med.disadvantages && (
                  <p>
                    <strong>Disadvantages:</strong>{" "}
                    {med.disadvantages.join(", ")}
                  </p>
                )}
                {med.youtube && (
                  <p>
                    <strong>YouTube:</strong>{" "}
                    <a
                      href={med.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#ffb3ff", textDecoration: "underline" }}
                    >
                      Watch
                    </a>
                  </p>
                )}
              </div>
            )),
          }
        : { from: "bot", text: `No medicines found for "${query}"` };

    setMessages([...messages, userMsg, botMsg]);
    setQuery("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div
      style={{
        padding: "40px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#1a002b",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          color: "#fff",
          textAlign: "center",
          marginBottom: "25px",
          fontSize: "2.5rem",
          fontWeight: "bold",
          textShadow: "0 0 15px rgba(255, 0, 255, 0.7)",
        }}
      >
        💊 Medicine ChatBot
      </h1>

      <div
        style={{
          height: "70vh",
          overflowY: "auto",
          padding: "10px",
          borderRadius: "15px",
          backgroundColor: "#3d0f5f",
          marginBottom: "20px",
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              textAlign: msg.from === "user" ? "right" : "left",
              margin: "10px 0",
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: msg.from === "user" ? "#D9B3FF" : "#9A4DFF",
                color: msg.from === "user" ? "#000" : "#fff",
                maxWidth: "80%",
                wordWrap: "break-word",
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <div style={{ display: "flex" }}>
        <input
          type="text"
          placeholder="Type medicine name, generic or disease..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          style={{
            flex: 1,
            padding: "12px",
            borderRadius: "10px 0 0 10px",
            border: "2px solid #9a4fff",
            outline: "none",
            backgroundColor: "#fff",
            color: "#000",
          }}
        />
        <button
          onClick={handleSend}
          style={{
            padding: "12px 20px",
            borderRadius: "0 10px 10px 0",
            border: "none",
            backgroundColor: "#ffb3ff",
            color: "#6A0DAD",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
