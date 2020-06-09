const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const cors = require("cors");

const {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
} = require("./users.utils");

const PORT = process.env.PORT || 5000;
const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(router);
app.use(cors());

io.on("connection", (socket) => {
  socket.on("join", ({ name, roomName }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, roomName });

    if (error) return callback(error);

    socket.emit("message", {
      user: "admin",
      text: `${user.name}, welcome to the room ${user.roomName}`,
    });

    socket.broadcast
      .to(user.roomName)
      .emit("message", { user: "admin", text: `${user.name}, has joined!` });

    socket.join(user.roomName);

    io.to(user.roomName).emit("roomData", {
      roomName: user.roomName,
      users: getUsersInRoom(user.roomName),
    });
    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.roomName).emit("message", { user: user.name, text: message });
    io.to(user.roomName).emit("roomData", {
      roomName: user.roomName,
      users: getUsersInRoom(user.roomName),
    });

    callback();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.io);

    if (user) {
      io.to(user.roomName).emit("message", {
        user: "admin",
        text: `${user.name} has left the group chat`,
      });
    }
  });
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
