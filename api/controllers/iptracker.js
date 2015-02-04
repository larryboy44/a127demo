'use strict';

var util = require('util');

module.exports = {
  postuser: postuser,
  getuserforuserid: getuserforuserid,
  putuserforuserid: putuserforuserid,
  deleteuser: deleteuser,
  gethostsforuserid: gethostsforuserid,
  posthostforuserid: posthostforuserid,
  gethostforuseridhostid: gethostforuseridhostid,  
  puthostforuseridhostid: puthostforuseridhostid,  
  deletehostforuseridhostid: deletehostforuseridhostid,  
  getusers: getusers,
  geteventsforuseridhostid: geteventsforuseridhostid,
  deleteeventsforuseridhostid: deleteeventsforuseridhostid,
  posteventforuseridhostid: posteventforuseridhostid
}

function usersearch( userid ) {
  
  Return (true)
  
}


function postuser(req, res) {

  var newuser = req.swagger.params.newuser.value;
  var userid = newuser.id
  
  var Result = newuser;
  
  res.json(Result);
}


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


function gethostsforuserid(req, res) {
  var userid = req.swagger.params.userid.value;
  var output = util.format('gethostsforuserid, %s', userid);
  res.json(200,output);
}


function posthostforuserid(req, res) {

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

function gethostforuseridhostid(req, res) {
  var userid = req.swagger.params.userid.value;
  var hostid = req.swagger.params.hostid.value;
  var output = util.format('gethostforuseridhostid, %s', userid);
  
  res.json(output);
}


function puthostforuseridhostid(req, res) {
  var userid = req.swagger.params.userid.value;
  var hostid = req.swagger.params.hostid.value;
  var output = util.format('puthostforuseridhostid, %s %s', userid, hostid);

  res.json(output);
}


function deletehostforuseridhostid(req, res) {
  var userid = req.swagger.params.userid.value;
  var hostid = req.swagger.params.hostid.value;
  
  var output = util.format('deletehostforuseridhostid, %s %s', userid, hostid);

  res.json(output);
}


function getusers(req, res) {
  var username = req.swagger.params.username.value;
  var limit = req.swagger.params.limit.value;
  var offset = req.swagger.params.offset.value;
  
  var output = util.format('getusers, %s %s %s', username, limit, offset);

  res.json(output);
}


function posteventforuseridhostid(req, res) {
  var userid = req.swagger.params.userid.value;
  var hostid = req.swagger.params.hostid.value;
  
  var output = util.format('posteventforuseridhostid, %s, %s', userid, hostid);

  res.json(output);
}


function geteventsforuseridhostid(req, res) {
  var userid = req.swagger.params.userid.value;
  var hostid = req.swagger.params.hostid.value;
  var lastevent = req.swagger.params.lastevent.value;
  var limit = req.swagger.params.limit.value;
  
  var output = util.format('geteventsforuseridhostid, %s %s %s %s', userid, hostid, lastevent, limit);

  res.json(output);
}


function deleteeventsforuseridhostid(req, res) {
  var userid = req.swagger.params.userid.value;
  var hostid = req.swagger.params.hostid.value;
  var keeplastevent = req.swagger.params.keeplastevent.value
  
  var output = util.format('deleteeventsforuserid, %s %s %s', userid, hostid, keeplastevent);

  res.json(output);
}


