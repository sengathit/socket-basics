var socket = io();
socket.on('connect',function(){
	console.log('I am connected to socket.io server.');
});