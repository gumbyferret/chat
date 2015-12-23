var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
  //res.send('<h1>Hello World</h1>');  //send Hello World
  res.sendFile(__dirname + '/index.html'); //send a file
});

io.on('connection', function(socket) {
  console.log('a user connected');
})

http.listen(3000, function(){
  console.log('listening on 192.168.1.101:3000');
});
