
	cpuUsageValue0 = 0;
	cpuUsageValue1 = 0;
	cpuUsageValue2 = 0;
	cpuUsageValue3 = 0;
	cpuUsageValue4 = 0;
	cpuUsageValue5 = 0;
	cpuUsageValue6 = 0;
	cpuUsageValue7 = 0;

var scalingFactorText = function() {
	socket.on('message', function(output){

	document.getElementById("log").innerHTML = parseFloat(output[0]).toPrecision(6)/100000000 + '%';
	document.getElementById("log2").innerHTML = parseFloat(output[1]).toPrecision(4)/100000000 + '%';
	document.getElementById("log3").innerHTML = parseFloat(output[2]).toPrecision(4)/100000000 + '%';
	document.getElementById("log4").innerHTML = parseFloat(output[3]).toPrecision(4)/100000000 + '%';
	document.getElementById("log5").innerHTML = parseFloat(output[4]).toPrecision(4)/100000000 + '%';
	document.getElementById("log6").innerHTML = parseFloat(output[5]).toPrecision(4)/100000000 + '%';
	document.getElementById("log7").innerHTML = parseFloat(output[6]).toPrecision(4)/100000000 + '%';
	document.getElementById("log8").innerHTML = parseFloat(output[7]).toPrecision(4)/100000000 + '%';
		})
	};

var scalingFactorGraph0 = function() {
	socket.on('message', function(output){

	cpuUsageValue0 = output[0];
		})
			return cpuUsageValue0/10000000000;
	};

var scalingFactorGraph1 = function() {
	socket.on('message', function(output){

	cpuUsageValue1 = output[1];
		})
			return cpuUsageValue1/10000000000;
	};

var scalingFactorGraph2 = function() {
	socket.on('message', function(output){

	cpuUsageValue2 = output[2];
		})
			return cpuUsageValue2/10000000000;
	};

var scalingFactorGraph3 = function() {
	socket.on('message', function(output){

	cpuUsageValue3 = output[3];
		})
			return cpuUsageValue3/10000000000;
	};

var scalingFactorGraph4 = function() {
	socket.on('message', function(output){

	cpuUsageValue4 = output[4];
		})
			return cpuUsageValue4/10000000000;
	};

var scalingFactorGraph5 = function() {
	socket.on('message', function(output){

	cpuUsageValue5 = output[5];
		})
			return cpuUsageValue5/10000000000;
	};

var scalingFactorGraph6 = function() {
	socket.on('message', function(output){

	cpuUsageValue6 = output[6];
		})
			return cpuUsageValue6/10000000000;
	};

var scalingFactorGraph7 = function() {
	socket.on('message', function(output){

	cpuUsageValue7 = output[7];
		})
			return cpuUsageValue7/10000000000;
	};
