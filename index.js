var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/www'));

app.get('/', function(req,res){
    res.sendFile(__dirname + '/www/');
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
    });
    socket.on('ready', function(){
        console.log('ready');
    })
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
