'use strict';

var util = require('util');

module.exports = {
  createuser: createuser,
  };

function createuser(req, res) {

  var NewUser = req.swagger.params.newuser.value;
  
  var Result = NewUser;
  
  res.json(Result);
}

