const serialport = require("serialport");
const SerialPort = serialport.SerialPort;

const PORT_NAME = '/dev/ttyUSB0';
const BAUD_RATE = 9600;

const serialPort = new SerialPort(PORT_NAME, {
	baudrate: BAUD_RATE,
  	parser: serialport.parsers.readline("\n")
});

serialPort.on("open", function () {
  	console.log('open');
  	serialPort.on('data', function(data) {
    	console.log(data);
  	});
});