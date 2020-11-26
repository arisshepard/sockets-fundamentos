const express = require('express');
const colors = require('colors');
const socketIO = require('socket.io');
const http = require('http'); // NODE por defecto

const path = require('path');

const app = express();
// porque express usa métodos de http
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO = esta es la comunicación del backend
// let io = socketIO(server);
module.exports.io = socketIO(server);
require('./sockets/socket');

// app.listen(port, (err) => {
server.listen(port, (err) => {
	if (err) throw new Error(err);

	console.log('Servidor corriendo en puerto '.grey + port.toString().green);
});
