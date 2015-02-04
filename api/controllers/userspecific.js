'use strict';

var util = require('util');

module.exports = {
  getuserforuserid: getuserforuserid,
  putuserforuserid: putuserforuserid,
  deleteuser: deleteuser
  };


function getuserforuserid(req, res) {

  var aUserId = req.swagger.params.userid.value;
  
  var Result = { "id": "1", "name": "terry" };
  
  res.json(Result);
}

function putuserforuserid(req, res) {

  var aUserId = req.swagger.params.userid.value;
  
  var Result = { "id": "1", "name": "terry" };
  
  res.json(Result);
}

function deleteuser(req, res) {

  var aUserId = req.swagger.params.userid.value;
  
  var Result = { "id": "1", "name": "terry" };

  res.json(300,Result);
}
