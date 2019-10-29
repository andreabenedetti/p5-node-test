var socket = require("socket.io")
var express = require("express");

var app = express();

var port = process.env.PORT || 3000;

var server = app.listen(port);

app.use(express.static('public'));

var io = socket(server);

io.on("connection", newConnection);

function newConnection(socket) {
  console.log("socket", socket.id);

  socket.on("mouse", mouseMessage);

  function mouseMessage(dataReceived) {
    console.log(dataReceived);
    socket.broadcast.emit("mouseBroadcast", dataReceived);
  }
}
