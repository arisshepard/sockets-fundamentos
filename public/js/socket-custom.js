// función de la librería de arriba
var socket = io();

// ON: Escuchar sucesos
socket.on('connect', function () {
	console.log('Conectado al servidor');
});

socket.on('disconnect', function () {
	console.log('Perdimos conexión con el servidor');
});

socket.on('enviarMensaje', function (mensaje) {
	console.log('Servidor: ', mensaje);
});

// EMIT: Enviar información
socket.emit(
	'enviarMensaje',
	{ usuario: 'Maria', mensaje: 'Hola Mundo' },
	function (resp) {
		console.log('respuesta server: ', resp);
	}
);
