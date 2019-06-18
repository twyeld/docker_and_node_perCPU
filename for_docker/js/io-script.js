
	cpuUsageValue0 = 0;
	cpuUsageValue1 = 1;
	cpuUsageValue2 = 2;
	cpuUsageValue3 = 3;
	cpuUsageValue4 = 4;
	cpuUsageValue5 = 5;
	cpuUsageValue6 = 6;
	cpuUsageValue7 = 7;

var scalingFactorText = function() {
	socket.on('message', function(response){

	document.getElementById("log").innerHTML = parseFloat(response[0]).toPrecision(4) + '%';
	document.getElementById("log2").innerHTML = parseFloat(response[1]).toPrecision(4) + '%';
	document.getElementById("log3").innerHTML = parseFloat(response[2]).toPrecision(4) + '%';
	document.getElementById("log4").innerHTML = parseFloat(response[3]).toPrecision(4) + '%';
	document.getElementById("log5").innerHTML = parseFloat(response[4]).toPrecision(4) + '%';
	document.getElementById("log6").innerHTML = parseFloat(response[5]).toPrecision(4) + '%';
	document.getElementById("log7").innerHTML = parseFloat(response[6]).toPrecision(4) + '%';
	document.getElementById("log8").innerHTML = parseFloat(response[7]).toPrecision(4) + '%';
		})
	};

var scalingFactorGraph0 = function() {
	socket.on('message', function(response){

	cpuUsageValue0 = response[0];
		})
			return cpuUsageValue0/100;
	};

var scalingFactorGraph1 = function() {
	socket.on('message', function(response){

	cpuUsageValue1 = response[1];
		})
			return cpuUsageValue1/100;
	};

var scalingFactorGraph2 = function() {
	socket.on('message', function(response){

	cpuUsageValue2 = response[2];
		})
			return cpuUsageValue2/100;
	};

var scalingFactorGraph3 = function() {
	socket.on('message', function(response){

	cpuUsageValue3 = response[3];
		})
			return cpuUsageValue3/100;
	};

var scalingFactorGraph4 = function() {
	socket.on('message', function(response){

	cpuUsageValue4 = response[4];
		})
			return cpuUsageValue4/100;
	};

var scalingFactorGraph5 = function() {
	socket.on('message', function(response){

	cpuUsageValue5 = response[5];
		})
			return cpuUsageValue5/100;
	};

var scalingFactorGraph6 = function() {
	socket.on('message', function(response){

	cpuUsageValue6 = response[6];
		})
			return cpuUsageValue6/100;
	};

var scalingFactorGraph7 = function() {
	socket.on('message', function(response){

	cpuUsageValue7 = response[7];
		})
			return cpuUsageValue7/100;
	};
