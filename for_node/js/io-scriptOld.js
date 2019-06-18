
	cpuSpeedValue0 = 0;
	cpuSpeedValue1 = 0;
	cpuSpeedValue2 = 0;
	cpuSpeedValue3 = 0;
	cpuSpeedValue4 = 0;
	cpuSpeedValue5 = 0;
	cpuSpeedValue6 = 0;
	cpuSpeedValue7 = 0;

var randomScalingFactor = function() {
	socket.on('message', function(output){

	//var output3 = output

	//var output3 = parseFloat(output).toPrecision(4);// decimal places
	//var output3 = output2.toString();
	//console.log(output3);

	cpuSpeedValue0 = output[0];
	cpuSpeedValue1 = output[1];
	cpuSpeedValue2 = output[2];
	cpuSpeedValue3 = output[3];
	cpuSpeedValue4 = output[4];
	cpuSpeedValue5 = output[5];
	cpuSpeedValue6 = output[6];
	cpuSpeedValue7 = output[7];


	//document.getElementById("log").innerHTML = output3[0] + '%';
	document.getElementById("log").innerHTML = parseFloat(output[0]).toPrecision(4)/100000000 + '%';
	//cpuUsageValue;
	document.getElementById("log2").innerHTML = parseFloat(output[1]).toPrecision(4)/100000000 + '%';
	document.getElementById("log3").innerHTML = parseFloat(output[2]).toPrecision(4)/100000000 + '%';
	document.getElementById("log4").innerHTML = parseFloat(output[3]).toPrecision(4)/100000000 + '%';
	document.getElementById("log5").innerHTML = parseFloat(output[4]).toPrecision(4)/100000000 + '%';
	document.getElementById("log6").innerHTML = parseFloat(output[5]).toPrecision(4)/100000000 + '%';
	document.getElementById("log7").innerHTML = parseFloat(output[6]).toPrecision(4)/100000000 + '%';
	document.getElementById("log8").innerHTML = parseFloat(output[7]).toPrecision(4)/100000000 + '%';
		})
			return cpuSpeedValue0/10000000000;
			return cpuSpeedValue1/10000000000;
			return cpuSpeedValue2/10000000000;
			return cpuSpeedValue3/10000000000;
			return cpuSpeedValue4/10000000000;
			return cpuSpeedValue5/10000000000;
			return cpuSpeedValue6/10000000000;
			return cpuSpeedValue7/10000000000;
			//console.log('cpuSpeedValue0: ' + cpuSpeedValue0);

	};
