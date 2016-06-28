var socket = io();
socket.on('connect',function(){
	console.log('I am connected to socket.io server.');
});

socket.on('message',function(message){
	console.log(message.text);
	var messages$ = jQuery('.messages');

	messages$.prepend('<p>' + message.text + '</p>');
});

// Handles submitting of new message
var form$ = jQuery('#message-form');
var message$ = form$.find('input[name=message]');
form$.on('submit',function(event){
	event.preventDefault();
	socket.emit('message',{
		text : message$.val()
	});

	message$.val('');
});