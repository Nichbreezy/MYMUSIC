var express = require('express');
var app = express();

app.get('/', function(req, resp){
  resp.sendFile('index.html')
})
