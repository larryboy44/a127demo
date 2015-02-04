'use strict';

var util = require('util');

module.exports = {
  gethostsforuserid: gethostsforuserid,
  deletehosts: deletehosts
  };


function gethostsforuserid(req, res) {
  var userid = req.swagger.params.userid.value;
  var output = util.format('gethostsforuserid, %s', userid);
  res.json(output);
}

function deletehosts(req, res) {
  var userid = req.swagger.params.userid.value;
  var hostid = req.swagger.params.hostid.value;
   
  var output = util.format('deletehosts %s %s', userid, hostid);
  //var output = util.format('deletehosts, %s', userid);

  res.json(output);
}
