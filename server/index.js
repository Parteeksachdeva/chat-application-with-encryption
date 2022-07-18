const express = require(`express`);
const socketIo = require(`socket.io`);
const http = require(`http`);
const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log("client connected: ", socket.id);

  socket.on("room.join", (roomId) => {
    socket.join(roomId);
  });

  socket.on("room.message", (message, roomId) => {
    socket.to(roomId).emit("chat-message", message);
  });
});

server.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log("Server running on Port ", PORT);
});
