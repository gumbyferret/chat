var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res) {
  res.send('<h1>Hello world</h1>');
});

http.listen(3000m function(){
  console.log('listening on 192.168.1.101:3000');
});
