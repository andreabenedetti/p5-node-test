var socket;

function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  background(150);
  // put setup code here

  socket = io();
  socket.on("mouseBroadcast", newDrawing)
}

function draw() {
  // put drawing code here
}

function mouseDragged() {
  var data = {
    x: mouseX,
    y: mouseY
  }

  ellipse(data.x, data.y, 20);
  socket.emit("mouse", data);
}

function newDrawing(receivedBroadcast) {
  console.log(receivedBroadcast)
  ellipse(receivedBroadcast.x, receivedBroadcast.y, 50)
}
