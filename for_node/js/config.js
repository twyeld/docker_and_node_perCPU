
/////////////text////////////////

		var configText = {
		 type: "radialGauge",
		 data: {
		  labels: ["Metrics"],
		  datasets: [
		   {
			data: [scalingFactorText()],
			backgroundColor: 'rgb(255, 0, 0)',
			borderWidth: 0,
		   }
		  ]
		 },
		 options: {
		  responsive: false,
		  legend: {},
		  title: {
		   display: false,
		   text: ""
		  },
		  //this is where we can comment in/out features from Chart.RadialGauge.umd.js
		  centerPercentage: 80, //how big the inner circle space is
		  roundedCorners: false,
		  trackColor: 'rgb(255, 255, 255)', //circle behind gauge circle
		 }
		};

/////////////red////////////////

		var configRed = {
		 type: "radialGauge",
		 data: {
		  labels: ["Metrics"],
		  datasets: [
		   {
			data: [scalingFactorGraph0()],
			backgroundColor: 'rgb(255, 0, 0)',
			borderWidth: 0,
		   }
		  ]
		 },
		 options: {
		  responsive: false,
		  legend: {},
		  title: {
		   display: true,
		   text: "CPU core0 % use"
		  },
		  //this is where we can comment in/out features from Chart.RadialGauge.umd.js
		  centerPercentage: 80, //how big the inner circle space is
		  roundedCorners: false,
		  trackColor: 'rgb(255, 255, 255)', //circle behind gauge circle
		 }
		};

/////////////orange////////////////

		var configOrange = {
		 type: "radialGauge",
		 data: {
		  labels: ["Metrics"],
		  datasets: [
		   {
			data: [scalingFactorGraph1()],
			backgroundColor: ["orange"],
			borderWidth: 0,
		   }
		  ]
		 },
		 options: {
		  responsive: false,
		  legend: {},
		  title: {
		   display: true,
		   text: "CPU core1 % use"
		  },
		  //this is where we can comment in/out features from Chart.RadialGauge.umd.js
		  centerPercentage: 80, //how big the inner circle space is
		  roundedCorners: false,
		  trackColor: 'rgb(255, 255, 255)', //circle behind gauge circle
		 }
		};

/////////////yellow////////////////

		var configYellow = {
		 type: "radialGauge",
		 data: {
		  labels: ["Metrics"],
		  datasets: [
		   {
			data: [scalingFactorGraph2()],
			backgroundColor: ["yellow"],
			borderWidth: 0,
		   }
		  ]
		 },
		 options: {
		  responsive: false,
		  legend: {},
		  title: {
		   display: true,
		   text: "CPU core2 % use"
		  },
		  //this is where we can comment in/out features from Chart.RadialGauge.umd.js
		  centerPercentage: 80, //how big the inner circle space is
		  roundedCorners: false,
		  trackColor: 'rgb(255, 255, 255)', //circle behind gauge circle
		 }
		};

/////////////cyan////////////////

		var configCyan = {
		 type: "radialGauge",
		 data: {
		  labels: ["Metrics"],
		  datasets: [
		   {
			data: [scalingFactorGraph3()],
			backgroundColor: ["cyan"],
			borderWidth: 0,
		   }
		  ]
		 },
		 options: {
		  responsive: false,
		  legend: {},
		  title: {
		   display: true,
		   text: "CPU core3 % use"
		  },
		  //this is where we can comment in/out features from Chart.RadialGauge.umd.js
		  centerPercentage: 80, //how big the inner circle space is
		  roundedCorners: false,
		  trackColor: 'rgb(255, 255, 255)', //circle behind gauge circle
		 }
		};


/////////////blue////////////////

		var configBlue = {
		 type: "radialGauge",
		 data: {
		  labels: ["Metrics"],
		  datasets: [
		   {
			data: [scalingFactorGraph4()],
			backgroundColor: ["blue"],
			borderWidth: 0,
		   }
		  ]
		 },
		 options: {
		  responsive: false,
		  legend: {},
		  title: {
		   display: true,
		   text: "CPU core4 % use"
		  },
		  //this is where we can comment in/out features from Chart.RadialGauge.umd.js
		  centerPercentage: 80, //how big the inner circle space is
		  roundedCorners: false,
		  trackColor: 'rgb(255, 255, 255)', //circle behind gauge circle
		 }
		};


/////////////green////////////////

		var configGreen = {
		 type: "radialGauge",
		 data: {
		  labels: ["Metrics"],
		  datasets: [
		   {
			data: [scalingFactorGraph5()],
			backgroundColor: ["green"],
			borderWidth: 0,
		   }
		  ]
		 },
		 options: {
		  responsive: false,
		  legend: {},
		  title: {
		   display: true,
		   text: "CPU core5 % use"
		  },
		  //this is where we can comment in/out features from Chart.RadialGauge.umd.js
		  centerPercentage: 80, //how big the inner circle space is
		  roundedCorners: false,
		  trackColor: 'rgb(255, 255, 255)', //circle behind gauge circle
		 }
		};


/////////////black////////////////

		var configBlack = {
		 type: "radialGauge",
		 data: {
		  labels: ["Metrics"],
		  datasets: [
		   {
			data: [scalingFactorGraph6()],
			backgroundColor: ["black"],
			borderWidth: 0,
		   }
		  ]
		 },
		 options: {
		  responsive: false,
		  legend: {},
		  title: {
		   display: true,
		   text: "CPU core6 % use"
		  },
		  //this is where we can comment in/out features from Chart.RadialGauge.umd.js
		  centerPercentage: 80, //how big the inner circle space is
		  roundedCorners: false,
		  trackColor: 'rgb(255, 255, 255)', //circle behind gauge circle
		 }
		};


/////////////grey////////////////

		var configGrey = {
		 type: "radialGauge",
		 data: {
		  labels: ["Metrics"],
		  datasets: [
		   {
			data: [scalingFactorGraph7()],
			backgroundColor: ["grey"],
			borderWidth: 0,
		   }
		  ]
		 },
		 options: {
		  responsive: false,
		  legend: {},
		  title: {
		   display: true,
		   text: "CPU core7 % use"
		  },
		  //this is where we can comment in/out features from Chart.RadialGauge.umd.js
		  centerPercentage: 80, //how big the inner circle space is
		  roundedCorners: false,
		  trackColor: 'rgb(255, 255, 255)', //circle behind gauge circle
		 }
		};
