var express = require('express');
var io = require('socket.io').listen(server);
var socket = require('socket.io');

var app = express();
var server = app.listen(3000);
var io = socket(server);

app.use(express.static('public'));
console.log("Server is running");

//**************************************

io.sockets.on('connection', newConnection);

function newConnection(socket){
  console.log("new connection : " + socket.id);

  socket.on('mouse',
      function(data) {
        // Data comes in as whatever was sent, including objects
        console.log("Received: 'mouse' " + data.x + " " + data.y);

        // Send it to all other clients
        socket.broadcast.emit('mouse', data);

        // This is a way to send to everyone including sender
        // io.sockets.emit('message', "this goes to everyone");

      }
    );
}
