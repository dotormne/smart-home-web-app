// include the libraries
var serialport = require('serialport');
SerialPort = serialport.SerialPort;
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var ent = require('ent'); // Blocks HTML characters (security equivalent to htmlentities in PHP)
var fs = require('fs'); //module for reading files

var latestData = 0; //stores latest serial data
var spdataRec = false; //flag for Serial port data received

// Loading the page index.html
app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

server.listen(3000);

io.on("connection", function(socket){
	console.log('A client connected to the server...');
	console.log('\n');
	
	var interval = setInterval(function(){
		if(spdataRec == true){
		console.log(">>>Sending data to the client: ");
		console.log("Sent data: " + latestData);
		console.log('\n');
		socket.emit('recData', latestData);
		spdataRec = false;
		}
    }, 1000);
	
	socket.on("disconnect", function(){
		console.log('A client disconnected from the server...');
		console.log('\n');
        clearInterval(interval);
    });
	
	socket.on('wrData', function(data){
		console.log("<<<Receiving data from the client: ");
		console.log("Received data: " + data);
		console.log('\n');
		
		//Write data to the serial port
		myPort.write(data, function(err, results) {
		console.log('err ' + err);
		console.log('results ' + results);
		console.log('\n');
		});
	});
});

io.on('connection_failed', function(){
	console.log('Connection failed...');
	console.log('\n');
});
   
//Configure the serial port
var portName = process.argv[2]; //get port name from the command line
 var myPort = new SerialPort(portName, {
   baudRate: 9600,
   // look for return and newline at the end of each data packet:
   parser: serialport.parsers.readline("\n")
 });
 
//serial port event functions
function showPortOpen() {
   console.log('Port open. Data rate: ' + myPort.options.baudRate);
}
function saveLatestData(data) {
   //console.log('Serial port data: ' + data);
   latestData = data;
   spdataRec = true;
}
function showPortClose() {
   console.log('Port closed.');
}
function showError(error) {
   console.log('Serial port error: ' + error);
}
 
//serial port events
myPort.on('open', showPortOpen);
myPort.on('data', saveLatestData);
myPort.on('close', showPortClose);
myPort.on('error', showError);