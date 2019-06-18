const http = require("http");

/////////////// server part //////////////
const express = require("express");
const app = express();
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.use(express.static("js"));

const server = app.listen(3003, function() {
  console.log("localhost:3003");
});

/////////////// docker.sock part //////////////
var output;


const callback = response => {
  console.log(`STATUS: ${response.statusCode}`);
  response.on("data", chunk => {
    var resp = JSON.parse(chunk + "");
    output = resp.precpu_stats.cpu_usage.percpu_usage;
    //console.log(`Got output ${output}`);
  });
};


/////////////// io connections ////////////
const socketIo = require("socket.io");
let io = socketIo(server);
io.on("connection", function(socket) {
  console.log(`Browser connected: sending data ${output}`);

setInterval(function(){
  socket.send(output);
	}, 100);

  socket.on("disconnect", function() {
    console.log("Browser disconnected");
  });

});



const options = {
  socketPath: "/var/run/docker.sock",
  path: "/containers/d03296c579f6/stats"
  //path: "/containers/<containerID>/stats"
  // get containerID from docker ps
};

console.log(`Sending HTTP Request`);
const clientRequest = http.get(options, callback);
clientRequest.end(0);


