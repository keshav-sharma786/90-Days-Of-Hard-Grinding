import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
const server = http.createServer(app); // required for socket.io
const io = new Server(server, {
  cors: {
    origin: "*", // allow all origins for dev (restrict later)
    methods: ["GET", "POST"],
  },
});

app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.log("❌ MongoDB Connection Failed:", err.message));

// Routes
app.use("/api/auth", authRoutes);

// Socket.io: Live Chat Feature
const onlineUsers = new Map(); // userId => socketId

io.on("connection", (socket) => {
  console.log("🟢 A user connected:", socket.id);

  // When user joins the chat
  socket.on("join", (userId) => {
    onlineUsers.set(userId, socket.id);
    console.log(`👤 User ${userId} joined the chat`);
  });

  // Handle message sending
  socket.on("sendMessage", ({ senderId, receiverId, message }) => {
    const receiverSocket = onlineUsers.get(receiverId);

    // Emit to receiver (if online)
    if (receiverSocket) {
      io.to(receiverSocket).emit("receiveMessage", {
        senderId,
        message,
      });
    }

    // Optionally: save message in DB (for history)
  });

  // Handle user disconnect
  socket.on("disconnect", () => {
    console.log("🔴 A user disconnected:", socket.id);
    for (let [userId, socketId] of onlineUsers.entries()) {
      if (socketId === socket.id) {
        onlineUsers.delete(userId);
        break;
      }
    }
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
