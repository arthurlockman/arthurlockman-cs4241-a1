var express = require('express');
var path = require('path');

var app = express();
var port = process.env.PORT || 3000;

app.use('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.use('/self.jpg', function(req, res) {
  res.sendFile(path.join(__dirname, '/self.jpg'));
});

app.listen(port, function() {
  console.log('App is listening on port ' + port);
});
