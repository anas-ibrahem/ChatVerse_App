import { Server } from "socket.io";
import http from "http";
import express from "express";
import dotenv from "dotenv";


dotenv.config(); // This is to read the .env file
const app = express(); // Creating an express APP

const origin = process.env.ORIGIN;
const server = http.createServer(app);

// TODO uncomment this for production
// const io = new Server(server

// ,{
//     cors: {
//         origin: origin, // This is the URL of the frontend
//         methods: ["GET", "POST"] // This is the methods that are allowed
//       }
// });

const allowedOrigins = ['http://localhost:5173', 'http://127.0.0.1:5173'];

const io = new Server(server, {
  cors: {
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ["GET", "POST"],
  }
});

export const getReceiverSocketId = (receiverId: string) => {
    return userSocketMap[receiverId];
  };

const userSocketMap: { [key: string]: string } = {}; 

io.on("connection", (socket) => {
  console.log("a user connected" , socket.id);

  const userId = socket.handshake.query.userId as string;
  if (userId) userSocketMap[userId] = socket.id;


  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("user disconnected");
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});


export { io, server , app };