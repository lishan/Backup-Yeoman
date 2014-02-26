var express = require('express');
var app = express();
app.get('/hello.txt', function(req, res){
  var body = '<html><head><title>this is a title</title></head><body><h1>I\'m a test</h1></body></html>';
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(body));
  res.end(body);
});
app.listen(8080);
console.log('Listening on port 8080');
