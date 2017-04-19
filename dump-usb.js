const serialport = require("serialport");
const SerialPort = serialport.SerialPort;

const PORT_NAME = 'COM3';
const BAUD_RATE = 9600;

const serialPort = new SerialPort(PORT_NAME, {
	baudrate: BAUD_RATE,
  	parser: serialport.parsers.readline("\n")
});

serialPort.on("open", function () {
  	console.log(process.platform);
  	serialPort.on('data', function(data) {
    	console.log(data);
  	});
});
