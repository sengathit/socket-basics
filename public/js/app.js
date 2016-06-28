var socket = io();
socket.on('connect',function(){
	console.log('I am connected to socket.io server.');
});

socket.on('message',function(message){
	console.log(message.text);
});