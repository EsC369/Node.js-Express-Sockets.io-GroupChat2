const express = require('express');
const app = express();
app.use(express.static(__dirname + "/public"));
const server = app.listen(1337);
const io = require('socket.io')(server);

io.on("connection", function (socket) { 

  socket.on("chat", function(data){
    io.sockets.emit("chat", data);
    });

});