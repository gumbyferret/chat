var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res) {
  //res.send('<h1>Hello World</h1>');  //send Hello World
  res.sendFile(__dirname + '/index.html');); //send a file
});

http.listen(3000, function(){
  console.log('listening on 192.168.1.101:3000');
});
