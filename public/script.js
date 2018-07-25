
var socket = io.connect("http://localhost:1337");
// Query DOM
var message = document.getElementById("message");
var name = document.getElementById("name");
var btn = document.getElementById("btn");
var output = document.getElementById("output");

//Emit events:
btn.addEventListener("click", function(){
  socket.emit("chat", {
    message: message.value, 
    name: name.value
  });
});

// Listen for events:
socket.on("chat", function(data){
  console.log(data);
  output.innerHTML += "<p>" + data.name + ": " + data.message + "</p>";
});
