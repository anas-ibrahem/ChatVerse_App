import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { app , server } from "./socket/socket.js";

dotenv.config();

// note its written .js but ts know its .ts :)

const PORT = process.env.PORT || 5000;

app.use(cookieParser()); // parse cookies
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// TODO Config for production
