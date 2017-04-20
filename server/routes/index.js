// server/routes/index.js
// Capstone Design ECE - Pharos
// Authors: Abbas Furniturewalla, Jeremy Savarin, Esther Shimanovich

const express = require('express');
const serialport = require('serialport');

const router = express.Router();
const SerialPort = serialport.SerialPort;

var PORT_NAME;
// Different port for different platform
if (process.platform === 'linux') {
    PORT_NAME = '/dev/ttyUSB0';
} else if (process.platform === 'win32') {
    PORT_NAME = 'COM3';
} 

const BAUD_RATE = 115200;

const serial = new SerialPort(PORT_NAME, {
    baudrate: BAUD_RATE,
    parser: serialport.parsers.readline('\n')
});

var serialData;

serial.on('open', () => {
    console.log('Serial port open!');

    serial.on('data', data => {
        console.log(`Serial data: ${data}`);
        serialData = data;
    });
});

router.get('/query', (req, res) => {
    return res.json({
        serialData
    });
});

module.exports = router;
