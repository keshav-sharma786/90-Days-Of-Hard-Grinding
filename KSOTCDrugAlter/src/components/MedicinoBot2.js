// src/components/MedicinoBot2.jsx
import React, { useState, useEffect, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai"; // ✅ Gemini SDK
import { API_KEY } from "../utils/constants";

export default function MedicinoBot2() {
  const [messages, setMessages] = useState([
    {
      id: Date.now(),
      role: "assistant",
      text: "👋 Hey there! I'm Medicino Bot 2.0 — your personal assistant for OTC (Over-The-Counter) drug alternatives. Ask me about safe substitutes, dosages, or brands!",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [suggestions] = useState([
    "What can I take instead of ibuprofen?",
    "OTC alternatives for sore throat",
    "Best medicine for cold without prescription",
    "Compare paracetamol vs ibuprofen for fever",
  ]);

  const containerRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  // Focus on text area
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const addMessage = (role, text) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now() + Math.random(), role, text },
    ]);
  };

  const handleSuggestionClick = (s) => {
    setInput(s);
    handleSend(s);
  };

  const cleanText = (text) => {
    // Remove markdown symbols like **, *, #, >, etc.
    return text
      .replace(/[*_#>`~]/g, "")
      .replace(/\n{3,}/g, "\n\n")
      .trim();
  };

  const handleSend = async (overrideText) => {
    const text = overrideText ?? input.trim();
    if (!text) return;

    addMessage("user", text);
    setInput("");
    setLoading(true);

    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

      const chatPrompt = `
You are Medicino Bot 2.0 — a friendly, highly knowledgeable medical assistant specializing in OTC (Over-The-Counter) drug alternatives.

The user asks: "${text}"

Respond clearly in plain text only (no markdown symbols like * or **).
Include:
1. Brief Overview of the condition.
2. Possible OTC Alternatives.
3. Brand Names.
4. General Dosage Guidance.
5. Side effects or precautions.
6.Generate images also for the otc drug
7. Proper comparis
6. Always end with: "Consult a doctor for serious or chronic issues."


Be professional, friendly, and easy to understand.
      `;

      const result = await model.generateContent(chatPrompt);
      let reply = result.response.text();

      reply = cleanText(reply); // remove markdown syntax

      addMessage("assistant", reply);
    } catch (error) {
      console.error(error);
      addMessage(
        "assistant",
        "🚫 Sorry, I couldn't connect to the Medicino AI server. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a001f] via-[#2a0033] to-[#4a001f] p-6 text-white">
      <div className="max-w-5xl mx-auto bg-[#240020]/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-[#660033]/40 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 bg-gradient-to-r from-[#6a0dad] to-[#8b0000] shadow-lg">
          <div>
            <h2 className="text-2xl font-bold tracking-wide">
              💊 Medicino Bot 2.0
            </h2>
            <p className="text-sm text-white/80">
              AI-powered OTC drug alternative assistant
            </p>
          </div>

          <button
            onClick={() =>
              setMessages([
                {
                  id: Date.now(),
                  role: "assistant",
                  text: "👋 Hey! I'm Medicino Bot 2.0 — ask me about over-the-counter drug alternatives.",
                },
              ])
            }
            className="text-sm bg-white/20 hover:bg-white/30 px-3 py-2 rounded-lg transition-all"
          >
            Reset
          </button>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-4">
          {/* Sidebar */}
          <aside className="hidden md:block md:col-span-1 p-6 border-r border-[#660033]/30">
            <h3 className="text-lg font-semibold mb-4 text-[#ffb3d9]">
              💡 Quick Prompts
            </h3>
            <div className="flex flex-col gap-3">
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  onClick={() => handleSuggestionClick(s)}
                  className="text-left bg-[#400030]/60 hover:bg-[#600040]/70 px-4 py-3 rounded-lg transition-all text-[#ffb3d9]"
                >
                  {s}
                </button>
              ))}
            </div>

            <div className="mt-6 text-sm text-white/70">
              <h4 className="font-medium mb-2 text-[#ffb3d9]">Tips</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Be clear about symptoms and allergies.</li>
                <li>Ask for substitutes or dosage suggestions.</li>
                <li>Always verify with a pharmacist if unsure.</li>
              </ul>
            </div>
          </aside>

          {/* Chat Area */}
          <main className="md:col-span-3 flex flex-col p-6">
            <div
              ref={containerRef}
              className="flex-1 overflow-y-auto space-y-4 pr-2"
              style={{ minHeight: "500px" }}
            >
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`max-w-3xl ${
                    m.role === "user"
                      ? "ml-auto text-right"
                      : "mr-auto text-left"
                  }`}
                >
                  <div
                    className={`inline-block px-4 py-3 rounded-2xl shadow-md ${
                      m.role === "user"
                        ? "bg-gradient-to-r from-[#7a00cc] to-[#a00080] text-white"
                        : "bg-[#330022]/80 border border-[#660033]/40 text-[#ffe6f2]"
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{m.text}</div>
                    <div className="mt-2 flex justify-end">
                      <button
                        onClick={() => handleCopy(m.text)}
                        className="text-xs text-white/70 hover:text-white transition"
                      >
                        📋 Copy
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {loading && (
                <div className="text-left">
                  <div className="bg-[#400030]/70 px-4 py-3 rounded-2xl animate-pulse text-white/80">
                    Medicino is thinking…
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="mt-4">
              <div className="flex items-center gap-3">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me about OTC alternatives, e.g. 'What can I use instead of cetirizine?'"
                  className="flex-1 p-3 min-h-[56px] max-h-36 bg-[#330022]/80 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a00080] placeholder-white/60"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={loading}
                  className="bg-gradient-to-r from-[#a00080] to-[#cc0033] px-5 py-3 rounded-lg font-semibold hover:scale-105 transition-all"
                >
                  Send
                </button>
              </div>
              <p className="mt-2 text-xs text-white/60">
                Press Enter to send — Shift + Enter for newline
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
