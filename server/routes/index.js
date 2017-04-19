// server/routes/index.js
// Capstone Design ECE - Pharos
// Authors: Abbas Furniturewalla, Jeremy Savarin, Esther Shimanovich

const express = require('express');
const serialport = require('serialport');

const router = express.Router();
const SerialPort = serialport.SerialPort;

const PORT_NAME = '/dev/ttyUSB0';
const BAUD_RATE = 9600;

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

router.post('/query', (req, res) => {
    return res.json({
        serialData
    });
});

module.exports = router;
