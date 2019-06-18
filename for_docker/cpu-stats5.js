var cpuStat = require('cpu-stat');
var express = require('express');
var app = express();

app.get('/', function(req, res){
		res.sendFile(__dirname +  '/index.html');
	});

app.use(express.static('js'));

var socket = require('socket.io')

var server = app.listen(3005, function(){
	console.log('localhost:3005');
});

let io = socket(server)

function myFunction(coreIndex) {
	return new Promise((resolve, reject) => {
		cpuStat.usagePercent (
			{coreIndex},
			function (err, cpuPercent) {
				if (err) {
				console.error (err);
				cpuPercent = 0;
				}
				return resolve(cpuPercent);

			}
		);
	});
};


const getGroups = async function (){
  const coreIndexes = [0,1,2,3,4,5,6,7]
  const cpuPercentList = []
  for(let i=0; i< coreIndexes.length; i++){
    //console.log("getting for index", coreIndexes[i])
    const cpuPercent = await myFunction(coreIndexes[i])
    cpuPercentList.push(cpuPercent)
  }
  return cpuPercentList
}

io.on('connection', function(socket) {
	console.log('Browser connected');

setInterval(async function(){

		var response = await getGroups();
    //console.log("=====cpus", cpus)
		//const response = cpus.map(cpu => cpu.percent);
		//console.log(response);
		socket.send(response);

	}, 300);

	socket.on('disconnect', function () {
	   console.log('Browser disconnected');
	});
 });
