'use strict';

var util = require('util');

module.exports = {
  gethostsforuserid: gethostsforuserid
};




function gethostsforuserid(req, res) {

  var aUserId = req.swagger.params.userid.value;

  var Result = [ { "id": "1", "name": "terry" }, { "id": "2", "name": "nathan" } ];

  // seek for id
  // if found
  //   if deleted
  //     return status 200
  //   else
  //     return 500  // internal server error, could not delete
  // else if not found
  //   return status 404
    
  res.json(200,Result);
}
