// server/routes/index.js
// Capstone Design ECE - Pharos
// Authors: Abbas Furniturewalla, Jeremy Savarin, Esther Shimanovich

const express = require('express');
const serialport = require('serialport');

const localizer = require('../helpers/localizer');

const router = express.Router();

var PORT_NAME;
// Different port for different platform
if (process.platform === 'linux') {
    PORT_NAME = '/dev/ttyUSB';
} else if (process.platform === 'win32') {
    PORT_NAME = 'COM3';
}

const BAUD_RATE = 9600;

const serial0 = new serialport(`${PORT_NAME}0`, {
    baudrate: BAUD_RATE,
    parser: serialport.parsers.readline('\n')
});

const serial1 = new serialport(`${PORT_NAME}1`, {
    baudrate: BAUD_RATE,
    parser: serialport.parsers.readline('\n')
});

var serialData0;
var serialData1;

serial0.on('open', () => {
    console.log('Serial port 0 open!');

    serial0.on('data', data => {
        // Regex for numbers
        let re = /^[0-9]+\.[0-9]+/;

        let redelete = /^delete/;

        if (re.test(data)) {
            let range = data.match(re)[0];

            if (range) {
                serialData0 = range;
                console.log(`Serial data 0: ${serialData0}`);
            }
        }
        // else if (redelete.test(data)) {
        //     serialData0 = NaN;
        // }
    });
});

serial1.on('open', () => {
    console.log('Serial port 1 open!');

    serial1.on('data', data => {
        // Regex for numbers
        let re = /^[0-9]+\.[0-9]+/;

        // let redelete = /^delete/;

        if (re.test(data)) {
            let range = data.match(re)[0];

            if (range) {
                serialData1 = range;
                console.log(`Serial data 1: ${serialData1}`);
            }
        }
        // else if (redelete.test(data)) {
        //     serialData1 = NaN;
        // }
    });
});

router.get('/query', (req, res) => {
    // let coordinates = localizer(serialData0, serialData1);

    return res.json(localizer(serialData0, serialData1));
});

module.exports = router;
