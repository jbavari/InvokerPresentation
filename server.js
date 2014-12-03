var express = require('express');
var app = express();
var server = require('http').createServer(app);
var PORT = 8080;

var path = __dirname ;
console.log('Path: ', path);

app.use(express.static(path));

server.listen(PORT, function() {
    console.log('InvokerPresentation now listening on port: ' + PORT + '\n');
});

app.use(function(req, res){
	console.log('hello')
  res.send('Hello');
});