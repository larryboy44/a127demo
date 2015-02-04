'use strict';

var a127 = require('a127-magic');
var express = require('express');

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

module.exports = app;   // for testing

a127.init(function(config) {
    
  app.use(a127.middleware(config));

  app.listen(process.env.PORT || 10010);

  console.log('try this:\ncurl http://localhost:10010/hello?name=Scott');
});
