// server.js
// Capstone Design ECE - Pharos
// Authors: Abbas Furniturewalla, Jeremy Savarin, Esther Shimanovich

// HTTP server module
const http = require('http');
// Allows parsing of HTTP request bodies
const bodyParser = require('body-parser');
// Web framework for node that simplifies development of web apps
const express = require('express');
// Simulate DELETE and PUT HTTP requests
const methodOverride = require('method-override');
// Logs HTTP requests to the console
const morgan = require('morgan');
// MongoDB connection drive
const mongoose = require('mongoose');
// Allow CORS requests
const cors = require('cors');
// Load config variables
const config = require('config');

// Load in routes
const routes = require('./routes');

// Initialize express application
const app = express();

// Connect to MongoDB
// mongoose.connect(config.db.url);

// Set up middleware for application
// Set up static files to be served
app.use(express.static(__dirname + '/../dist'));
// Log HTTP requests to console (dev = colors!)
app.use(morgan('dev'));
app.use(cors());
// Parse url-encoded data
app.use(bodyParser.urlencoded());
// Parse JSON data
app.use(bodyParser.json());
app.use(methodOverride());

// Set up authenticated routes
app.use('/auth', routes);

// Send index.html when hitting frontpage
app.get('/*', (req, res) => {
    res.sendFile('index.html', { root: __dirname + '/../dist/'});
});

// If running server on different environment, use configured environment's port.
// Otherwise, use 8080
const port = process.env.PORT || 8080;

// Create server
const server = http.createServer(app);

// Listen for connections on port
server.listen(port);
console.log('Server currently listening on port ' + port + '!');
